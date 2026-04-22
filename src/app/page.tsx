import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center z-10 w-screen h-screen'>
            <div className='relative w-[800px] aspect-680/300'>
                <Image src='/images/title.webp' alt='title minecraft' fill className='object-cover' />
            </div>
            <div className='flex flex-col text-xl gap-3'>
                {[
                    { text: 'ENTER OUR WORLD', link: 'our-world' },
                    { text: 'MEMBERS', link: '/members' },
                    { text: 'MINECRAFT HISTORY', link: '/history' },
                ].map((item) => (
                    <Link
                        key={item.text}
                        href={item.link ?? ''}
                        className='p-3 text-center w-[300px] cursor-pointer rounded-[1px] border-[#807c7b] bg-[#cac0ba] border-[1.5px] hover:bg-[#faf5f2] transition-all hover:scale-105'
                    >
                        <span>{item.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
