import React from 'react';
import style from 'flexboxgrid';

export default class Col extends React.Component {
  constructor(props) {
    super(props);
    this.classMap = {
      xsmall: 'col-xs',
      small: 'col-sm',
      medium: 'col-md',
      large: 'col-lg',
      xsmallOffset: 'col-xs-offset',
      smallOffset: 'col-sm-offset',
      mediumOffset: 'col-md-offset',
      largeOffset: 'col-lg-offset',
    };
  }
  render() {
    const classes = [];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    if (this.props.reverse) {
      classes.push('reverse');
    }
    for (const key in this.props) {
      if (this.props.hasOwnProperty(key) && this.classMap[key]) {
        let colBaseClass = this.classMap[key];
        colBaseClass = Number.isInteger(this.props[key]) ? `${colBaseClass}-${this.props[key]}` : colBaseClass;
        classes.push(colBaseClass);
      }
    }
    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: classes.join(' '),
    }), this.props.children);
  }
}

const ModificatorType = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]);

Col.propTypes = {
  xsmall: ModificatorType,
  small: ModificatorType,
  medium: ModificatorType,
  large: ModificatorType,
  xsmallOffset: React.PropTypes.number,
  smallOffset: React.PropTypes.number,
  mediumOffset: React.PropTypes.number,
  largeOffset: React.PropTypes.number,
  reverse: React.PropTypes.bool,
  className: React.PropTypes.string,
  tagName: React.PropTypes.string,
  children: React.PropTypes.node,
};
