import React, { useState } from 'react'
import './chart.css'
import data from '../../excerciseChart.json'

function Chart({name}) {
  const muscle = data[name];
  const [showTable, setShowTable] = useState(false)
  function toggle(){
    setShowTable(!showTable)
  }
  return (
    <div style={{zIndex: 9999}}>
    <div className='showChart' onPointerEnter={toggle}>Rep Guide</div>
    <div style={{display: showTable ? 'block' : 'none'}} onPointerLeave={toggle} className='tableContainer'>
      <table border={1}>
        <thead>
            <tr>
                <td>Exercise</td>
                <td>Intensity level</td>
                <td>Repetetions</td>
                <td>Sets</td>
            </tr>
        </thead>
            {muscle.map((exer, index) => {
            return(
              <tbody key={index}>
                <tr>
                    <td rowSpan={3}>{exer.name}</td>
                    <td>Beginner</td>
                    <td>{exer.brep}</td>
                    <td>{exer.bset}</td>
                </tr>
                <tr>
                    <td>Intermediate</td>
                    <td>{exer.irep}</td>
                    <td>{exer.iset}</td>
                </tr>
                <tr>
                    <td>Expert</td>
                    <td>{exer.erep}</td>
                    <td>{exer.eset}</td>
                </tr>
              </tbody>
            )})}
     </table>
    </div>
    </div>
  )
}

export default Chart
