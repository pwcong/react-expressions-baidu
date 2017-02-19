'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertSymbolToReactDOMNode = convertSymbolToReactDOMNode;
exports.isSymbol = isSymbol;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 转换含表情字符的字符串
 */
exports.default = function (stringWithSymbols) {};

/*
 * 转换单个表情字符
 */


function convertSymbolToReactDOMNode(symbol) {

    return _react2.default.createElement('div', {
        style: {
            width: 30,
            height: 30,
            background: 'url(' + _data.URL + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: _data2.default[symbol].x + 'px ' + _data2.default[symbol].y + 'px'
        } });
}

/*
 * 判断是否为表情字符
 */
function isSymbol(symbol) {
    return (/\/:.*#$/.test(symbol)
    );
}
//# sourceMappingURL=converter.js.map