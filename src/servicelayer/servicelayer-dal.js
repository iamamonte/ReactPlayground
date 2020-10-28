/**
 * @description This file is responsible for data access against persisted data stores.
 * @author - Amonte
 */
import {firestoreDB as db} from '../util/config'
import * as repository from '../data/dummydata.json';
import {DateTime} from 'luxon'
const RESULT_LIMIT = 10;
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

 