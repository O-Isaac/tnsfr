import { useEffect, useRef } from "react"

interface VideoProps {
    src: string,
    className?: string
}

const Video: React.FC<VideoProps> = ({ src, className }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <video loop autoPlay muted ref={videoRef} src={src} className={className}></video>
    )
}

export default Video