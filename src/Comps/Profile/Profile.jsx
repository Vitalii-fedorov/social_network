import './Profile.css';
import Posts from '../Posts/Posts';

const Profile = () => {
    return (
        <div className="Profile">
            <div className="profile">

           <div className="userprofile">
               <img src='/assets/Phottoo2.jpg' className="Cat" alt="cat" />
               <ul>
                   <li><h3>Vitalii Fedorov</h3></li>
                   <li>Date of Birth: 23.03.2002</li>
                   <li>City: Nikopol</li>
               </ul>
           </div>
            </div>
           <Posts />
        </div>
    )
}

export default Profile;