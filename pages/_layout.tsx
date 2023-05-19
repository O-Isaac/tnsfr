import Head from "next/head"
import FooterLayout from "@/components/footer"
import Navigation from "@/components/navigation"
import { ContactModalContext } from "@/context/showContact"
import { useState } from "react"
import ModalContact from "@/components/contact"

interface RootLayourProps {
    children: React.ReactNode | React.ReactElement
}

export default function RootLayour(props: RootLayourProps) {
    const [showContact, setShowContact] = useState<boolean>(false)

    return (
        <ContactModalContext.Provider value={{ setShow: setShowContact, show: showContact }}>
            <Head>
                <title>The New Flex Studio Record</title>
            </Head>
            <Navigation />
            <main>
                {props.children}
                <ModalContact show={showContact} />
            </main>
            <FooterLayout/>
        </ContactModalContext.Provider>
    )
}