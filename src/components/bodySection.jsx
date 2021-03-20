import React from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'
export default function BodySection({info})
{
    return (
        <article className="job-info">
                  <h3>{info.title}</h3>
                  <h4>{info.company}</h4>
                  <p className="job-date">{info.dates}</p>
                  {
                    info.duties.map((duty,index)=>{
                      return <div className="job-desc" key={index}>
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                      </div>
                    })
                  }
        </article>
    )
}