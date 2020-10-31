/**
 * @description This file is responsible for data access against persisted data stores.
 * @author - Amonte
 */
import {firestoreDB as db} from '../util/config'
import * as repository from '../data/dummydata.json';
import {DateTime} from 'luxon'
const RESULT_LIMIT = 10;
// const ORDERBY_ASCENDING = "asc";
const ORDERBY_DESCENDING = "desc";

export async function getUserProfile(profileId) {
    await db.collection('profiles').doc(profileId).get().then(doc => {
        if (doc.exists) {
            let p = doc.data();
            p.ref = doc.ref;
            p.id = doc.id;
            return p;
        } else {
            return null;
        }
    });
}

export async function fetchEvents(filter) {
    let events = []
    const collection = db.collection('events');
    let query = collection.limit(RESULT_LIMIT);
    console.log(filter);
    query = filter.state ? query.where("state","==",filter.state.toUpperCase()) : query;
    query = filter.city ? query.where("city", "==", filter.city.toLowerCase()) : query;

    if(filter.eventDate)
    {

        const dt = DateTime.fromISO(filter.eventDate.toISOString());
        query = filter.eventDate ? query.where("eventDate", ">", dt.toISO()) : query;
    }
    //paging
    if(filter.after)
    {
        query = query.startAfter(filter.after)
    }
    const snapshot = await query.get();
    const docs = snapshot.docs;
    let first = docs[0];
    let last = docs[docs.length -1];
    snapshot.forEach(doc => {
      events.push(doc.data());
    });
    return {events:events, first:first, last:last};
}


export async function getFeed(userProfileId, after) {
    let query = db.collection('profiles').doc(userProfileId)
        .collection('feed')
        .orderBy('timestamp', ORDERBY_DESCENDING)
        .limit(RESULT_LIMIT * 2)
    if (after) {
        query = query.startAfter(after);
    }
    return query.get().then(snapshot => {
        const feedDocuments = snapshot.docs;
        let feeds = []
        let last = feedDocuments[feedDocuments.length - 1];
        feedDocuments.forEach(doc => {
            feeds.push(doc.data());
        });
        //each feed document is really just a reference to another document
        let feedReferences = [];
        feeds.forEach(feed => {
            feedReferences.push(feed.ref.get().then(feedReference => {
                return feedReference.data();  //add the feed's referenced document's data (as a promise)
            }));
        });
        return Promise.all(feedReferences).then(referenceData => { //resolve all the feed reference promises (fetch document data)
            //the reference should either be an "event" reference or "post" 
            //feed "posts" can be passed directly.
            let posts = [];
            referenceData.forEach(post => {
                if(!post.idEvent)
                {
                    posts.push(post);
                }
            });
            //events have to be fetched from event column. The "event" in the feed collection is only of use to retrieve the event doc ID
            let events = [];
            referenceData.forEach(doc => {
                if (doc.idEvent) {
                    let docId = doc.idEvent;
                    events.push(db.collection("events").doc(docId).get().then(event => {
                        let _event = event.data();
                        return _event; //adding event reference to collection. Will need to be resolved.
                    }));
                }
            });

            return Promise.all(events).then(values=> { //resolving all event calls
                return {events:values, posts:posts, last:last} //end of promise chain
            });
        });
        
        
    });
}


export async function getEventsExample() {
    let events = []
    const citiesRef = db.collection('events');
    const snapshot = await citiesRef.where('state', '==', "FL").limit(10).get();
    
    const docs = snapshot.docs;
    let first = docs[0];
    let last = docs[docs.length -1];
    snapshot.forEach(doc => {
      events.push(doc.data());
    });
    return {events:events, first:first, last:last};
}

export function getPostsExample() {
    let posts = repository.posts || [];
    return {posts:posts, first:null, last:null};
}

 export function getMyRecent(payload) {
    return new Promise((resolve,reject) => {
        try{
         //fake fetch
        let events = repository.events;
        let posts = repository.posts;
        let data = {events:events, posts:posts};
        
        resolve(data);
        }
        catch(e){reject(e);}
    });
 }

 