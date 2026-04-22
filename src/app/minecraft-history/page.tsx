import Image from 'next/image'
import Link from 'next/link'

const timeline = [
    {
        year: '2009',
        title: 'The Beginning',
        description:
            'Markus "Notch" Persson began developing Minecraft as a side project. The first public version, Cave Game, was shared on YouTube in May 2009. The classic version was released shortly after, allowing players to build with blocks in a simple 3D world.',
    },
    {
        year: '2010',
        title: 'Alpha & Multiplayer',
        description:
            'Minecraft entered its Alpha phase in June 2010, introducing survival mode, crafting, and multiplayer. The game gained a massive following through word-of-mouth and YouTube Let\'s Play videos. By the end of the year, Minecraft had sold over 600,000 copies.',
    },
    {
        year: '2011',
        title: 'Official Release',
        description:
            'After a Beta phase that began in December 2010, Minecraft 1.0 was officially released on November 18, 2011, during MineCon. The full release included The End dimension, the Ender Dragon boss fight, enchanting, brewing, and NPC villages.',
    },
    {
        year: '2012–2014',
        title: 'Expanding the World',
        description:
            'Major updates introduced new features: the Pretty Scary Update (1.4) added witches and anvils, the Redstone Update (1.5) improved redstone mechanics, and the Update that Changed the World (1.7) overhauled world generation with new biomes.',
    },
    {
        year: '2014',
        title: 'Microsoft Acquisition',
        description:
            'In September 2014, Microsoft acquired Mojang and the Minecraft IP for $2.5 billion. Notch left the company, and development continued under new leadership. Jens "Jeb" Bergensten took over as lead developer.',
    },
    {
        year: '2016',
        title: 'Combat & Exploration',
        description:
            'The Combat Update (1.9) overhauled combat with shields and attack cooldowns. The Exploration Update (1.11) added woodland mansions and the cartographer villager. Minecraft: Education Edition was also released for classroom use.',
    },
    {
        year: '2017–2018',
        title: 'The Aquatic & Village Updates',
        description:
            'The Update Aquatic (1.13) completely revamped oceans with shipwrecks, coral reefs, dolphins, and underwater physics. The Village & Pillage update (1.14) overhauled villages, added pillagers, and introduced the new trading system.',
    },
    {
        year: '2019–2020',
        title: 'Nether Overhaul',
        description:
            'The Buzzy Bees update (1.15) added bees and honey. The Nether Update (1.16) was a massive overhaul introducing new Nether biomes like Crimson Forests and Soulsand Valleys, along with Piglins, the Netherite tier, and Bastion Remnants.',
    },
    {
        year: '2021',
        title: 'Caves & Cliffs',
        description:
            'Split into two parts, the Caves & Cliffs update (1.17 & 1.18) completely transformed world generation. It added towering mountains, deep caves, lush caves, dripstone caves, copper, amethyst, axolotls, goats, and the Warden.',
    },
    {
        year: '2022–2023',
        title: 'The Wild Update & Trails & Tales',
        description:
            'The Wild Update (1.19) added the Deep Dark, mangrove swamps, and frogs. Trails & Tales (1.20) introduced cherry blossom biomes, archaeology, armor trims, and the Sniffer mob voted in by the community.',
    },
    {
        year: '2024–2025',
        title: 'Modern Era',
        description:
            'Recent updates continue to expand the game with new biomes, mobs, and mechanics. Minecraft remains one of the best-selling video games of all time with over 300 million copies sold, and its community continues to grow worldwide.',
    },
]

export default function MinecraftHistoryPage() {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='bg-[rgb(224,225,229)] flex justify-center relative h-18 items-center text-[22px] shrink-0'>
                <Link href='/' className='absolute left-5 top-1/2 -translate-y-1/2'>
                    <Image src='/images/less.svg' alt='back' width={10} height={10} />
                </Link>
                <h3>MINECRAFT HiSTORY</h3>
            </div>

            <div className='flex-1 bg-[rgb(31,30,29)] overflow-auto'>
                <div className='max-w-3xl mx-auto px-6 py-8'>
                    <div className='flex items-center justify-center gap-3 mb-8'>
                        <span className='text-2xl'>&#x2694;&#xFE0F;</span>
                        <h2 className='text-[22px] text-slate-100 border-b-2 border-slate-100 py-3 px-4 uppercase tracking-wide'>
                            The Story of Minecraft
                        </h2>
                        <span className='text-2xl'>&#x2694;&#xFE0F;</span>
                    </div>

                    <div className='relative'>
                        <div className='absolute left-[27px] top-0 bottom-0 w-[3px] bg-[#807c7b]/30' />

                        <div className='flex flex-col gap-6'>
                            {timeline.map((entry) => (
                                <TimelineEntry key={entry.year} entry={entry} />
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-center gap-3 mt-10'>
                        {['&#x1F33F;', '&#x1FAA8;', '&#x1F332;', '&#x1FAA8;', '&#x1F33F;'].map((icon, i) => (
                            <span key={i} className='text-lg' dangerouslySetInnerHTML={{ __html: icon }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function TimelineEntry({ entry }: { entry: { year: string; title: string; description: string } }) {
    return (
        <div className='flex gap-4 relative'>
            <div className='flex flex-col items-center shrink-0 w-[57px]'>
                <div className='w-[14px] h-[14px] rounded-full bg-[rgb(71,117,49)] border-2 border-slate-100 mt-1.5 z-10' />
            </div>
            <div className='flex-1 bg-[rgb(54,53,50)] border border-[#807c7b]/40 p-4'>
                <div className='flex items-baseline gap-3 mb-2'>
                    <span className='text-[rgb(71,117,49)] text-sm font-bold tracking-wider'>{entry.year}</span>
                    <h4 className='text-slate-100 text-lg leading-5'>{entry.title}</h4>
                </div>
                <p className='text-[rgb(224,225,229)]/80 text-sm leading-relaxed text-justify'>
                    {entry.description}
                </p>
            </div>
        </div>
    )
}
