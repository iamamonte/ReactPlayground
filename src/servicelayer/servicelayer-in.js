/**
 * This file should only contain logic for catching and passing dispatched events aka types
 * @author - Amonte
 */
import {all, takeLatest} from 'redux-saga/effects'
import * as EVENT from './servicelayer-events'
import {fetchMyRecent} from './eventPostService'


export function* ServiceLayerSaga(){
    yield all([takeLatest(EVENT.REQUEST_MYRECENT, fetchMyRecent)])
}

