import { Footer, Header, Navbar } from "@/components"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <section className="flex-1"><Outlet/></section>
      <Footer/>
    </section>
  )
}
export default RootLayout