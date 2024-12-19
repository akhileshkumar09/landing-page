import firstIMG from '../../assets/first.png'

function FirstComponent() {
  return (
    <div className="flex w-full">
    <img src={firstIMG} alt='fist'/>
    <div>
        <h2>Total Compensation</h2>
        <p>Make resposible compensation decisions, stay on budget, and <br/>communicate the true value of your compensation package</p>
    </div> 
    </div>
  )
}

export default FirstComponent