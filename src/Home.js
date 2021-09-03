import React, { useState, useEffect } from 'react';
import { Heading, Box } from 'react-bulma-components';
import Face from './MyFace.png';


export default function Home() {
    const [emot1, setEmot1] = useState('💪🏾');
    const [emot2, setEmot2] = useState('🚀');
    const [greeting, setSetGreeting] = useState('Actualization');
    const [time, setTime] = useState(Date.now());
    const [rotation, setRotation] = useState(45);

    const emotList = ['💰','👨🏾‍💻','🔭','🤔','🚀','💪🏾'];

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        setEmot1(emotList[getRandomInt(0,6)]);
        setEmot2(emotList[getRandomInt(0,6)]);
    }, [time]);

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (rotation === 25) {
            setRotation(335);
        } else {
            setRotation(25);
        }
    }, [time])

    return(
        <>
        <br />
        <div className="block">
            <div className="container is-fluid">
                <Box>
                    <Heading size="1"><center>{emot1} Amari Asis West {emot2}</center></Heading>
                    <p><b>Hey there!</b> Pleased to meet cha! My name is Amari West, but you can just call me Amari! (It's what my friends call me). I am currently an enrolled junior at Texas A&M University as a computer engineering student, and I am out to secure that B.A.G.. By B.A.G. I mean B as in Bachelor's, A as in Actualization, and G as in Grind. I am out for the pursuit of knowledge and understanding of the technologies that I'll use in my career, and above all else, I am seeking to become the best version of myself. (I also just want to mess around in my free time).</p>

                    <center>
                        <img style={{transform: `rotate(${rotation}deg)`}} src={Face} width="300" height="110" />
                    </center>
                </Box>
            </div>
        </div>
        </>
    );
}