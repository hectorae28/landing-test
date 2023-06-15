import Link from "next/link"
import Image from "next/image"
import {RxHamburgerMenu} from "react-icons/rx"
import Logo from "../public/acherLogo5.3.png"

const Header = () => {
  return (
    <header className="min-h-20 bg-[#001220] block  sm:flex justify-between items-center p-10" >
      <div className=" flex justify-between items-center  w-full " >
        <Image src={Logo} alt="Logo"  width={100} height={50}/>
        {/*<h1 className="text-white text-3xl ">Acher</h1>*/}
        <RxHamburgerMenu className="sm:hidden" size={50} color="white" onClick={()=>alert("hello")} />
      </div>
        <nav className="text-white h-full sm:flex md:flex lg:flex s">
          <ul className="flex flex-col  sm:flex-row sm:h-full">
            <li className=" flex w-full p-5 my-3 bg-[#3a4551] rounded-3xl sm:bg-transparent sm:h-auto sm:my-0 sm:p-0 sm:mx-5 sm:w-full sm:items-center ">
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