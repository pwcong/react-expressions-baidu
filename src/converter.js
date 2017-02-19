import React from 'react';
import DATA, { URL } from './data';

/*
 * 转换含表情字符的字符串
 */
export default stringWithSymbols => {


}

/*
 * 转换单个表情字符
 */
export function convertSymbolToReactDOMNode(symbol){

    return (
        <div 
            style={{
                width: 30,
                height: 30,
                background: 'url(' + URL + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: DATA[symbol].x + 'px ' + DATA[symbol].y + 'px' 
            }}>
        </div>
    );

}

/*
 * 判断是否为表情字符
 */
export function isSymbol(symbol){
    return /\/:.*#$/.test(symbol);
}