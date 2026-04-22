import Image from 'next/image'
import Link from 'next/link'

interface HistoryEvent {
    year: string
    title: string
    description: string
}

const timeline: HistoryEvent[] = [
    {
        year: '2009',
        title: 'THE BEGiNNiNG',
        description:
            'Markus "Notch" Persson began developing Minecraft as a side project inspired by games like Infiniminer and Dwarf Fortress. The first public version, then called "Cave Game," was shared on the TIGSource forums in May 2009.',
    },
    {
        year: '2009',
        title: 'MiNECRAFT CLASSiC',
        description:
            'The Classic version was released, allowing players to build freely with a limited set of blocks. It was the first time the public could experience the sandbox gameplay that would define Minecraft.',
    },
    {
        year: '2010',
        title: 'ALPHA & SURViVAL',
        description:
            'Minecraft Alpha launched in June 2010, introducing Survival mode with health, mob spawns, and crafting. The game gained a massive following through YouTube Let\'s Play videos and word of mouth.',
    },
    {
        year: '2010',
        title: 'BETA RELEASE',
        description:
            'The Beta phase began in December 2010, adding features like weather, achievements, and improved multiplayer. Minecraft had already sold over 1 million copies before reaching Beta.',
    },
    {
        year: '2011',
        title: 'FULL RELEASE (v1.0)',
        description:
            'Minecraft 1.0 officially launched on November 18, 2011 at MineCon in Las Vegas. The full release included The End dimension, the Ender Dragon boss fight, enchanting, brewing, and NPC villagers.',
    },
    {
        year: '2012',
        title: 'EXPANSiON & MOBiLE',
        description:
            'Minecraft: Pocket Edition launched for Android and iOS, bringing the game to mobile devices. The Xbox 360 edition was also released, marking Minecraft\'s debut on consoles.',
    },
    {
        year: '2014',
        title: 'MiCROSOFT ACQUiSiTiON',
        description:
            'Microsoft acquired Mojang and the Minecraft IP for $2.5 billion. Notch left the company, and the game continued to grow under new leadership with Jens "Jeb" Bergensten as lead developer.',
    },
    {
        year: '2016',
        title: 'MiCROSOFT & EDUCATiON',
        description:
            'Minecraft: Education Edition was released, designed for classroom use. The game became a tool for teaching subjects like math, history, and computer science in schools worldwide.',
    },
    {
        year: '2019',
        title: 'BEST-SELLiNG GAME EVER',
        description:
            'Minecraft surpassed 176 million copies sold, making it the best-selling video game of all time. Its cultural impact spanned merchandise, conventions, and a generation of young gamers.',
    },
    {
        year: '2021',
        title: 'CAVES & CLiFFS',
        description:
            'The massive Caves & Cliffs update was released in two parts, completely overhauling world generation with taller mountains, deeper caves, new mobs like the Axolotl and Warden, and new blocks.',
    },
    {
        year: '2023',
        title: 'TALES & TRAiLS',
        description:
            'The Trails & Tales update introduced cherry blossom biomes, archaeology mechanics, and new armor trims, continuing the tradition of free major content updates for the community.',
    },
    {
        year: '2025',
        title: 'STiLL GROWiNG',
        description:
            'Minecraft continues to evolve with regular updates, a thriving modding community, and over 300 million copies sold. It remains one of the most influential and beloved games in history.',
    },
]

export default function HistoryPage() {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='bg-[rgb(224,225,229)] flex justify-center relative h-18 items-center text-[22px]'>
                <Link href='/' className='absolute left-5 top-1/2 -translate-y-1/2'>
                    <Image src='/images/less.svg' alt='back' width={10} height={10} />
                </Link>
                <h3>MiNECRAFT HiSTORY</h3>
            </div>

            <div className='flex-1 overflow-auto bg-[rgb(31,30,29)]'>
                <div className='flex flex-col gap-3 p-6 max-w-3xl mx-auto'>
                    {timeline.map((event, index) => (
                        <TimelineEvent key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function TimelineEvent({ event, index }: { event: HistoryEvent; index: number }) {
    return (
        <div className='flex gap-4 items-start'>
            <div className='flex flex-col items-center shrink-0 w-20'>
                <div className='bg-[rgb(71,117,49)] text-slate-100 text-center py-1 px-2 border border-[#111214] w-full'>
                    <span className='text-sm'>{event.year}</span>
                </div>
                {index < 11 && (
                    <div className='w-0.5 flex-1 bg-[#807c7b]/40 min-h-4' />
                )}
            </div>
            <div className='bg-[rgb(54,53,50)] border border-[#111214] flex-1 p-4'>
                <div className='flex justify-center border-b-2 border-slate-100 mb-3 pb-2'>
                    <p className='text-[rgb(224,225,229)] text-base tracking-wide'>{event.title}</p>
                </div>
                <p className='text-slate-100/80 text-sm leading-relaxed text-justify'>
                    {event.description}
                </p>
            </div>
        </div>
    )
}
