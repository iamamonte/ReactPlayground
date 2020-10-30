export interface Event {
    browserUrl:string, //browser_url
    category:string,
    city:string
    description:string // eventAbout
    eventDate:Date,
    eventEndDate:Date | null
    eventId:number,
    location:EventLocation, //eventLocation
    name:string, //eventTitle
    eventType:string,
    isVirtual:boolean,
    zipCode:number //eventZipCode
    compressedImg:string, //imageUrl
    importDate:Date | null,
    modified:Date | null, //modified_date
    img:string, //orignalImageUrl
    state:string
    tags:string[]
}

export interface EventLocation 
{
    lat:number,
    lng:number
}

export interface Post {
    id:string // uid
    ,content:string
    ,imgs:string[]
    ,time:Date | null
    ,stats:PostStats
    
}

export interface PostStats 
{
    likes:number,
    reposts:number,
    comments:number,
    favorites:number
}

export interface FeedResponse
{
    events:Event[],
    posts:Post[]
}