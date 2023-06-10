import { SubTitle } from '../components'
import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-[url('/layered2.svg')] bg-cover bg-center bg-no-repeat w-full aspect-[960/540] h-[600px] pt-40 lg:h-[657px]">
        <div className='h-auto flex flex-col bg-[#001220]' >
            <SubTitle color="white" text="Sobre Nosotros" />
            <div className='flex flex-col items-center justify-center h-auto w-full px-5 lg:flex-row'>
                <p className="text-white text-sm mt-5 lg:text-lg lg:px-5 lg:w-[60%]">Acher es una empresa especializada en la elaboración de deliciosos almuerzos y servicios de catering para todo tipo de eventos. Nuestro compromiso es ofrecer platillos exquisitos, frescos y saludables, elaborados con ingredientes de calidad. Con Acher, transformamos cada comida en una experiencia única e inolvidable.</p>
                <Image src="/Removal-logo4.png" width={960} height={540} className="hidden lg:block w-[960px] h-[540px] lg:w-auto lg:h-auto" alt="LOGO" />
            </div>
        </div>
    </section>
  )
}

export default About