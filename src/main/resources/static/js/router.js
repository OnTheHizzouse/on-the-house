import Splash, {SplashEvents} from "./views/Splash.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Home from "./views/partials/Home.js";


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
            state: {},
            uri: location.pathname,
            title: 'Home',
        },
    };

    return routes[URI];
}

