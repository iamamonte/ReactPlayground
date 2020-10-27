/**
 * @description  Services are responsible for normalizing data returned from the DAL and publishing the payload along with an identifying event aka type. 
 * @author - Amonte
 */
import * as DAL from './servicelayer-dal'
import * as EVENT from './servicelayer-events'
import {call, put} from 'redux-saga/effects'
import {Normalize} from './normalizer'

export function* fetchMyRecent(payload)
{
    try {
        const eventsResult = yield call(DAL.getEventsExample,payload);
        const postsResult = yield call(DAL.getPostsExample,payload);
        let response = {events:[], posts:[]};
        if(eventsResult)
        {
            response.events = Normalize.events(eventsResult);
            response.posts = postsResult;
            yield put({
                type: EVENT.RESPONSE_MYRECENT,
                data: { response: response, payload: payload }
            });
        }
    }
    catch(e){
        yield put({
            type:EVENT.RESPONSE_MYRECENT,
            data:{error:e, payload:payload},
            isError:true
        });
    }
}


