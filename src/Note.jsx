import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Note=(props)=>{
    const deleteNote=()=>{
     props.deleteItem(props.id);
    }
     return(<>
     <div>
     <h1> {props.title} </h1>
     <br />
     <p> {props.content} </p>
     <button onClick={deleteNote}>
<DeleteIcon />
</button>
     </div>
     </>)
}
export default Note;