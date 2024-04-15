import { FC } from 'react'
import styles from './Result.module.scss'
import Button from '../../components/ui/Button/Button'
import { BUTTON_THEMES } from '../../components/ui/Button/Button.interface'
import { Link } from 'react-router-dom'
import { APP_ROUTES, ROUTE_PATH } from '../../routes/routes'

const Result: FC = () => {
    return <div className={styles.page}>
        <div className={styles.imgContainer}>
            <img src='mock1.jpg' alt='Result image' className={styles.img} />
        </div>
        <Button className={styles.save} theme={BUTTON_THEMES.ACCENT}>Save</Button>
        <Link to={ROUTE_PATH[APP_ROUTES.MAIN]} className={styles.link}><Button className={styles.more}>More pics</Button></Link>
    </div>
}

export default Result