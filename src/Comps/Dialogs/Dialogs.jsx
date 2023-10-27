import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <li>
                <h3>
                <NavLink to={"/dialogs/" + props.id}>
                    {props.name}
                </NavLink>
            </h3>
            </li>

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
        {id: 1, message: 'Are you gay?'},
        {id: 2, message: 'No, im not!'},
        {id: 3, message: 'Yes you are.'},
        {id: 4, message: 'Fine, im gay..'}]

    return (
        <div className="Dialogs">

            <div className="dialogs1"><h2>Dialogs</h2>
            <ul className="profiled">
                {dialogsElements}
            </ul>
            </div>
            <div className="dialogs2">
            <div className="message">
                <img src="/assets/guy.png" alt="guy"/>
                <div className="text-message"><span>{messagesData[0].message}</span></div>
            </div>
                <div className="message">
                    <img src='/assets/cat.png' alt="cat" />
                    <div className="text-message"><span>{messagesData[1].message}</span></div>
                </div>
            <div className="message">
                <img src="/assets/guy.png" alt="guy"/>
                <div className="text-message"><span>{messagesData[2].message}</span></div>
            </div>
            <div className="message">
                <img src='/assets/cat.png' alt="cat" />
                <div className="text-message"><span>{messagesData[3].message}</span></div>
            </div>
            </div>

    </div>
    )
}

export default Dialogs;