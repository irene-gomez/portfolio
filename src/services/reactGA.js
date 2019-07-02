import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('UA-31238727-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
