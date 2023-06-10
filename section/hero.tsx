import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image'

const data = [
  {
    id: 1,
    path: "",
    icon: <FaFacebookF size={50} />,
    title: "Facebook",
  },
  {
    id: 2,
    path: "",
    icon: <FaInstagram size={50} />,
    title: "Instagram",
  },
  {
    id: 3,
    path: "",
    icon: <FaWhatsapp size={50} />,
    title: "Whatsapp",
  },
  {
    id: 4,
    path: "",
    icon: <FaRegEnvelope size={50} />,
    title: "mail",
  },
];

const Hero = () => {
  return (
    <section className="bg-[url('/layered.svg')] bg-cover bg-center bg-no-repeat w-full aspect-[960/540] h-[95vh]">
        <div className="flex items-center flex-col-reverse lg:flex-row justify-around h-96 pt-5">
          <img src="/Removal-logo4.png" width={960} height={540} className="hidden lg:block w-[960px] h-[540px] lg:w-auto lg:h-auto" alt="LOGO" />
          <div className="px-10" >
            <h1 className="text-white text-[38px] leanding-10">¡Sabores que unen momentos!</h1>
            <p className="text-white text-[28px]" >  Acher se dedica a la creación de almuerzos deliciosos y servicios de catering personalizados para cualquier ocasión.</p>
            <div className="flex mt-10">
              {data.map((item, index) => (
                  <span
                    className=" text-white mx-2 cursor-pointer"
                    key={`client-key${index}`}
                  >
                    <Link href={item.path} className="">
                      {item.icon}
                    </Link>
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero 