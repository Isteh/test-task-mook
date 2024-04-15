import { FC } from 'react'
import styles from './Upload.module.scss'
import Button from '../../components/ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import IconButton from '../../components/ui/IconButton/IconButton'
import { APP_ROUTES, ROUTE_PATH } from '../../routes/routes'

const Upload: FC = () => {
    const navigate = useNavigate()
    return <div className={styles.page}>
        <Button className={styles.back} onClick={() => navigate(-1)}>
            <span className={styles.backText}> Go back</span>
        </Button>
        <div className={styles.videoContainer}>
            <video className={styles.video} src="input_2.mp4" poster="/mock1.jpg" width="315" height="315" loop autoPlay>
                Sorry, your browser doesn't support HTML5 video tag.
            </video>
        </div>
        <div className={styles.buttons}>
            <Link to={ROUTE_PATH[APP_ROUTES.RESULT]} className={styles.iconButton}>
                <IconButton icon='' text='Choose photo from gallery' />
            </Link>
            <Link to={ROUTE_PATH[APP_ROUTES.RESULT]} className={styles.iconButton}>
                <IconButton icon='' text='Take photo with camera' />
            </Link>
        </div>
    </div>
}

export default Upload