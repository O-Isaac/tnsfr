import FooterLayout from "@/components/footer"
import Navigation from "@/components/navigation"

interface RootLayourProps {
    children: React.ReactNode | React.ReactElement
}

export default function RootLayour(props: RootLayourProps) {
    return (
        <>
            <Navigation />
            <main>
                {props.children}
            </main>
            <FooterLayout/>
        </>
    )
}