import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
             <h3>
                <NavLink to={"/dialogs/" + props.id}>
                    {props.name}
                </NavLink>
            </h3>

        </div>
    )
}

const Dialogs = (props) => {

    // eslint-disable-next-line react/prop-types
    const dialogsData = props.dialogsData

    // eslint-disable-next-line react/prop-types
    let dialogsElements = dialogsData.map ((el, index) =>
        <DialogItem key={index} name={el.name} id={el.id} />)

    let messagesData = [
        {id: 1, message: 'When I run 40 miles He runs 80'},
        {id: 2, message: 'His name is Kizzma'},
        {id: 3, message: 'Who is Kizzma?'}]

    return (
        <div className="Dialogs">

            <div className="dialogs1">
                <h2>Dialogs</h2>
{/*             <ul className="profiled">
 */}                {dialogsElements}
            {/* </ul> */}
            </div>
            <div className="dialogs2">
            <div className="message">
                <img src="/assets/Phottoo2.jpg" alt="me" />
                <div className="text-message"><span>{messagesData[0].message}</span></div>
            </div>
                <div className="message">
                    <img src='/assets/Phottoo2.jpg' alt="me" />
                    <div className="text-message"><span>{messagesData[1].message}</span></div>
                </div>
            <div className="message">
                <img src="/assets/cat.png" alt="cat" />
                <div className="text-message"><span>{messagesData[2].message}</span></div>
            </div>
        </div>
        
    </div>
    )
}

export default Dialogs;