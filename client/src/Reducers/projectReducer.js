const defaultState = {
    projects: [
        {
            id: 'api-endpoint-factory',
            contributors: [
                'dropbeardan'
            ],
            title: 'API Endpoint Factory',
            summary: 'A tool to generate RESTful API endpoints.',
            image: '/images/api-icon.jpg',
            techIcons: [
                { title: 'Node JS', src: '/images/node-black.svg' },
                { title: 'Express', src: '/images/express-black.svg' }
            ],
            solution: '/api-factory',
            details: [
                {
                    name: 'Overview',
                    src: '/api-factory/overview'
                },
                {
                    name: 'Technologies',
                    src: '/api-factory/technologies'
                },
                {
                    name: 'Approach',
                    data: '/api-factory/approach'
                },
                {
                    name: 'Retrospective',
                    data: '/api-factory/retrospective'
                }
            ]
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