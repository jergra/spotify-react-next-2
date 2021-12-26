dec 26, 2021

C:\dev\spotify-react-next

spotify clone from tutorial:
    Let's build Spotify 2.0 with NEXT.JS 12.0! (Middleware, Spotify API, 
    Tailwind, NextAuth, Recoil)
    https://www.youtube.com/watch?v=3xrko3GpYoU

    by Sonny Sangha


Needs spotify premium membership to work properly.
Needs .env.local file in the root, like this:

    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_CLIENT_SECRET=
    NEXT_PUBLIC_CLIENT_ID=
    JWT_SECRET=

start:
    npm run dev 

the deployed version does not go past the login page for reasons unknown
    https://spotify-react-next-2.vercel.app/login
    this will be deleted soon


To deploy to Vercel, need to provide the .env.local variables
to Vercel. NEXTAUTH_URL is 'https://spotify-react-next-2.vercel.app'.
NEXT_PUBLIC_CLIENT_SECRET and NEXT_PUBLIC_CLIENT_ID are from spotify,
JWT_SECRET is of the developer's choosing.


these redirect uri's need to be added at spotify:
    https://spotify-react-next-2.vercel.app/api/auth/callback/spotify
    http://localhost:3000/api/auth/callback/spotify