


import { montserratMedium } from "@/util/fonts"

const buttonClass = `${montserratMedium.className} flex justify-center items-center w-[50px] h-[50px]  text-slate-950 rounded-[50%] text-2xl hover:bg-slate-950 hover:text-white`




export default function Button({btnInside, onPress, color}){
    return(
        <>
            <button id={btnInside} onClick={onPress} className={`${(color==='orange'? 'bg-orange-600' : 'bg-green-500')} ${buttonClass}`}>{btnInside}</button>
        </>
    )
}