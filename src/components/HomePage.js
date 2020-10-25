import '../styles/HomePage.css'
import * as QueryString from 'query-string'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Container, Nav } from 'react-bootstrap'
import  CreatePost  from './CreatePost'
import  DisplayEvent  from './DisplayEvent'
import  DisplayPost  from './DisplayPost'
import { Profiles } from '../data/dummyData.ts';
import * as EVENT from '../servicelayer/servicelayer-events'

const HomePage = (props) => {

    //check query string
    let query = QueryString.parse(props.location.search);
    let userProfile = props.userProfile ?? null;
    let view = query.view ?? 'recent';
    
    //dummy information placeholder
    if (!userProfile)
    {
        userProfile = Profiles.amonte;
    }

    //dummy data fetch
    let data = {events:[],posts:[]};
    let fetchEvents = false;
    let fetchPosts = false;
    switch(view)
    {
        case "recent":
            //fetch all "recent" events/posts irrespective of current user
            fetchPosts = true;
            fetchEvents = true;
            break;
        case "myevents":
            fetchEvents = true;
            //fetch users upcoming (?) events
            break;
        case "myposts":
            fetchPosts = true;
            //fetch users posts
            break;
        default:
            break;
    }

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type:EVENT.REQUEST_MYRECENT, payload:{userProfile} })
    }, [dispatch,userProfile]);

    const events = useSelector(state => state.events ?? []);
    const posts = useSelector(state => state.posts ?? []);
    const fetchError = useSelector(state => state.errorMessage ?? "");

    data.events = fetchEvents ? events: [];
    data.posts = fetchPosts ? posts: [];

/** Home View
 * Can handle rendering events or posts
 */
const HomeView = ({data, userProfile, error}) => {
    
    data.events = data.events || [];
    data.posts = data.posts || [];
    let items = data.events.concat(data.posts);
    //TODO: ordering by date
    let mappedData = items.map((item, i)=>{return {item:item, isEvent:item.eventId !== undefined}});

    if(error)
    {
        return (<Container>{error}</Container>)
    }

    return (<Container>
        { 
        mappedData.map((record, i)=>
        {
            if(record.isEvent)
            {
                return (<Row key={i}>
                    <DisplayEvent event={record.item} profile={userProfile} />
                </Row>)
            }
            else{
                return (<Row key={i}>
                    <DisplayPost post={record.item} profile={userProfile} />
                </Row>)
            }
        }
        )}
    </Container>)
}


    return (<Container>
        <Row>
            <CreatePost profile={userProfile} ></CreatePost>
        </Row>
        <Row>
            <Nav className="home-pill-nav" variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/?view=recent" className={view ==="recent" ? "active" : ""} >Recent</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/?view=myevents" className={view ==="myevents" ? "active" : ""} >My Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/?view=myposts" className={view ==="myposts" ? "active" : ""} >My Posts</Nav.Link>
                </Nav.Item>
            </Nav>
        </Row>
        <Row>
            <HomeView data={data} userProfile={userProfile} error={fetchError}></HomeView>
        </Row>
    </Container>)
}

export default HomePage;

