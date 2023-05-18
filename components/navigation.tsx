import { Logo } from "./brand"
import { Dropdown } from "flowbite-react"
import { HiBars3BottomRight } from "react-icons/hi2"
import Link from "next/link"

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-around p-4 bg-white">
            <div className="flex items-center justify-around w-full">
                <div className="flex items-center flex-col sm:flex-row">
                    <Logo height="70px" />
                    <p className="text-sm text-center my-2 ml-4 text-gray-500 hidden sm:block">Producción audiovisual de calidad</p>
                </div>
                

                <ul className="flex gap-4 items-center">
                    <li className="hidden sm:block">
                        <Link href="/">Inicio</Link>
                    </li>
                    <li className="border-r pr-4 hidden sm:block">
                        <Link href="/">Contacto</Link>
                    </li>
                    <li>
                        <Dropdown label={<HiBars3BottomRight className="text-3xl" />} arrowIcon={false} inline>
                            <Dropdown.Item>
                                <Link href="/">Inicio</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href="/">Contacto</Link>
                            </Dropdown.Item>
                        </Dropdown>
                        <p className="text-[10px] text-center">Menu</p>
                    </li>
                </ul>
                
            </div>
        </nav> 
    )
}

export default Navigation


