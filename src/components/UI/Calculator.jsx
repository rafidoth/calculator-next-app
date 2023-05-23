'use client'

import Screen from "./CalculatorUI/Screen";
import NumPanel from "./CalculatorUI/NumPanel";
import Operations from "./CalculatorUI/Operations";
import { useEffect, useState } from "react";



export default function Calculator(){
  
    const [calc, setCalc] = useState({
        value: 0,
        operator: '',
        prevValue: 0,
    });          

    const handleChange = e =>{
        setCalc({...calc, value: e.target.value});
    }

    const handlePress = (e)=>{
        let val = e.target.id;
        if(val=== 'DEL'){
            setCalc({...calc, value: Math.floor(calc.value/10)});
        }else if(val==='AC'){
            setCalc({...calc, value: 0, operator: '', prevValue:0});
        }
        else{
            setCalc(prev => {
                let newValue = (prev.value===0? '' : prev.value) + val
                return {...calc, value : Number(newValue)};
            })
        }
    }

    const handleOp = e =>{
        if(e.target.id=== '='){
            switch(calc.operator){
                case '+':
                    setCalc({...calc, value: calc.prevValue + calc.value,prevValue:0, operator : ''});
                    break;
                case '-':
                    setCalc({...calc, value: calc.prevValue - calc.value ,prevValue:0, operator : ''});
                    break;
                case 'X':
                    setCalc({...calc, value: calc.prevValue * calc.value ,prevValue:0, operator : ''});
                    break;
                case '/':
                    setCalc({...calc, value: calc.prevValue / calc.value ,prevValue:0, operator : ''});
                    break;
                case 'M':
                    setCalc({...calc, value: calc.prevValue % calc.value ,prevValue:0, operator : ''});
                    break;
                default:
                    break;
            }
        }else{
            setCalc(calc =>{
                let newCalc = {...calc, operator: e.target.id, prevValue: calc.value, value:0};
                return newCalc;
            });
        }
    }


    return(
        <>
            <div className={` p-6 pt-10 block opacity-100 shadow rounded-xl bg-slate-900`}>
                <Screen handleChange={handleChange} value={calc.value}/>
                <div className="w-full flex p-6 justify-between gap-x-5">
                    <div className="">
                        <Operations onPress={handleOp}/>
                    </div>
                    
                    <div className="">
                        <NumPanel onPress ={handlePress} />
                    </div>
                </div>
            </div>

            {console.log(calc)}
        </>
    );
}
