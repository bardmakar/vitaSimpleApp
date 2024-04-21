import {useState} from "react"

import monkey1 from './../images/monke1.jpeg'
import monkey2 from './../images/monke5.jpg'
import monkey3 from './../images/monky.jpeg'
import monkey4 from './../images/monky.jpg'

export default function Monkeys () {

    let monkyArr = [monkey1, monkey2, monkey3, monkey4];

    const [image, setImage] = new useState(monkey1)

    function randomImage() {
        let min = 0;
        let max = 4;
        let randomNum = Math.random() * (max - min) + min;
        console.log(Math.round(randomNum) + ' every 5000')
        return monkyArr[Math.round(randomNum)]
    }


    setInterval(() => setImage(randomImage()), 3000)
    return (
        <div>
             <img src={image} height="200" width="200"></img>
        </div>
    )
}