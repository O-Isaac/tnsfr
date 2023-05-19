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
                <meta name="title" content="The New Flex Studio Record" />
                <meta name="description" content="The New Flex Studio nace de la iniciativa de ayudar a la gente a producir sus ideas audiovisuales y graficas." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="The New Flex Studio Record" />
                <meta property="og:description" content="The New Flex Studio nace de la iniciativa de ayudar a la gente a producir sus ideas audiovisuales y graficas." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="The New Flex Studio Record" />
                <meta property="twitter:description" content="The New Flex Studio nace de la iniciativa de ayudar a la gente a producir sus ideas audiovisuales y graficas." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
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