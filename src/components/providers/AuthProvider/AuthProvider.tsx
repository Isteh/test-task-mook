import { FC, ReactNode, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext'


const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const defaultProps = useMemo(() => ({
        isAuth, setIsAuth
    }), [isAuth])

    return <AuthContext.Provider value={defaultProps}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider