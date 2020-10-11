import React from "react";
import PropTypes from 'prop-types'
import MaterialAvatar from '@material-ui/core/Avatar';

export default function Avatar({
  className = '',
  src = '',
  alt = '',
  variant = "circle",
  children,
}) {
  return (
    <MaterialAvatar
      className={className}
      src={src}
      alt={alt}
      variant={variant}>
        {children}
    </MaterialAvatar>
    )
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  variant: PropTypes.oneOf(['rounded', 'square', 'circle']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
}