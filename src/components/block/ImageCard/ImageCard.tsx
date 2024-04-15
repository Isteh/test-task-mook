import { FC } from 'react'
import styles from './ImageCard.module.scss'
import { IImageCardProps } from './ImageCard.interface'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const ImageCard: FC<IImageCardProps> = ({ img, title, className, ...props }) => {
    return <Link {...props}
        className={classNames(styles.card, { [`${className}`]: className })}>
        <div className={styles.imgContainer}>
            <img src={img} alt={`Image of ${title}`} className={styles.img} />
        </div>
        <h2 className={styles.title}>{title}</h2>
    </Link>
}

export default ImageCard