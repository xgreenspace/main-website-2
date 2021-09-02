import React, { useState, useEffect } from 'react';
import { Heading, Box } from 'react-bulma-components';


export default function Home() {
    const [emot1, setEmot1] = useState('💪🏾');
    const [emot2, setEmot2] = useState('🚀');

    const emotList = ['💰','🏫','👨🏾‍💻','🔭','🤔','🚀','💪🏾'];

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        setEmot1(emotList[getRandomInt(0,6)]);
        setEmot2(emotList[getRandomInt(0,6)]);
    });

    return(
        <>
        <br />
        <div className="container is-fluid">
            <Box>
                <Heading size="1"><center>{emot1} Amari Asis West {emot2}</center></Heading>
                <p><b>Hey there!</b> Pleased to meet cha! My name is Amari West, but you can just call me Amari! (It's what my friends call me). I am currently an enrolled junior at Texas A&M University as a computer engineering student, and I am out to secure that B.A.G.. By B.A.G. I mean B as in Bachelor's, A as in Actualization, and G as in Grind. I am out for the pursuit of knowledge and understanding of the technologies that I'll use in my career, and above all else, I am seeking to become the best version of myself. (I also just want to mess around in my free time).</p>
            </Box>
        </div>
        </>
    );
}