interface TeamWrapperProps {
    children: React.ReactNode
}

export const TeamWrapper: React.FC<TeamWrapperProps> = ({ children }) => {
    return (
        <div className="max-w-6xl h-[600px] mx-auto p-4 overflow-hidden">
            <div className="flex h-full rounded-lg overflow-hidden">
                {children}
            </div>
        </div>
    )
}

interface MemberProps {
    image: string,
    name: string,
    job: string
}

export const Member: React.FC<MemberProps> = ({ image, job, name }) => {
    return (
        <div className="w-0 flex-grow transition-all hover:w-[300px] relative group">
            <img className="absolute w-full h-full object-cover object-center" src={image} alt={name} />
            <div className="absolute w-full bg-gradient-to-b from-black to-transparent top-0 z-10 h-40 opacity-0 group-hover:opacity-100 transition-opacity grid place-content-center text-center">
                <h1 className="text-white text-2xl font-bold mt-20 opacity-0 group-hover:mt-0 group-hover:opacity-100 duration-1000 delay-200 transition-all">{name}</h1>
                <p className="text-white  mt-20 opacity-0 group-hover:mt-0 group-hover:opacity-100 delay-500 duration-1000 transition-all">{job}</p>
            </div>
        </div>
    )
}