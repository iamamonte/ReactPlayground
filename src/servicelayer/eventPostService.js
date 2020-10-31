/**
 * @description  Services are responsible for normalizing data returned from the DAL and publishing the payload along with an identifying action. 
 * @author - Amonte
 */
import * as DAL from './servicelayer-dal'
import * as ACTION from './servicelayer-actions'
import {call, put} from 'redux-saga/effects'
import {Normalize} from './normalizer'

export function* fetchFeed(dispatchObject)
{
    
    try{
        let payload = dispatchObject.payload;
        let feedResult = yield call(DAL.getFeed, payload.userProfileId, payload.after);
        let events = Normalize.events(feedResult.events);
        let posts = Normalize.posts(feedResult.posts);
        let lastRef = feedResult.last;
        yield put({
            type: ACTION.RESPONSE_FEED,
            data: {events:events, posts:posts, last:lastRef}
        });

    }
    catch(e){
        yield put({
            type:ACTION.RESPONSE_FEED,
            data:{error:e, payload:dispatchObject},
            isError:true
        });
    }
}

export function* fetchMyRecent(dispatchObject)
{
    try {
        const eventsResult = yield call(DAL.fetchEvents,dispatchObject.payload);
        const postsResult = yield call(DAL.getFeed, dispatchObject.payload.userProfileId,dispatchObject.payload.afterPost);
        let response = {eventsResponse:{}, postsResponse:{}};
        if(eventsResult)
        {
            eventsResult.events = Normalize.events(eventsResult.events);
            response.eventsResponse = eventsResult; 
        }
        
        if(postsResult)
        {
            response.postsResponse = postsResult;
        }
 
        yield put({
            type: ACTION.RESPONSE_MYRECENT,
            data: { response: response, payload: dispatchObject }
        });
    }
    catch(e){
        yield put({
            type:ACTION.RESPONSE_MYRECENT,
            data:{error:e, payload:dispatchObject},
            isError:true
        });
    }
}


