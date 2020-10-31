/**
 * @description Reducers should never mutate the state.
 * @author - Amonte
 */
import * as ACTION from './servicelayer-actions'

export const serviceLayerReducer = (state,action)=>
{
    switch(action.type)
    {
        case ACTION.RESPONSE_MYRECENT:
            if(!action.isError)
            {   
                let response = action.data.response;
                return {...state, eventsResponse:response.eventsResponse, postsResponse:response.postsResponse}
            }
            else
            {
                let errorMessage =`Failed to fetch ${ACTION.RESPONSE_MYRECENT}. Error:${action.data.error}`; 
                return {...state, errorMessage:errorMessage, payload:action.data.payload}
            }
        case ACTION.RESPONSE_FEED:
            if(!action.isError)
            {
                return { ...state, events:action.data.events, posts:action.data.posts, last:action.data.last}
            }
            else
            {
                let errorMessage =`Failed to fetch ${action.type}. Error:${action.data.error}`; 
                throw new Error(errorMessage);
            }
        default:
            return {...state};
    }
   
}