import { Outlet } from "react-router-dom"
import Navigation from "../modules/Navigation"

export default function Layout(){
  return(
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
