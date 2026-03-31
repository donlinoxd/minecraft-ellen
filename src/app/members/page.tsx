'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Player {
    id: string
    name: string
    nickname: string
    avatar: string
    achievement: string
    shortQuote: string
    hobby: string
    birthday: string
    skills: string
    dreamJob: string
    favoriteSubject: string
    favoriteSong: string
}

const players: Player[] = [
    {
        id: '001',
        name: 'Rhianne Ashley G. Dela Cruz',
        nickname: 'Rhi',
        avatar: '/images/delacruz.jfif',
        achievement: 'N/A',
        shortQuote: 'Live the day as it comes',
        hobby: 'Sleeping, listening to music, watching TV shows & cartoons',
        birthday: '02/12/2008',
        skills: 'N/A',
        dreamJob: 'Doctor',
        favoriteSubject: 'Science',
        favoriteSong: 'Blueprint - Stray Kids',
    },
    {
        id: '002',
        name: 'Hannah Beatrice M. Zata',
        nickname: 'Bea',
        avatar: '/images/zata.jfif',
        achievement: 'Being able to get through this school year so far while maintaining good academic performance.',
        shortQuote: '"The hardest choices require the strongest wills." – Thanos',
        hobby: 'Journaling, listening to music, watching movies or series, and making crafts',
        birthday: '02/12/2008',
        skills: 'Baking and photography',
        dreamJob: 'Nurse',
        favoriteSubject: 'N/A',
        favoriteSong: '"Who Knows" by Daniel Caesar',
    },
    {
        id: '003',
        name: 'Allison Claire P. Ebuña',
        nickname: 'Alli, Izzy, Calli',
        avatar: '/images/claire.jfif',
        achievement:
            'Grade 8–10 With Honors; Champion – Book Parade & Reading Competition; 1st place – Dance, Parol Making, Slogan Making (ESP, Nutrition, Buwan ng Wika), Field Demo; Grade 11 1st sem with High Honors; Class Treasurer (2024–2025)',
        shortQuote: '"We can\'t become what we need to be by remaining what we are"',
        hobby: 'Watching movies, listening to music, journaling; into astronomy and the ocean',
        birthday: '28/07/2009',
        skills: 'Calligraphy',
        dreamJob: 'Pharmacist / Medtech',
        favoriteSubject: 'General Chemistry',
        favoriteSong: 'Secret Doors – Arctic Monkeys',
    },
    {
        id: '004',
        name: 'Angel Coronacion',
        nickname: 'Gel',
        avatar: '/images/coronacion.jfif',
        achievement: 'Consistent honor student',
        shortQuote: "Keep taking time for yourself until you're you again. – Lalah Delia",
        hobby: 'Cooking',
        birthday: '11/20/2008',
        skills: 'Volleyball',
        dreamJob: 'Nurse',
        favoriteSubject: 'Science or History',
        favoriteSong: 'Who Knows by Daniel Caesar',
    },
    {
        id: '005',
        name: 'Anjelyn D. Pastor',
        nickname: 'Jelyn',
        avatar: '/images/pator.jfif',
        achievement: 'Grade 9–10 With Honor; Rank 3 overall SY performance; Top 3 in TLE & Science multiple quarters; Most Promising',
        shortQuote: '"Create your own reality"',
        hobby: 'Sleep, eat, and repeat',
        birthday: '25/01/2009',
        skills: 'Singing, cooking, and playing guitar',
        dreamJob: 'Make-up artist',
        favoriteSubject: 'Mathematics',
        favoriteSong: 'Bawat Daan by Ebe Dancel',
    },
    {
        id: '006',
        name: 'Kisly Costan',
        nickname: 'Ly',
        avatar: '/images/kisly.jfif',
        achievement: 'Consistent with honors since Grade 7',
        shortQuote: 'Do what you can, with what you have, where you are',
        hobby: 'Drawing, reading, storytelling, singing, dancing',
        birthday: '23/09/2009',
        skills: 'Team projects, graphic design',
        dreamJob: 'Medical Technology',
        favoriteSubject: 'History',
        favoriteSong: 'Best Part by Daniel Caesar',
    },
    {
        id: '007',
        name: 'Chase Potestad',
        nickname: 'Muymoy, Gabo, Potete',
        avatar: '/images/chase.jfif',
        achievement: 'N/A',
        shortQuote: 'Disturb the Comforted, Comfort the Disturbed',
        hobby: 'Studying parasitology and mapping human brain patterns through daily interaction',
        birthday: '15/12/2008',
        skills: 'Digital arts, writing, storytelling; Author of "Mise en...FASE?!"',
        dreamJob: 'N/A',
        favoriteSubject: 'Uwian',
        favoriteSong: 'They Like the Way I Grind - Ayesha Erotica',
    },
    {
        id: '008',
        name: 'Jacob Macapagal',
        nickname: 'Jacob',
        avatar: '/images/macapagal.jfif',
        achievement: 'N/A',
        shortQuote: 'Life is a trip, enjoy the ride',
        hobby: 'Playing mobile games and basketball',
        birthday: '26/07/2006',
        skills: 'N/A',
        dreamJob: 'N/A',
        favoriteSubject: 'N/A',
        favoriteSong: 'Secret Door',
    },
]

export default function MembersPage() {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>()

    return (
        <div className='w-full h-full flex'>
            <div className='flex flex-col w-9/12 h-full'>
                <div className='bg-[rgb(224,225,229)] flex justify-center relative h-18 items-center text-[22px]'>
                    <Link href='/' className='absolute left-5 top-1/2 -translate-y-1/2'>
                        <Image src='/images/less.svg' alt='less' width={10} height={10} />
                    </Link>
                    <h3>GROUP 3 PROFILE</h3>
                </div>
                {selectedPlayer && (
                    <div className='flex p-6 gap-3 h-full'>
                        <div className='flex flex-col w-[40%] gap-1'>
                            <div className='aspect-[100/60] w-full relative border border-[#111214]'>
                                <Image unoptimized src={selectedPlayer.avatar} alt={selectedPlayer.name + ' profile'} fill className='object-cover' />
                            </div>
                            <div className='flex flex-col p-3 gap-3 bg-[rgb(54,53,50)]'>
                                <div className={`flex gap-3 items-center`}>
                                    <div className='relative border border-[#111214]'>
                                        <div className='w-10 h-10 relative'>
                                            <Image
                                                unoptimized
                                                src={selectedPlayer.avatar}
                                                alt={selectedPlayer.name + ' avatar'}
                                                width={40}
                                                height={40}
                                                className='object-cover'
                                            />
                                        </div>
                                    </div>
                                    <div className='text-slate-100 pt-1.5'>
                                        <p className='text-xl leading-6'>{selectedPlayer.name}</p>
                                        <p className='text-sm text-[rgb(224,225,229)]/90'>PLAYiNG MiNECRAFT</p>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='p-3 text-center w-full rounded-[1px] border-[#807c7b] bg-slate-100 border-[1.5px]'>
                                        <span>{selectedPlayer.nickname}</span>
                                    </div>
                                    <div className='flex flex-col items-center pt-2 aspect-square text-center rounded-[1px] text-2xl border-[#807c7b] bg-slate-100 border-[1.5px]'>
                                        <span className='leading-2'>.</span>
                                        <span className='leading-2'>.</span>
                                        <span className='leading-2'>.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <div className='flex justify-center border-2 border-[#807c7b] bg-[rgb(31,30,29)] h-16 text-[22px] text-slate-100 items-center'>
                                <p className='border-b-2 border-slate-100 py-3 px-4'>OVERViEW</p>
                            </div>
                            <div className='flex-1 bg-[rgb(54,53,50)] p-4 flex flex-col gap-2 overflow-auto text-slate-100'>
                                <Row label='NiCKNAME' value={selectedPlayer.nickname} />
                                <Row label='BiRTHDAY' value={selectedPlayer.birthday} />
                                <Row label='DREAM JOB' value={selectedPlayer.dreamJob} />
                                <Row label='FAV SUBJECT' value={selectedPlayer.favoriteSubject} />
                                <Row label='FAV SONG' value={selectedPlayer.favoriteSong} />
                                <Row label='HOBBiES' value={selectedPlayer.hobby} />
                                <Row label='SKiLLS' value={selectedPlayer.skills} />
                                <Row label='SHORT QUOTE' value={selectedPlayer.shortQuote} />
                                <Row label='ACHiEVEMENT' value={selectedPlayer.achievement} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex flex-col w-3/12 bg-[#111214] h-screen'>
                <h2 className='bg-[rgb(54,53,50)] h-18 flex items-center justify-center text-gray-100 text-[22px]'>MEMBERS</h2>
                <div className='flex flex-col p-4 w-full'>
                    <div className='relative w-full bg-[rgb(71,117,49)] h-7 text-sm items-center flex'>
                        <p className='px-14'>ONLiNE</p>
                        <div className='absolute h-5 right-0 w-[60%] bg-[#111214] top-0'></div>
                    </div>
                    <div className='flex flex-col overflow-auto h-[calc(100vh-140px)] py-1 w-full gap-1'>
                        {players.map((player) => (
                            <Player
                                key={player.id}
                                player={player}
                                onSelect={() => setSelectedPlayer(player)}
                                isSelected={player.id === selectedPlayer?.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className='flex gap-2 border-b border-[#807c7b]/40 pb-2'>
            <span className='text-[rgb(224,225,229)]/60 text-sm w-36 shrink-0 pt-0.5 uppercase tracking-wide'>{label}</span>
            <span className='text-lg'>{value || 'N/A'}</span>
        </div>
    )
}

function Player({ player, onSelect, isSelected }: { player: Player; onSelect: () => void; isSelected: boolean }) {
    return (
        <div
            className={`flex gap-3 px-1.5 h-14 items-center cursor-pointer ${isSelected ? 'bg-[rgb(155,154,150)]' : 'bg-[rgb(54,53,50)]'}`}
            onClick={onSelect}
        >
            <div className='relative border border-[#111214]'>
                <div className='w-10 h-10 relative'>
                    <Image unoptimized src={player.avatar} alt={player.name + ' avatar'} fill className='object-cover' />
                </div>
                <div className='aspect-square rounded-full w-3.5 absolute -translate-x-1/2 -translate-y-1/2 top-0 left-full border-2 border-slate-100 bg-[rgb(71,117,49)]'></div>
            </div>
            <div className='text-slate-100 pt-1.5'>
                <p className='text-xl leading-4'>{player.nickname}</p>
                <p className='text-base text-[rgb(224,225,229)]/90'>PLAYiNG MiNECRAFT</p>
            </div>
        </div>
    )
}
