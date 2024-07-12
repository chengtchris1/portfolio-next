// hooks/useCurrentPathname.ts
import { useEffect, useState } from 'react';

const useCurrentPathname = () => {
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        // Set the initial pathname
        setPathname(window.location.pathname);

        // Update pathname on URL change
        const handleRouteChange = () => {
            setPathname(window.location.pathname);
        };

        window.addEventListener('popstate', handleRouteChange);
        window.addEventListener('pushState', handleRouteChange);
        window.addEventListener('replaceState', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
            window.removeEventListener('pushState', handleRouteChange);
            window.removeEventListener('replaceState', handleRouteChange);
        };
    }, []);

    return pathname;
};

export default useCurrentPathname;
