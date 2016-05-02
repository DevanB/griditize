import React from 'react';
import classNames from 'classnames';
import style from 'flexboxgrid';

export default class Grid extends React.Component {
  render() {
    const containerClass = this.props.fluid ? 'container-fluid' : 'container';
    const className = classNames(this.props.className, containerClass);

    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className,
    }), this.props.children);
  }
}

Grid.propTypes = {
  fluid: React.PropTypes.bool,
  className: React.PropTypes.string,
  tagName: React.PropTypes.string,
  children: React.PropTypes.node,
};
