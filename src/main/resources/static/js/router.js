import Splash from "./views/Splash.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";


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

    };

    return routes[URI];
}

