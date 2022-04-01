import './index.css';

const employee= {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }


function Profile(props){
    return(
    <div className="profile">
    <img id="y" src={props.profileImg} alt='profileImg'/>
    <p className='name'>{props.name}</p>
    <h4>Location</h4>
    <p>{props.location}</p>
    <h4>Blood group</h4>
    <p>{props.bloodGroup}</p>
    <h4>Age</h4>
    <p>{props.age}</p>
    </div>
    );
  }
let App=()=>Profile(employee)
export default App;

