const defaultState = {
    projects: [
        {
            id: 'mock-api-server',
            contributors: [
                'dropbeardan'
            ],
            title: 'Mock API Server',
            summary: 'A tool to generate RESTful API mock endpoints.',
            image: '/resources/mock-api-server-hero.jpg',
            techIcons: [
                { title: 'Node JS', src: '/resources/node-black.svg' },
                { title: 'React', src: '/resources/react.svg' }
            ],
            url: 'https://apiserver.dbplayground.com'
        }
    ]
};

const projectReducer = (state = defaultState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default projectReducer;