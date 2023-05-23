
import {ibm} from '../../../util/fonts'

const screenClass = `${ibm.className} text-right text-[30px] caret-slate-800 p-6 w-full h-[80px] border-none rounded-xl bg-slate-950 focus:outline-none focus:bg-slate-800 `




export default function Screen({handleChange, value}){
    return(
        <>
            <input type="number" onChange={handleChange} value={(value===0? '': value)}  className={screenClass}/>
        </>
    )
}