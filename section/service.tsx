import { SubTitle,ServiceCard } from "../components"

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
                {data.map((item, index) => <ServiceCard item={item} key={index} index={0} />)}
            </div>
            
        </div>
    )
}

export default Service