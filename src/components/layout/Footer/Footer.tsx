import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {

    const date = new Date();

    return <footer className={styles.footer}>
        <a href='mailto:support@avgen.me' className={styles.mail}>Get help at support@avgen.me</a>
        <span className={styles.copyright}>
            Copyright © {date.getFullYear()} Mook Ltd.
            <br /> All rights reserved.
        </span>
    </footer>
}

export default Footer