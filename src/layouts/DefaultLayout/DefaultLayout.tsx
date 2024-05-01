import Nav from "@/components/organisms/Nav/Nav"
import { Outlet } from "react-router-dom"

export default function DefaultLayout() {

  return (

    <>
      <Nav />
      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  )
}