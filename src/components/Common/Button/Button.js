import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    value: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    textAlign: PropTypes.oneOf(['left', 'right', 'center']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'header', 'square']),
    color: PropTypes.oneOf(['primary', 'danger', 'transparent', 'default']),
    textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
    display: PropTypes.oneOf(['block', 'inline-block']),
    data: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    children: null,
    value: null,
    onClick: null,
    href: null,
    disabled: false,
    size: 'medium',
    color: 'primary',
    data: {},
    textAlign: 'center',
    textTransform: null,
    display: 'block',
  }

  render() {
    const { size, color, disabled, href, textTransform, className } = this.props;
    let Component = 'div';
    const props = {
      ...this.props.data,
      className: `ui-button ui-button--size-${size} ui-button--color-${color} ${className}`,
      onClick: this.props.onClick,
      style: {
        textAlign: this.props.textAlign,
        display: this.props.display,
      },
    };

    if (disabled) {
      props.className += ' ui-button--disabled';
    }

    if (href) {
      Component = 'a';
      props.rel = 'noopener noreferrer';
      props.href = href;
    }

    if (textTransform) {
      props.style.textTransform = textTransform;
    }

    if (textTransform && textTransform === 'uppercase') {
      props.className += ' ui-button--transform-uppercase';
    }

    return (
      <Component {...props}>
        <div className="ui-button__content">
          {this.props.value || this.props.children}
        </div>
      </Component>
    );
  }
}

export default Button;
