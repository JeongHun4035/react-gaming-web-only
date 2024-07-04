import "react-router-dom"
import { ReactNode } from "react"

declare module "react-router-dom" {
  export interface CustomRouteObject extends RouteObject {
    // 필요에 따라 추가적인 속성을 정의
    path: string
    element: ReactNode
    children?: CustomRouteObject[]
  }
}
