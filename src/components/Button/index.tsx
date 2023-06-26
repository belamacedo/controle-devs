import React from 'react';
import { ButtonProps } from './styles';
import * as Styles from './styles';

export const Button = ({
  text,
  intent,
  size,
  imageSrc,
  alt,
  icon,
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = Styles.button({ intent, size });
  return (
    <button {...props} className={className || buttonClasses}>
      {icon && <div className={Styles.buttonIcon() || className}>{icon}</div>}
      {imageSrc && (
        <img src={imageSrc} alt={alt} className={Styles.buttonImage()} />
      )}
      {text}
    </button>
  );
};
