import { IBM_Plex_Mono, Montserrat } from 'next/font/google'



const ibm = IBM_Plex_Mono({weight: "400",preload: false})
const montserratRegular = Montserrat({weight: "400",preload: false})
const montserratMedium = Montserrat({weight: "500",preload: false})




export {ibm, montserratMedium, montserratRegular}