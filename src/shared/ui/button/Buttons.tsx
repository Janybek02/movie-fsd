import classNames from 'classnames';
import type {FC } from 'react'
import type { ButttontProps } from './types';
import styles from './Button.module.scss'
// import styles from './Button.model.scss';
export const Buttons: FC<ButttontProps> = ({
    variant = 'primary',
    size = 'medium',
    color = 'default',
    disabled = false,
    onClick = () => {},
    children
}) => {

    const buttonClasses = classNames(
      styles.button,
      styles[variant],
      styles[size],
      styles[color],
      {
        [styles.disabled]:disabled
      }
      )
  return (
      <button className={buttonClasses} disabled={disabled} onClick={onClick}   >
        {children} 
      </button>
    )
}
