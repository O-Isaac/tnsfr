import Head from "next/head"
import FooterLayout from "@/components/footer"
import Navigation from "@/components/navigation"

interface RootLayourProps {
    children: React.ReactNode | React.ReactElement
}

export default function RootLayour(props: RootLayourProps) {
    return (
        <>
            <Head>
                <title>The New Flex Studio Record</title>
            </Head>
            <Navigation />
            <main>{props.children}</main>
            <FooterLayout/>
        </>
    )
}