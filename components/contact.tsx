import { ContactModalContext } from "@/context/showContact"
import { Modal, TextInput, Label, Textarea, Button } from "flowbite-react"
import { FormEvent, useContext } from "react"
import { HiMail, HiAnnotation } from "react-icons/hi"

interface Prop {
    show: boolean
}

export default function ModalContact(props: Prop) {
    const { setShow } = useContext(ContactModalContext)

    const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const formData = new FormData(event.target as HTMLFormElement)
        const email = formData.get("email")
        const subject = formData.get("subject")
        const message = formData.get("message")

        const options = { method: "POST", body: JSON.stringify({ email, subject, message }) }
        const request = await fetch("/api/contact", options)
        const response = await request.json()

        console.log(response)
    }

    return (
        <Modal show={props.show} onClose={() => setShow && setShow(false)} size="lg" popup={true}>
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleSumbit} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Contacta con nosotros
                    </h3>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Tu email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            name="email"
                            icon={HiMail}
                            placeholder="nombre@compania.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="subject"
                                value="Sujeto"
                            />
                        </div>
                        <TextInput 
                            id="subject"
                            name="subject"
                            icon={HiAnnotation}
                            placeholder="Propuesta de negocio"
                            type="text" 
                        />                    
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="message"
                                value="Mensaje"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            name="message"
                            placeholder="Deja tu mensaje..."
                            rows={4}
                        />
                    </div>
                    <div>
                        <Button type="submit">Enviar mensaje</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}