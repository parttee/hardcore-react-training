import React from 'react';
import cx from 'classnames';
import styles from './Button.pcss';

const Button = props => {

  const { role, block, children, ...rest } = props;

  const classes = cx(
    styles.button,
    {
      [styles.block]: block === true,
      [styles.primary]: role === 'primary',
      [styles.secondary]: role === 'secondary',
    }
  );

  return (
    <button {...rest} className={classes}>{children}</button>
  );
};

Button.propTypes = {
  role: React.PropTypes.string.isRequired,
  block: React.PropTypes.bool.isRequired,
};

Button.defaultProps = {
  role: 'primary',
  block: false,
};

export default Button;