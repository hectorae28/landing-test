import Link from "next/link";

type ServiceCardProps = {
    item: {
        title: string,
        description:string,
        href: string
    }
    index: number
}


const ServiceCard = ({item}:ServiceCardProps) => {
    return (
        <div className="bg-gray-200 mx-10 my-5 lg:my-10 p-10 flex flex-col lg:w-[30%]" >
            <div className="bg-black w-full h-[200px] mb-5 self-center rounded-xl"></div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button className="border-2 border-black border-solid p-2 mt-5 rounded-full lg:w-[50%] lg:self-end">
                <Link href={item.href}>
                    <a>Learn More</a>
                </Link>
            </button>
        </div>
    )
}

export default ServiceCard