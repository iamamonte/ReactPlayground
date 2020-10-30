
import {Event, Post, FeedResponse} from './types'

function normalizeFeed(feed:any[]) : FeedResponse
{
    let feedResponse:FeedResponse = {events:[],posts:[]};
    let events:any[] = [];
    let posts:any[] = []
    feed.forEach(item => {
        if(item.idEvent || item.eventProfileId || item.type === "event") //events
        {
            events.push(item);
        }
        else{posts.push(item);}
    });
    feedResponse.events = normalizeEvents(events);
    feedResponse.posts = normalizePosts(posts);

    return feedResponse;
}

function normalizePosts(posts:any[]):Post[]
{
    let retval:Post[] = []; 
    posts.forEach(post => {
        let _post:Post = 
        {
        id:post.uid
        ,stats: {comments:post.commentsCount ?? 0, likes:post.likesCount ?? 0, favorites:0, reposts:0}
        ,content:post.content ?? ""
        ,imgs:post.images ?? []
        ,time:new Date(post.timestamp.seconds)
        };
        retval.push(_post);
    });
    return retval;
}

function normalizeEvents(events:any[]) : Event[]
{
    let retval:Event[] = []; 
    events.forEach(event => {
        let _event:Event = { 
            browserUrl: event.browser_url ?? "",
            category: event.category ?? "",
            city:event.city ?? "",
            description:event.eventAbout ?? "",
            eventDate: new Date(event.eventDate),
            eventEndDate: event.eventEndDate ? new Date(event.eventEndDate) : null,
            eventId: event.eventId ?? -1
            ,location: event.eventLocation !== undefined ? {lat:event.eventLocation.lat ?? 0, lng:event.eventLocation.lng ?? 0}  : {lat:null,lng:null}
            ,name:event.eventTitle ?? ""
            ,eventType: event.eventType ?? ""
            ,isVirtual:event.eventType === "Virtual"
            ,zipCode:event.eventZipCode
            ,compressedImg:event.imageUrl ?? ""
            ,importDate: event.importDate ? new Date(event.importDate) : null
            ,modified: event.modified_date ? new Date(event.modified_date) : null
            ,img:event.originalImageUrl ?? ""
            ,state:event.state ?? ""
            ,tags:[]
         };
         if(event.tag !== "All") _event.tags.push(event.tag);
        retval.push(_event);
    });
    return retval;
}

export const Normalize = {
    events:normalizeEvents
    ,feed:normalizeFeed
}

