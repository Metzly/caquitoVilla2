export default function MenuList({ link, text }: { link: string; text: string }){
    return(
        <a
        href={link}
        className="relative text-black text-md p-2 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-myGreen after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
        >
        {text}
        </a>
    )
}