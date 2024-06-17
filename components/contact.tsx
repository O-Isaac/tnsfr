import { ContactModalContext } from "@/context/showContact"
import { Modal, TextInput, Label, Textarea, Button, Alert } from "flowbite-react"
import { FormEvent, useContext, useState } from "react"
import { HiMail, HiAnnotation, HiInformationCircle } from "react-icons/hi"

interface Prop {
    show: boolean
}

export default function ModalContact(props: Prop) {
    const { setShow } = useContext(ContactModalContext)
    const [ success, setSuccess ] = useState<boolean>(false)
    const [ error, setError] = useState<boolean>(false)

    const onCloseModal = () => {
        if (setShow) setShow(false)
        setSuccess(false)
        setError(false)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const formData = new FormData(event.target as HTMLFormElement)
        const email = formData.get("email")
        const subject = formData.get("subject")
        const message = formData.get("message")

        const options = { method: "POST", body: JSON.stringify({ email, subject, message }) }
        const request = await fetch("/api/contact", options)
        const response = await request.json()

        if (response.status !== 200) {
            setError(true)
            if (success) setSuccess(false)
        } else {
            setSuccess(true)
            if (error) setError(true)
        }
    }

    return (
        <Modal show={props.show} onClose={onCloseModal} size="xl" popup={true}>
            <Modal.Header></Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit} className="space-y-6 px-6 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Contact us
                </h3>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        name="email"
                        icon={HiMail}
                        placeholder="name@company.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="subject"
                            value="Subject"
                        />
                    </div>
                    <TextInput
                        id="subject"
                        name="subject"
                        icon={HiAnnotation}
                        placeholder="Service Inquiry"
                        required={true}
                        type="text"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="message"
                            value="Message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        required={true}
                        name="message"
                        placeholder="Leave your message..."
                        rows={4}
                    />
                </div>
                <div>
                    {success && (
                        <Alert color="success">
                            <span>
                                <span className="font-medium">Success!</span> Your email has been sent successfully.
                            </span>
                        </Alert>
                    )}

                    {error && (
                        <Alert color="failure" icon={HiInformationCircle}>
                            <span>
                                <span className="font-medium">Error!</span> It seems your email couldn&apos;t be sent, please try again.
                            </span>
                        </Alert>
                    )}
                </div>
                <div>
                    <Button type="submit">Send message</Button>
                </div>
            </form>
        </Modal.Body>

        </Modal>
    )
}