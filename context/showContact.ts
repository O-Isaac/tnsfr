import { Dispatch, SetStateAction, createContext } from "react"

interface ContactModalContextProps {
    show?: boolean,
    setShow?: Dispatch<SetStateAction<boolean>>
}

export const ContactModalContext = createContext<ContactModalContextProps>({})
