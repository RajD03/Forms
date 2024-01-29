import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState();
    const [fullName, setFullname] = useState();

    const [place, setPlace] = useState();
    const [getNewPlace, setNewPlace] = useState();

    const [Gmail, setEmail] = useState();
    const [getNewMail, setNewMail] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const getPlace = (event) => {
        console.log(event.target.value);
        setPlace(event.target.value);
    };

    const getEmail = (event) => {
        setEmail(event.target.value);
    };

    const getName = (event) => {
        event.preventDefault();  // this is will stop to disappear the inputs after refreshing the page which occur while using form tag.
        setFullname(name);
        setNewPlace(place);
        setNewMail(Gmail);
    };

    return (
        <>
            <div className='main_container' >
                <form onSubmit={getName} >
                    <h1>Forms....{fullName} {getNewPlace} {getNewMail} </h1>
                    <div className='input_container' >
                        <input type="name" placeholder="enter your name" onChange={inputEvent} value={name} required />
                        <input type="name" placeholder="enter your place" onChange={getPlace} value={place} required />
                        <input type="email" placeholder="enter your email" onChange={getEmail} value={Gmail} required />
                    </div>
                    <button>Click Me 👆  </button>
                </form>
            </div>
        </>
    )
}

export default Form
