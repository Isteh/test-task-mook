import { FC } from 'react'
import styles from './Header.module.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { APP_ROUTES, ROUTE_PATH } from '../../../routes/routes'
import Button from '../../ui/Button/Button'
import { BUTTON_THEMES } from '../../ui/Button/Button.interface'
import { useAuth } from '../../providers/AuthProvider/useAuth'
import Login from '../../block/Login/Login'

const Header: FC = () => {
    const { isAuth } = useAuth()
    const navigate = useNavigate()
    const { state } = useLocation()
    // const [loginOpen, setLoginOpen] = useState(false)
    return <header className={styles.header}>
        <Link to={ROUTE_PATH[APP_ROUTES.MAIN]} className={styles.logo}>
            OneAI
        </Link>
        {!isAuth &&
            <Button theme={BUTTON_THEMES.BORDERED}
                className={styles.signIn}
                onClick={() => navigate(ROUTE_PATH[APP_ROUTES.MAIN], { state: { isLoginOpen: true } })}>Sign In</Button>
        }
        {state?.isLoginOpen && <Login></Login>}


    </header>
}

export default Header