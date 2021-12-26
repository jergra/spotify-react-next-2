import { ChevronDownIcon } from "@heroicons/react/outline"
import { useSession, signOut } from "next-auth/react"
import { useState, useEffect } from "react"
import {shuffle} from 'lodash'
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, playlistIdState } from './../atoms/playlistAtom';
import useSpotify from './../hooks/useSpotify';
import Songs from './Songs';


// const colors = [
//     'from-indigo-500',
//     'from-blue-500',
//     'from-green-500',
//     'from-red-500',
//     'from-yellow-500',
//     'from-pink-500',
//     'from-purple-500'
// ]

const colors = [
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
    'from-purple-500',
    'from-orange-500',
    'from-lime-500',
    'from-teal-500',
    'from-violet-500',
    'from-slate-500',
    'from-fuchsia-500',
    'from-rose-500',
    'from-sky-500',
    'from-cyan-500',
    'from-emerald-500',
    'from-amber-500',
    'from-zinc-500',
]

function Center() {
    const {data: session} = useSession()
    const spotifyApi = useSpotify()
    const [color, setColor] = useState(null)
    const playlistId = useRecoilValue(playlistIdState)
    const [playlist, setPlaylist] = useRecoilState(playlistState)

    useEffect(() => {
        //var randomColor = ((Math.floor(Math.random()*2) + 4)*100).toString();
        //var randomColor = Math.floor(Math.random()*16777215).toString(16);
        //var choose = shuffle(colors).pop()
        //randomColor = choose + randomColor
        //setColor(randomColor)
        var randomColor = shuffle(colors).pop()
        //console.log('randomColor:', randomColor)
        setColor(randomColor)
    }, [playlistId])

    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then((data) => {
            setPlaylist(data.body)
        }).catch((err) => console.log('something went wrong', err))
    }, [spotifyApi, playlistId])

    //console.log('playlist in Center:', playlist)
    
    return (
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
            <header className='absolute top-5 right-8'>
                <div 
                    className='flex items-center p-1 pr-2 space-x-3 bg-black text-white rounded-full cursor-pointer opacity-90 hover:opacity-80'
                    onClick={signOut}
                >
                    <img className='w-10 h-10 rounded-full' src={session?.user.image} alt='' />
                
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className='w-5 h-5' />
                </div>
            </header>
            <section className={`flex items-end space-x-7 px-8 py-8 bg-gradient-to-b ${color} to-black h-80 text-white padding-8`}>
                <img 
                    className='shadow-2xl h-44 w-44' 
                    src={playlist?.images?.[0]?.url} 
                    alt='' 
                />
                <div>
                    <p>PLAYLIST</p>
                    <h1 className='text-2xl font-bold md:text-3xl xl:text-5xl'>
                        {playlist?.name}
                    </h1>
                </div>
            </section>
            <div>
                <Songs />
            </div>
        </div>
    )
}

export default Center
