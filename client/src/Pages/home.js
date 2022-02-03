import React, {useEffect, useState} from 'react';
import "./App.css";
import Cover from './components/cover';
import Navbar from './components/navbar';
import About from './components/about' ;
import Info from "./components/info";
import Footer from "./components/footer";
import Feedback from './components/feedback';
import Email from "./components/emailForm";


function Home() {



  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);


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
<Navbar isScrolling={scrollHeight} />

<div className='job-types'>
{(typeof backendData.jobTypes === 'undefined') ? (
<p>Loading...</p>
  ) : (
    backendData.jobTypes.map((job, i) => (
  <p key={i}>{job}</p>)) 
)}
</div>
    <Cover />
    <About />
    <Info />
    <Email />
    <Footer />

</>
  );
  

  }
export default Home;
