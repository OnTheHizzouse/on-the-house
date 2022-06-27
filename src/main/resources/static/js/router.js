import Splash, {SplashEvents} from "./views/Splash.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Home, {homepageEvent} from "./views/Home.js";
import Profile, {userPostEvents} from "./views/Profile.js";
import Events from "./views/Events.js";
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
            viewEvent: SplashEvents
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
                //todo change from fake user to a real user
                user:'/api/users/email/test1@email.com',
                posts:'/api/posts'
            },
            uri: '/home',
            title: 'Home',
            viewEvent: homepageEvent
        },
        '/profile': {
            returnView: Profile,
            state: {
                //todo change from fake user to a real user
                user:'/api/users/1',
                posts:'/api/posts/searchItemsByUserId/1'
            },
            uri: '/profile',
            title: 'Profile',
            viewEvent: userPostEvents
        },
        '/events':{
            returnView: Events,
            state: {
                },
            uri: '/events',

            title: "Events",
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

