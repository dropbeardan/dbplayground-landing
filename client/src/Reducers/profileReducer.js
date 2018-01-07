const defaultState = {
    profiles: [
        {
            id: 'dropbeardan',
            image: '/images/250x350.png',
            name: 'Daniel Sutisna',
            alias: 'Drop Bear Dan',
            quote: 'Si vis pacem, para bellum.',
            quoteSrc: 'De re militari.',
            email: 'dan.ess.001@gmail.com',
            location: 'Sydney, Australia',
            mapParams: {
                zoom: 9,
                center: { lat: -33.8688, lng: 151.2093 },
                markers: [
                    {
                        lat: -33.8374,
                        lng: 150.9917,
                        label: { lat: -33.8374000, lng: 150.9917000, text: 'Yep, from around there somewhere.' }
                    }
                ]
            },
            currOccupation: 'Learning to type code better and chill',
            prevOccupation: 'Lots of Random Stuff',
            background: 'Bachelor of Pharmacy (USYD)',
            likes: 'Food, Sleep, Games, Robots, Puzzles, Anime, Movies and many more',
            dislikes: 'Inequality, Chillies, Inefficiency',
            techIcons: [
                { title: 'React', src: '/images/react.svg' },
                { title: 'Node JS', src: '/images/node-black.svg' }
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
        }
    ]
};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default profileReducer;