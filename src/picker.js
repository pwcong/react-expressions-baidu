import React, { Component, PropTypes } from 'react';

import DATA, { URL } from './data';

class Picker extends Component {

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(symbol) {
        this.props.onItemClick(symbol);
    }

    render() {
        return (
            <div style={{
                width: this.props.col * (30 + this.props.padding * 2),
                display: 'flex',
                flexFlow: 'row wrap'
            }}>
                {
                    Object.keys(DATA).map( symbol => {

                        return (
                            <div 
                                style={{
                                    cursor: 'pointer',
                                    padding: this.props.padding,
                                }}
                                key={symbol} 
                                onClick={ () => {
                                    this.handleItemClick(symbol);
                                }}>
                                <div 
                                    style={{
                                        width: 30,
                                        height: 30,
                                        background: 'url(' + URL + ')',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: DATA[symbol].x + 'px ' + DATA[symbol].y + 'px' 
                                    }}>
                                </div>
                            </div>
                        )

                    })
                }
                
            </div>
        );
    }
}

Picker.propTypes = {
    padding: PropTypes.number,
    col: PropTypes.number,
    onItemClick: PropTypes.func
};

Picker.defaultProps = {
    padding: 4,
    col: 10,
    onItemClick(symbol){
        console.log(symbol);
    }
}

export default Picker;