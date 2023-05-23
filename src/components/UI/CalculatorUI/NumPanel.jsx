

import Button from "./Button";




export default function NumPanel({onPress}){
    const numbers = Array.from(Array(10).keys()).reverse();
    return(
        <>
            <div className="grid grid-cols-3 gap-4">
                {numbers.map(num=><Button key={Math.random()} onPress={onPress} btnInside={num}></Button>)}
                <Button btnInside="DEL" onPress = {onPress}></Button>
                <Button btnInside="AC" onPress = {onPress}></Button>
            </div>
        </>
    )
}