import './Pets.css'

function Pets(props){
  return(
    <>
    <div className="card">
      <div className='card1'>
    <img src={props.img} />
    <h3>{props.name}</h3>
    <p>{props.age}</p>
    <p>{props.desc}</p>
    <a className='petbtn' href={props.link}>Book now</a>
    </div>
    </div>
    </>
  )
}
export default Pets;