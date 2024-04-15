import { FC } from 'react'
import styles from './IconButton.module.scss'
import { IIconButtonProps } from './IconButton.interface'
import classNames from 'classnames'

const IconButton: FC<IIconButtonProps> = ({ icon, text, className, ...props }) => {
    return <button {...props}
        className={classNames(styles.button, { [`${className}`]: className })}>
        <img src={icon} alt='тут могла быть ваша иконка' className={styles.icon} />
        <span className={styles.text}>{text}</span>
    </button>
}

export default IconButton