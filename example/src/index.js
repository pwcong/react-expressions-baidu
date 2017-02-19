import React, { Component } from 'react';

import Picker from '../../src/picker';
import { convertSymbolToReactDOMNode, isSymbol } from '../../src/converter';

export default class Index extends Component {

    constructor(props){
        super(props);

        this.state = {
            symbols: []
        }

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(symbol){

        if(isSymbol(symbol))
            this.setState({
                symbols: [...this.state.symbols, symbol]
            });

    }


    render() {

        return (
            <div style={{
                width: '100%',
                padding: 24,
                display: 'flex',
                justifyContent: 'center',
                flexFlow: 'row wrap'
            }}>
                <div 
                    style={{
                        borderRadius: 4,
                        boxShadow: '0px 0px 10px 0px'
                    }}>
                    <Picker 
                        padding={4}
                        col={10}
                        onItemClick={this.handleItemClick}/>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        width: '100%',
                        padding: 24,
                    }}>
                    {
                        this.state.symbols.map( symbol => {
                            return  <div key={Math.random()}>
                                        {convertSymbolToReactDOMNode(symbol)}
                                    </div>
                        })
                    }
                    
                </div>

            </div>
        );
    }
}