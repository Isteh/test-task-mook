import { FC } from 'react'
import styles from './Input.module.scss'
import { IInputProps } from './Input.interface'
import classNames from 'classnames'

const Input: FC<IInputProps> = ({ className, ...props }) => {
    return <input
        {...props}
        className={classNames(styles.input, { [className]: className })}>
    </input>
}

export default Input