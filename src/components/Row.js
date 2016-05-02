import React from 'react';
import classNames from 'classnames';
import style from 'flexboxgrid';

const ModificatorType = React.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

export default class Row extends React.Component {
  render() {
    const modificators = ['row'];
    for (let i = 0; i < modificatorKeys.length; ++i) {
      const key = modificatorKeys[i];
      const value = this.props[key];
      if (value) {
        modificators.push(`${key}-${value}`);
      }
    }

    if (this.props.reverse) {
      modificators.push('reverse');
    }

    const className = classNames(this.props.className, modificators);

    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className,
    }), this.props.children);
  }
}

Row.propTypes = {
  reverse: React.PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: React.PropTypes.string,
  tagName: React.PropTypes.string,
  children: React.PropTypes.node,
};
