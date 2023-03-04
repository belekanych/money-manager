import PageLayout from "@/layouts/PageLayout"
import { Link } from "react-router-dom"
import { TfiCreditCard, TfiFolder } from "react-icons/tfi"

function Settings() {
  const links = [
    {
      title: "Categories",
      href: "/categories",
      icon: <TfiFolder className="text-3xl mb-2" />,
    },
    {
      title: "Wallets",
      href: "#", // @todo
      icon: <TfiCreditCard className="text-3xl mb-2" />,
    },
  ]

  return (
    <PageLayout title="Settings">
      <nav className="grid gap-4 grid-cols-2">
        {links.map((link) => (
          <Link
            to={link.href}
            key={link.title}
            className={`py-6 px-4 bg-white rounded shadow flex flex-col justify-center items-center ${
              link.href === "#" && "text-gray-400"
            }`}
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </nav>
    </PageLayout>
  )
}

export default Settings
