import { RouterProvider } from "react-router-dom"

import { router } from "@/routes"

const Router: React.FC = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  )
}

export default Router
