import { useState } from "react"

function LearningUseState(){
    // const [name,setName] = useState("Abhinash")
    // const [age, setAge] = useState(20)
    // const [address, setAddress] = useState("Dharan")

    const [counter, setCounter] = useState(0)

    // let  counter = 0
    function increaseCounter(){
        setCounter(counter+1)
    }

    function decreaseCounter(){
        if(counter>0){
           setCounter(counter-1)
        }
    }

    return (
        <>
        <h1>{counter}</h1>
        <button onClick={increaseCounter} className="bg-amber-600 rounded-2xl w-10 mx-auto mr-2">+</button>
        <button onClick={decreaseCounter} className="bg-amber-600 rounded-2xl w-10 mx-auto">-</button>
        </>
    )
}

export default LearningUseState
