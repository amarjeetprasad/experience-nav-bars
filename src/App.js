import React, { useState, useEffect } from 'react'
import BodySection from "./components/bodySection";
import Header from "./components/header"
import NavBar from "./components/navBar"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [fetchedData,setFetchedData] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);
  const [error,setError] = useState("");
  const [info,setInfo] = useState(null);

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(result=>{
        setFetchedData(result);
        setInfo(result[0]);
        setIsLoaded(true);
    },error=>{
      setError(error);
      setIsLoaded(true);
    })
  },[])


  function changingInfo(id)
  {
     setInfo(fetchedData.filter(e=>e.id===id)[0])
  }

if(!isLoaded)
    return <section className="section loading">
               <h1>Loading...</h1>
           </section>
else if(error)
    return <p>Error: {error.message}</p>
else
return (
  <section className="section">
        <Header/>
        <div className="jobs-center">
              <NavBar fetchedData={fetchedData} changingInfo={changingInfo} info={info}/>
              <BodySection info={info}/>
        </div>
        <button className="btn">more info</button>
  </section>
  
)

}

export default App
