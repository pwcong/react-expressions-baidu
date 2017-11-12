import React from 'react';

import SYMBOLS from './symbols';

import style from './scss/index.scss';

/*
 * 转换单个表情字符
 */
export function convertSymbol(symbol, key) {

    return (
        <span
            key={key || `symbol-${Math.random()}`}
            className={style['baidu-expressions-symbol']}
            style={{
                backgroundImage: 'url(' + SYMBOLS[symbol] + ')'
            }}>
        </span>
    );

}

/*
 * 判断是否为表情字符
 */
export function isSymbol(symbol) {
    return /\/:.*#$/.test(symbol);
}