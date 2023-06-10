import Link from "next/link"

const Header = () => {
  return (
    <header className="h-20 bg-[#001220]  flex sm:justify-between justify-center items-center w-full px-10" >
        <h1 className="text-white text-3xl ">Acher</h1>
        <nav className="text-white h-full hidden sm:flex md:flex lg:flex s">
          <ul className="flex h-full">
            <li className="mx-5 h-full flex items-center">
              <Link href="/">
                <a>
                  About us
                </a>
              </Link>
            </li>
            <li className="mx-5 h-full flex items-center" >
              <Link href="/">
                <a>
                  Contactos
                </a>
              </Link>

            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header