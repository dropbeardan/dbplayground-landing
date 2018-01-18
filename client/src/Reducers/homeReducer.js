const defaultState = {
    mascot: '/resources/mascot.png',
    navLogo: '/resources/logo.gif',
    navRoutes: [
        {
            route: '/about',
            title: 'About',
            description: 'Read our History',
            frontSrc: '/resources/about-front.jpg'
        },
        {
            route: '/profiles',
            title: 'Profiles',
            description: 'Meet the Bears',
            frontSrc: '/resources/profile-front.jpg'
        },
        {
            route: '/projects',
            title: 'Projects',
            description: 'Enter the Playground',
            frontSrc: '/resources/project-front.jpg'
        },
        {
            route: '/blog',
            title: 'Blog',
            description: 'Hot Drinks around the Campfire',
            frontSrc: '/resources/blog-front.jpg'
        }
    ],
    technologies: [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            src: '/resources/react.svg'
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            src: '/resources/redux.svg'
        },
        {
            title: 'Node JS',
            url: 'https://nodejs.org/',
            src: '/resources/node-white.svg'
        },
        {
            title: 'Express',
            url: 'https://expressjs.com/',
            src: '/resources/express-white.svg'
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