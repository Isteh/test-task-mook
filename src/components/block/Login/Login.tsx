import { FC } from 'react'
import styles from './Login.module.scss'
import Input from '../../ui/Input/Input'
import Button from '../../ui/Button/Button'
import { BUTTON_THEMES } from '../../ui/Button/Button.interface'
import { GLOBAL_CSS_CLASSES } from '../../../styles/globalClasses'
import { useAuth } from '../../providers/AuthProvider/useAuth'
import { Navigate, useNavigate } from 'react-router'
import { APP_ROUTES, ROUTE_PATH } from '../../../routes/routes'

const Login: FC = () => {
    const { isAuth, toggleAuth } = useAuth()
    const navigate = useNavigate()
    return !isAuth ? <div className={styles.wrapper}>
        <div className={styles.content}>
            <button type='button' className={styles.back} onClick={() => navigate(-1)}>
                <span className={GLOBAL_CSS_CLASSES.HIDDEN}>Go back</span>
            </button>

            <form onSubmit={e => { e.preventDefault; toggleAuth() }}
                className={styles.form}>

                <Input className={styles.email} name='email' placeholder='Email' />
                <Input className={styles.password} name='password' placeholder='Password' />

                <Button theme={BUTTON_THEMES.ACCENT}
                    className={styles.signIn}
                    type='submit'>
                    Sign in
                </Button>

            </form>
        </div>
    </div>
        :
        <Navigate to={ROUTE_PATH[APP_ROUTES.MAIN]} />
}

export default Login