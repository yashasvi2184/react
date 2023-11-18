import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [expand,setexpand]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const InputEvent=(event)=>{
        const { name , value } = event.target;
    setNote((prevData)=>{
        return {
            ...prevData,
            [name]: value,
        };
    });
    console.log(note);
    };
    const addEvent=()=>{
props.passNote(note);
setNote({ 
   title:"",
   content:"",
});
    }
    const expandIt=()=>{
setexpand(true);
    }
    const btoNormal=()=>{
        setexpand(false);
      }
    
    return (
        <>
            <div className=" text-center m-5 p-5 " onDoubleClick={btoNormal} >
                <form>
                    {expand?
                    <input type="text" 
                    name="title"
                    value={note.title}
                    onChange={InputEvent}           
                    placeholder="Title" /> : null}

                    <textarea rows="" column=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    placeholder="write here" 
                    onClick={expandIt}
                     />
                 {expand?
                    <Button onClick={addEvent}>
                        <AddIcon />
                    </Button> : null}
                </form>
            </div>
        </>
    );
}

export default CreateNote;
