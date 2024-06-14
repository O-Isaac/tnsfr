import Head from "next/head";
import FooterLayout from "@/components/footer";
import Navigation from "@/components/navigation";
import { ContactModalContext } from "@/context/showContact";
import { useState } from "react";
import ModalContact from "@/components/contact";

interface RootLayoutProps {
    children: React.ReactNode | React.ReactElement;
}

export default function RootLayout(props: RootLayoutProps) {
    const [showContact, setShowContact] = useState<boolean>(false);

    return (
        <ContactModalContext.Provider value={{ setShow: setShowContact, show: showContact }}>
            <Head>
                <title>The New Flex Studio Record</title>
                <meta name="title" content="The New Flex Studio Record" />
                <meta name="description" content="The New Flex Studio was born from the initiative to help people produce their audiovisual and graphic ideas." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tnfsr.com" />
                <meta property="og:title" content="The New Flex Studio Record" />
                <meta property="og:description" content="The New Flex Studio was born from the initiative to help people produce their audiovisual and graphic ideas." />
                <meta property="og:image" content="https://i.imgur.com/zVIhXfS.jpeg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://tnfsr.com" />
                <meta property="twitter:title" content="The New Flex Studio Record" />
                <meta property="twitter:description" content="The New Flex Studio was born from the initiative to help people produce their audiovisual and graphic ideas." />
                <meta property="twitter:image" content="https://i.imgur.com/zVIhXfS.jpeg" />
            </Head>
            <Navigation />
            <main>
                {props.children}
                <ModalContact show={showContact} />
            </main>
            <FooterLayout />
        </ContactModalContext.Provider>
    );
}