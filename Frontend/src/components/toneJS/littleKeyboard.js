import React from "react";
import Tone from "tone";
import './keyboard.css'

function LittleKeyboard() {
    let synth = new Tone.PolySynth().toMaster()
    let notes = ['C', 'D', 'E', 'G', 'A', 'B']

    const handleClick = (note) => {
        synth.triggerAttackRelease(note + '4', "16n");
        console.log(note)
    };

    return (
        
        <div className='container'>
            {notes.map((note) => {
                return <div className='whitenote' onMouseDown={() => { handleClick(note) }} />
            })}
        </div>

    )


};

export default LittleKeyboard;