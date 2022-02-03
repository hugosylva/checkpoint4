import React, { useState, useEffect } from "react";
import Axios from "axios";

function Feedback() {

    const [workName, setWorkName] = useState('')
    const [workReview, setWorkReview] = useState('')
  
    const submitReview = () => {
        Axios.post("http://localhost:5000/api/insert", {
            workName: workName, 
            workReview: workReview,
        }).then(() => {
            alert("successful insert")
        })


    }
return(
<>
<h2> Your Feedback </h2>

<div>
<lable> Work Name </lable>
<input type="text" name="workName" onChange={(e)=>
setWorkName(e.target.value)
}/>
<lable> Your feedback </lable>
<input type="text" name="workReview" onChange={(e)=>
setWorkReview(e.target.value) 
}/>

<button onClick={submitReview}> SUBMIT </button>
</div>

</>
)
}

export default Feedback;