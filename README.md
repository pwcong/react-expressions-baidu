![](http://i1.piimg.com/567571/ed9de13efe043b12.gif)

# react-expressions-baidu
A React Component about Baidu Expressions.

## Install
```
npm install --save react-expressions-baidu
```

## Usage

```
import { 
    BaiduExpressionsPicker, 
    isSymbol, 
    convertSymbol 
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

    <BaiduExpressionsPicker
        onSymbolClick={this.handleAddSymbol} />

    <div>

        {
            this.state.symbols.map(symbol => convertSymbol(symbol))
        }

    </div>

}


```

## API

* BaiduExpressionsPicker [ react component ]

    props:

    * pickerClass [ string ]
    * symbolClass [ string ]
    * onItemClick [ func ]

* isSymbol [ func | str[string] -> bool ]

    check if `str` is a valid symbol.

* convertSymbol [ func | symbol[string], key[string(option)] -> ReactDOM Node ]
