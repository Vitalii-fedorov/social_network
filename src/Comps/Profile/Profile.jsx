import Posts from '../Posts/Posts';
import './Profile.css';

const Profile = () => {
    return (
        <div className="ProfileBlock">
            <div>
                <div className="Userprofile">
                    <img src="/assets/Phottoo2.jpg" alt="Me" />
                    <div className="UserProfileInfo">
                    <ul>
                        <li><h3>Vitalii Fedorov</h3></li>
                        <li>Date of Birth: 23.03.2002</li>
                        <li>City: Nikopol</li>
                        </ul>
                    
                    <div className="SocialMenu">
                    <div className="SocialIcon">
                        <a href="https://www.linkedin.com/in/vitalii-fedorov-50a636299/" className="SocialIconA">
                        <div className="socicon1">

                        </div>
                        </a>
                        </div>
                    <div className="SocialIcon">
                        <a href="https://t.me/fedorov_vitalii" className="SocialIconA">
                        <div className="socicon2">
                            
                        </div>
                        </a>
                        </div>
                    <div className="SocialIcon">
                        <a href="https://github.com/Vitalii-fedorov" className="SocialIconA">
                        <div className="socicon3">
                            
                        </div>
                        </a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <Posts />
            </div>
    )
}

export default Profile;

