import {firestoreDB as db} from '../util/config'
/**
 * @description This file is responsible for data access against persisted data stores.
 * @author - Amonte
 */
import * as repository from '../data/dummydata.json';

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

export async function getEventsExample() {
    let events = []
    const citiesRef = db.collection('events');
    const snapshot = await citiesRef.where('state', '==', "FL").limit(10).get();
    
    snapshot.forEach(doc => {
      events.push(doc.data());
    });
    return events;
}

export function getPostsExample() {
    let posts = repository.posts || [];
    return posts;
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

 