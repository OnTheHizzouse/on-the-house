import Splash from "./views/Splash.js";
import addLoginEvent from "./auth.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Home, {homepageEvent} from "./views/Home.js";
import Profile, {userPostEvents} from "./views/Profile.js";
import Events, {eventsEvents} from "./views/Events.js";
import Landing, {LandingEvents} from "./views/Landing.js";


import About from "./views/About.js";



/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {

    const routes = {
        '/login': {
            returnView: Splash,
            state: {},
            uri: '/login',
            title: 'Login/Register',
            viewEvent: addLoginEvent

        },'/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/home': {
            returnView: Home,
            state: {
                user:'/api/users/me',
                posts:'/api/posts'
            },
            uri: '/home',
            title: 'Home',
            viewEvent: homepageEvent

        },
        '/profile': {
            returnView: Profile,
            state: {
                user:'/api/users/me'
            },
            uri: '/profile',
            title: 'Profile',
            viewEvent: userPostEvents

        },
        '/events':{
            returnView: Events,
            state: {
                user:'/api/users/me',
                posts:'/api/posts'
                },
            uri: '/events',
            title: "Events",
            viewEvent: eventsEvents
        },
        '/':{
            returnView: Landing,
            state: {
                users: '/api/users',
                posts: '/api/posts'
            },
            uri: '/',
            title: "Welcome",
            viewEvent: LandingEvents
        },
        '/about':{
            returnView: About,
            state: {
            },
            uri: '/about',
            title: "About",
        }
    };

    return routes[URI];
}

