import { createBrowserRouter, CustomRouteObject } from "react-router-dom"

import About from "@/pages/About"
import DashBoard from "@/pages/DashBoard"

// Lazy Loading으로 초기 로딩 성능을 향상 가능
// const About = lazy(() => import("@/pages/About"))

const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/about",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <About />
  //     </Suspense>
  //   ),
  // },
]

export const router = createBrowserRouter(routes)
