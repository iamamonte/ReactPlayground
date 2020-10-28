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
        default:
            return {...state};
    }
   
}