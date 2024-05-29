import { Footer } from "@/components/organisms"
import Nav from "@/components/organisms/Nav/Nav"
import { Outlet } from "react-router-dom"

export default function DefaultLayout() {

  return (

    <>
      <Nav />
      <main role="main">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}