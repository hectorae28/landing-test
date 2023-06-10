import Link from "next/link"
import { SubTitle } from "../components"

const Service = () => {
    const data = [
        {
            title: "Comida Diaria",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            href: "/"
        },
        {
            title: "Catering",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            href: "/"
        },
        {
            title: "Tequeños",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            href: "/"
        }
    ]
    return (
        <div className="flex flex-col lg:justify-evenly " >
            <SubTitle
                text="Nuestros Servicios"
            />
            <div className="flex flex-col lg:flex-row justify-center">
                {data.map((item, index) => (
                <div key={index} className="bg-gray-200 mx-10 my-5 lg:my-10 p-10 flex flex-col lg:w-[30%]" >
                    <div className="bg-black w-full h-[200px] mb-5 self-center rounded-xl"></div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button className="border-2 border-black border-solid p-2 mt-5 rounded-full lg:w-[50%] lg:self-end">
                        <Link href={item.href}>
                            <a>Learn More</a>
                        </Link>
                    </button>
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default Service