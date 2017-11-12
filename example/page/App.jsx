import React, { Component } from 'react';

import { BaiduExpressionsPicker, isSymbol, convertSymbol } from '../../src/index';

import style from './style/app.scss';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            symbols: []

        }

        this.handleSymbolClick = this.handleSymbolClick.bind(this);

    }

    render() {

        return (
            <div className={style.app}>
                <BaiduExpressionsPicker
                    onSymbolClick={this.handleSymbolClick}
                    pickerClass="picker"
                    symbolClass="picker-symbol"
                />

                <div className="symbols">

                    {
                        this.state.symbols.map(symbol => {

                            if (isSymbol(symbol)) {
                                return convertSymbol(symbol);
                            }
                        })
                    }

                </div>
            </div>
        );
    }

    handleSymbolClick(symbol) {
        this.state.symbols.push(symbol);
        this.forceUpdate();
    }
}