import { Outlet, Link } from "react-router-dom"
import { TfiSettings, TfiPlus, TfiViewList } from "react-icons/tfi"

function MainLayout() {
  const links = [
    {
      href: "/transactions",
      icon: <TfiViewList />,
    },
    {
      href: "/transactions/create",
      icon: <TfiPlus />,
    },
    {
      href: "/settings",
      icon: <TfiSettings />,
    },
  ]

  return (
    <div className="h-screen w-full">
      <main className="overflow-scroll pb-12">
        <Outlet />
      </main>
      <nav className="bg-white shadow fixed bottom-0 w-full flex flex-row justify-around">
        {links.map((link) => (
          <Link to={link.href} key={link.href} className="p-4 text-black">
            {link.icon}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default MainLayout
