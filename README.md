![](http://i1.piimg.com/567571/ed9de13efe043b12.gif)

# react-expressions-baidu
A React Component about Baidu Expressions.

# Install
```
npm install --save react-expressions-baidu
```

# Usage

```
import { 
    Picker, 
    isSymbol, 
    convertSymbolToReactDOMNode 
} from 'react-expressions-baidu';

...


handleAddSymbol(symbol){

    // check input valid
    if(isSymbol(symbol))
        this.setState({
            symbols: [...symbols, symbol]
        });

}

render(){

    ...

    <Picker 
        col={10}
        padding={4}
        onItemClick={this.handleAddSymbol} />

    <ul>

        {
            this.state.symbols.map( symbol => {

                return (
                    <li key={Math.random()}>
                        // create a ReactDom Node
                        { convertSymbolToReactDOMNode(symbol) }

                    </li>
                )

            })
        }

    </ul>

}


```

# API

## Picker [ react component ]

props:

* col [ number ]
* padding [ number ]
* onItemClick [ func ]

## isSymbol [ func | string -> bool ]

check if `str` is a valid symbol.

## convertSymbolToReactDOMNode [ func | string -> ReactDOM Node ]

