import {useState} from "react"

import monkey1 from './../images/monke1.jpeg'
import monkey2 from './../images/monke5.jpg'
import monkey3 from './../images/monky.jpeg'
import monkey4 from './../images/monky.jpg'
import funnyMonkey from './../images/funnyMonkey.jpeg' 
import monkeyWithGun from './../images/monkeyWithGun.jpeg'
import monkeyAndScreen from './../images/monkyInFrontOfScreen.jpeg'

export default function Monkeys () {
    let monkyArr = [monkey1, monkey2, monkey3, monkey4. funnyMonkey, monkeyWithGun, monkeyAndScreen];

    const [image, setImage] = new useState(monkey1)

    console.log("MOnkeys component render" +  image)

    function randomImage() {
        let min = 0;
        let max = monkyArr.length;
        let randomNum = Math.random() * (max - min) + min;
        // console.log(Math.round(randomNum) + ' every 5000')
        return monkyArr[Math.round(randomNum)]
    }


    setInterval(() => setImage((prev) => randomImage()), 2000)
    return (
        <div>
             <img src={image} height="200" width="200"></img>
        </div>
    )
}