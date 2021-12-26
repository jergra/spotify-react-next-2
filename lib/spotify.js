import SpotifyWebApi from "spotify-web-api-node";
//import URLSearchParams from 'spotify-web-api-node'

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-read-email',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    //'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-read'
].join(',')

const params = {
    scope: scopes,
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = 'https://accounts.spotify.com/authorize?' + queryParamString.toString()

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
})

// console.log("queryParamString in spotify.js:", queryParamString)
// console.log("LOGIN_URL in spotify.js:", LOGIN_URL)
// console.log("spotifyApi in spotify.js:", spotifyApi)

export default spotifyApi

export {LOGIN_URL}
