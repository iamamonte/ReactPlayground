/**
 * This file should only contain logic for catching and passing dispatched events aka types
 * @author - Amonte
 */
import {all, takeLatest} from 'redux-saga/effects'
import * as ACTION from './servicelayer-actions'
import {fetchMyRecent} from './eventPostService'


export function* ServiceLayerSaga(){
    yield all([takeLatest(ACTION.REQUEST_MYRECENT, fetchMyRecent)])
}

