import { FC } from 'react'
import styles from './Button.module.scss'
import { BUTTON_THEMES, IButtonProps } from './Button.interface'
import classNames from 'classnames'

const Button: FC<IButtonProps> = ({ className, theme, children, ...props }) => {
    return <button
        {...props}
        className={classNames(styles.button, {
            [`${className}`]: className,
            [styles[BUTTON_THEMES.ACCENT]]: theme === BUTTON_THEMES.ACCENT,
            [styles[BUTTON_THEMES.BORDERED]]: theme === BUTTON_THEMES.BORDERED
        })}>
        {children}</button>
}

export default Button