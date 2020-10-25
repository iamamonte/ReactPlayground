/**
 * @description This file is responsible for data access against persisted data stores.
 * @author - Amonte
 */
import * as repository from '../data/dummydata.json';

 function getMyRecent(payload)
 {
    return new Promise((resolve,reject) => {
        try{//fake fetch
        let events = repository.events;
        let posts = repository.posts;
        let data = {events:events, posts:posts};
        
        resolve(data);
        }
        catch(e){reject(e);}
    });
 }

 

 export {getMyRecent}