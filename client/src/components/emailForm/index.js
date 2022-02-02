import React, {useState} from "react";
import Axios from "axios";

function Email() {

    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")

    const handleSend = async() => {
        setSent(true)
        try{
            await Axios.post("http://localhost:5000/send_mail", {text})
        } catch (error) {
            console.log(error)
                
            }
        }


return(
<>

{!sent ?(

<form onSubmit={handleSend}>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

    <button tyoe="submit">Send email</button>

</form>

) : (

    <h2> Thank you for your contact! </h2>
)
}


</>
)
}

export default Email;