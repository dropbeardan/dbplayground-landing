import React from 'react';

import './PreviewCard.less';

export default class PreviewCard extends React.Component {
    render() {
        return (
            <div className='PreviewCard'>
                <div className='imgContainer'>
                    <div className='imgWrapper'>
                        <img src={this.props.image} />
                    </div>

                    <div className='overlay'>
                        Click for Details
                    </div>
                </div>

                <section className='summary'>
                    <header>{this.props.heading}</header>
                    <main>{this.props.content}</main>
                </section>

                <aside className='strip'>
                    {this.props.strip}
                </aside>
            </div>
        );
    };
};