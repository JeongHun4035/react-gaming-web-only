import { createBrowserRouter, CustomRouteObject } from "react-router-dom"

import Layout from "@/components/Layouts"
import NotFound from "@/components/NotFound"
import About from "@/pages/About"
import DashBoard from "@/pages/DashBoard"
// Lazy Loading으로 초기 로딩 성능을 향상 가능
// const About = lazy(() => import("@/pages/About"))

const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]

export const router = createBrowserRouter(routes)
