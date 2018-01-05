const defaultState = {
    mascot: '/images/mascot.png',
    navLogo: '/images/logo.gif',
    navRoutes: [
        {
            route: '/about',
            title: 'About',
            description: 'Read our History',
            frontSrc: '/images/about-front.jpg'
        },
        {
            route: '/profiles',
            title: 'Profiles',
            description: 'Meet the Bears',
            frontSrc: '/images/profile-front.jpg'
        },
        {
            route: '/projects',
            title: 'Projects',
            description: 'Enter the Playground',
            frontSrc: '/images/project-front.jpg'
        },
        {
            route: '/blog',
            title: 'Blog',
            description: 'Hot Drinks around the Campfire',
            frontSrc: '/images/blog-front.jpg'
        }
    ],
    technologies: [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            src: '/images/react.svg'
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            src: '/images/redux.svg'
        },
        {
            title: 'Node JS',
            url: 'https://nodejs.org/',
            src: '/images/node-white.svg'
        },
        {
            title: 'Express',
            url: 'https://expressjs.com/',
            src: '/images/express-white.svg'
        }
    ]
};

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default homeReducer;