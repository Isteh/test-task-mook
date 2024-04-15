import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { routeConfig } from '../../../routes/routeConfig'

const RouterProvider: FC = () => {
    return <Suspense fallback={<>Loading...</>}>
        <Routes>
            {Object.values(routeConfig).map(item => <Route key={item.path} {...item} />)}
        </Routes>
    </Suspense>
}

export default RouterProvider