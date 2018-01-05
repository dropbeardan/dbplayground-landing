import React from 'react';

import './SlideCard.less';

export default class SlideCard extends React.Component {

    render() {
        return (
            <div className='SlideCard'>
                <section className='front'>
                    {this.props.front}
                </section>

                <section className='back'>
                    {this.props.back}
                </section>
            </div>
        );
    };
};