import { useLocation } from "react-router"
import RouterProvider from "./components/providers/RouterProvider/RouterProvider"
import { useEffect } from "react"


function App() {
  const path = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [path])
  return (
    <div className="app">
      <div className="content">
        <RouterProvider />
      </div>
    </div>
  )
}

export default App
