import Image from "next/image";

interface PostsWrapperProps {
  children: React.ReactNode;
}

export const PostsWrapper: React.FC<PostsWrapperProps> = ({ children }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto my-5 px-3 justify-items-center">
      {children}
    </section>
  );
};

interface PostProps {
  title: string;
  description: string;
  href?: string;
  image: string;
}

export const Post: React.FC<PostProps> = (props) => {
  const imageUrl = new URL(props.image)
  const isVideo = imageUrl.pathname.endsWith(".mp4")

  return (
    <article className="bg-white max-w-md">
      {
        isVideo ?
        (
          <video className="rounded-2xl aspect-square object-cover" width={500} height={500} src={imageUrl.href} />
        )
        :
        (
          <Image
            className="rounded-2xl"
            alt="image"
            width={500}
            height={500}
            src={imageUrl.href}
          />
        )
      }

      <div className="py-4">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.href}>
          <button className="text-lg font-medium bg-black text-transparent my-1 group bg-gradient-to-r from-[#663177] to-[#C63F7B] bg-clip-text bg-size-200 hover:bg-pos-100">
            View post <span className="transition-all group-hover:pl-2">➜</span>
          </button>
        </a>
      </div>
    </article>
  );
};
