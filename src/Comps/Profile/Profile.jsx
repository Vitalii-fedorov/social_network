import Posts from '../Posts/Posts';
import styled from 'styled-components';

const ProfileBlock = styled.div`
    margin-top: 1em;
    background-color: #0C1B36;
    width: 100%;
    height: 45em;
`

const Name = styled.h3`
    font-size: 1.2em;
`

const List = styled.ul`
    display: block;
    list-style-type: none;
`

const Userprofile = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    width: 40%;
`

const Cat = styled.div`
    background-image: url('../../../dist/assets/Phottoo2.jpg');
    background-size: cover;
    float: left;
    width: 9rem;
    height: 9em;
    margin-left: 1em;
    margin-top: 1em;
    
`

const Profile = () => {
    return (
        <ProfileBlock>
            <div className="profile">
                <Userprofile>
                    <Cat></Cat>
                    <List>
                        <li><Name>Vitalii Fedorov</Name></li>
                        <li>Date of Birth: 23.03.2002</li>
                        <li>City: Nikopol</li>
                    </List>
                </Userprofile>
            </div>
            <Posts />
        </ProfileBlock>
    )
}

export default Profile;

