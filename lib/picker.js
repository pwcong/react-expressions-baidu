'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = function (_Component) {
    _inherits(Picker, _Component);

    function Picker(props) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        _this.handleItemClick = _this.handleItemClick.bind(_this);
        return _this;
    }

    _createClass(Picker, [{
        key: 'handleItemClick',
        value: function handleItemClick(symbol) {
            this.props.onItemClick(symbol);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: {
                        width: this.props.col * (30 + this.props.padding * 2),
                        display: 'flex',
                        flexFlow: 'row wrap'
                    } },
                Object.keys(_data2.default).map(function (symbol) {

                    return _react2.default.createElement(
                        'div',
                        {
                            style: {
                                cursor: 'pointer',
                                padding: _this2.props.padding
                            },
                            key: symbol,
                            onClick: function onClick() {
                                _this2.handleItemClick(symbol);
                            } },
                        _react2.default.createElement('div', {
                            style: {
                                width: 30,
                                height: 30,
                                background: 'url(' + _data.URL + ')',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: _data2.default[symbol].x + 'px ' + _data2.default[symbol].y + 'px'
                            } })
                    );
                })
            );
        }
    }]);

    return Picker;
}(_react.Component);

Picker.propTypes = {
    padding: _react.PropTypes.number,
    col: _react.PropTypes.number,
    onItemClick: _react.PropTypes.func
};

Picker.defaultProps = {
    padding: 4,
    col: 10,
    onItemClick: function onItemClick(symbol) {
        console.log(symbol);
    }
};

exports.default = Picker;
//# sourceMappingURL=picker.js.map