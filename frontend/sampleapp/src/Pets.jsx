import './Pets.css'
import { useNavigate } from 'react-router-dom';

function Pets({img,name,age,desc,link}){
  const navigate = useNavigate();
  const handleBookNow=()=>{
    navigate('/form', { state: { setFormDatapetName: name } })
  };
  return(
    <>
    <div className="card">
      <div className='card1'>
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <p>{age}</p>
    <p>{desc}</p>
    {/* <a className='petbtn' href={props.link}>Book now</a> */}
    <button className='petbtn'type="button" onClick={handleBookNow}>Book Now</button>
    </div>
    </div>
    </>
  )
}
export default Pets;
