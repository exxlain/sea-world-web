import React from 'react'
import PropTypes from 'prop-types'
import {
  isMobile,
} from 'react-device-detect'
import './Main.css'
import { ReactComponent as Orca }  from '../../orca.svg'
import { ReactComponent as Penguin }  from '../../penguin.svg'

const mapAnimals = {
  'whale': <Orca/>,
  'penguin': <Penguin/>,
}
class Main extends React.Component {
  onNextClick=()=>{
    const { getNextStep } = this.props
    console.log('next')
   // getNextStep()
  }
  onRestartClick=()=>{
    console.log('restart')
  }
  render() {
    const { data } = this.props
    const mainClass = isMobile ? 'mobileApp' : 'app'
    return (
      <div className={mainClass}>
          <table border="1" className="table">
            <tbody>
            {data.map((line, index)=>{
              const result = line.map((el, index)=> (<td key={`${el}${index}`} className="table_cell">{mapAnimals[el]}</td>))
              return  <tr key={`${line}${index}`} className="table_line">{result}</tr>
            })}
            </tbody>
          </table>
          <div className="buttons-wrapper">
           <button className="button" onClick={()=>{ this.onRestartClick()}}>Restart</button>
           <button className="button" onClick={()=>{ this.onNextClick()}}>Next turn</button>
         </div>
      </div>
    )
  }
}

export default Main

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}
