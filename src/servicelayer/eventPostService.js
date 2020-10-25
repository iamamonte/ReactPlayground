/**
 * @description  Services are responsible for normalizing data returned from the DAL and publishing the payload along with an identifying event aka type. 
 * @author - Amonte
 */
import * as DAL from './servicelayer-dal'
import * as EVENT from './servicelayer-events'
import {call, put} from 'redux-saga/effects'

export function* fetchMyRecent(payload)
{
    try{
        const result = yield call(DAL.getMyRecent,payload);
        //TODO: normalize
        yield put({
            type:EVENT.RESPONSE_MYRECENT,
            data:{response:result, payload:payload}
        });
    }
    catch(e){
        yield put({
            type:EVENT.RESPONSE_MYRECENT,
            data:{error:e, payload:payload},
            isError:true
        });
    }
}


