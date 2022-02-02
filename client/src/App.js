
import React, {useEffect, useState} from 'react';
import Email from './components/emailForm';

function App() {


const [backendData, setBackendData] = useState([{}])





const fetchData = async () => {
const url = "http://localhost:5000/api"
  try {
    const response = await fetch(url)
    const backendData = await response.json()

    setBackendData(backendData)
  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  fetchData()
}, [])

console.log(backendData)






  return (
  <>

  

  <div>


{(typeof backendData.jobTypes === 'undefined') ? (
<p>Loading...</p>
  ) : (
    backendData.jobTypes.map((job, i) => (
  <p key={i}>{job}</p>)) 

)}


  </div>

  <Email />


</>
  );
  

  }
export default App;
