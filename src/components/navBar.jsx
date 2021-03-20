import React from "react"

export default function NavBar({fetchedData,changingInfo,info})
{
return (
    <div className="btn-container">
              {
                fetchedData.map((e,i)=><button className={`job-btn ${(e.id===info.id)?"active-btn":null}`} key={i} onClick={()=>changingInfo(e.id)}>{e.company}</button>)
              }
    </div>
)

}