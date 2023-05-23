
import {PlusIcon} from '@heroicons/react/24/outline'
import {MinusIcon} from '@heroicons/react/24/outline'
import Button from "./Button"

const operations = [
    "+",
    "-",
    "X",
    "/",
    "M",
    "="
    ]

export default function Operations({onPress}){

    return(
    <>
        <div className="grid grid-cols-3 gap-4 ">
            {operations.map((op,index)=><Button color= {'orange'} key={index} btnInside={op} onPress={onPress} ></Button>)}
        </div>
    </>
    )
}