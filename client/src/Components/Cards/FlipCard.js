import React from 'react';

import './FlipCard.less';

export default class FlipCard extends React.Component {
    render() {
        return (
            <div className='FlipCard'>
                <div className='card'>
                    <div>
                        {this.props.front}
                    </div>

                    <div>
                        {this.props.back}
                    </div>
                </div>
            </div>
        );
    };
};