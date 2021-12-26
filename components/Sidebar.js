import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    //HeartIcon,
} from '@heroicons/react/outline'
import {
    // HomeIcon,
    // SearchIcon,
    // LibraryIcon,
    // PlusCircleIcon,
    // RssIcon,
    HeartIcon,
} from '@heroicons/react/solid'
import {signOut, useSession} from 'next-auth/react'
import {useState, useEffect} from 'react'
import { useRecoilState } from 'recoil';
import useSpotify from './../hooks/useSpotify';
import { playlistIdState } from './../atoms/playlistAtom';

function Sidebar() {
    const {data: session, status} = useSession()
    const [playlists, setPlaylists] = useState([])
    const spotifyApi = useSpotify()
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)
    
    //console.log("session in sidebar:", session)
    //console.log('status in sidebar:', status)

    useEffect(() => {
        //console.log('spotifyApi.getAccessToken():', spotifyApi.getAccessToken())
        if (spotifyApi.getAccessToken()) {
            //console.log('spotifyApi.getUserPlaylists():', spotifyApi.getUserPlaylists())
            //console.log('spotifyApi.getUserPlaylists().then(data):', spotifyApi.getUserPlaylists().then(data))
            spotifyApi.getUserPlaylists().then((data) => {
                //console.log('data:', data)
                setPlaylists(data.body.items)
            })
        }
    }, [session, spotifyApi])
    
    //console.log("playlists in sidebar:", playlists)

    // function doThis() {
    //     signOut()
    //     window.location.href = 'http://localhost:3000/login'
    // }

    return (
        <div className="h-screen p-5 overflow-y-scroll text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex text-gray-500 border-r border-gray-900 scrollbar-hide pb-36">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="w-5 h-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className="w-5 h-5" />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="w-5 h-5" />
                    <p>Your Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="w-5 h-5" />
                    <p>Create Playlist</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="text-blue-500 w-5 h-5" />
                    <p>Your Library</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="text-green-500 w-5 h-5" />
                    <p>Your Episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                
                {playlists.map((playlist) => (
                    <div 
                        key={playlist.id} 
                        onClick={() => setPlaylistId(playlist.id)} 
                        className='cursor-pointer hover:text-white'
                    >
                        {playlist.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
