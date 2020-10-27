
import {Event} from './types'

function normalizeEvents(events:[any]) : Event[]
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
            ,location: {lat:event.eventLocation.lat ?? 0, lng:event.eventLocation.lng ?? 0}
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
}

