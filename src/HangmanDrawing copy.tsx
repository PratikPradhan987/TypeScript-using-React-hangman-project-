import './css/HangmanDrawing.css'
const Head = (
  <div className='Head'></div>
)
const Body = (
  <div className='Body'></div>
)
const Right_arm = (
  <div className='Right_arm'></div>
)
const Left_arm = (
  <div className='Left_arm'></div>
)
const Right_leg = (
  <div className='Right_leg'></div>
)
const Left_leg = (
  <div className='Left_leg'></div>
)
const HangmanDrawing = () => (
  <div style={{ position: "relative" }}> 
  {Head}{Body}{Right_arm}{Left_arm}{Right_leg}{Left_leg}
    <div
      style={{
        height: "50px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: 0,
        right: 0,
      }} />
    <div
      style={{
        height: "10px",
        width: "200px",
        background: "black",
        marginLeft: "120px",
      }} />
    <div
      style={{
        height: "400px",
        width: "10px",
        background: "black",
        marginLeft: "120px",
      }} />
    <div style={{ height: "10px", width: "250px", background: "black" }} />
  </div>


)

export default HangmanDrawing