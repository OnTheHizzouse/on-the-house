import Splash, {SplashEvents} from "./views/Splash.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Home from "./views/Home.js";
import Profile from "./views/Profile.js";


/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Splash,
            state: {},
            uri: '/',
            title: 'Splash',
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
                user:'/api/users/test1@email.com',
                posts:'/api/posts'
            },
            uri: location.pathname,
            title: 'Home',
        },
        '/profile': {
            returnView: Profile,
            state: {
                //todo change from fake user to a real user
                user:'/api/users/test1@email.com'
            },
            uri: '/profile',
            title: 'Profile',
        }
    };

    return routes[URI];
}

