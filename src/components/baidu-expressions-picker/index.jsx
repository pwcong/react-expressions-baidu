import React from 'react';
import PropTypes from 'prop-types';

import style from './scss/index.scss';

import SYMBOLS from './symbols';

export default class BaiduExpressionsPicker extends React.Component {

    constructor(props) {
        super(props);

        this.handlePickerClick = this.handlePickerClick.bind(this);

    }

    render() {

        return (

            <div
                className={`${style['baidu-expressions-picker']} ${this.props.pickerClass}`}
                onClick={this.handlePickerClick}>
                {
                    Object.keys(SYMBOLS).map((symbol, idx) => {

                        return (
                            <span
                                className={`${style['baidu-expressions-symbol']} ${this.props.symbolClass}`}
                                data-symbol={symbol}
                                key={symbol}
                                style={{
                                    backgroundImage: 'url(' + SYMBOLS[symbol] + ')'
                                }}>

                            </span>

                        );


                    })
                }
            </div>
        );

    }

    handlePickerClick(e) {

        const symbol = e.target.getAttribute('data-symbol');

        if (!symbol) {
            return;
        }

        this.props.onSymbolClick(symbol);
    }

    componentDidMount() {
    }
}

BaiduExpressionsPicker.propTypes = {

    onSymbolClick: PropTypes.func,
    pickerClass: PropTypes.string,
    symbolClass: PropTypes.string,
}

BaiduExpressionsPicker.defaultProps = {
    onSymbolClick: symbol => { console.log(symbol); },
    pickerClass: '',
    symbolClass: ''
}
