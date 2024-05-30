import { navs } from "@/utils/navs"
import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-muted">
      <section className="py-4 flex justify-between center">
        <div className="flex gap-2 items-center">
          <ShoppingBag size={30} />
          <h1 className="text-2xl font-semibold">Ecommerce Project</h1>
        </div>
        <ul className="flex gap-8">
          {
            navs.map((nav,i) => (
              <li key={i}><Link to={nav.url}>{nav.label}</Link></li>
            ))
          }
        </ul>
      </section>
    </nav>
  )
}
export default Navbar