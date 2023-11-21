import './Message1.css';

const Message1 = (props) => {
    return (
        <div className="dialogs2">
            <div className="message">
                <img src="/assets/Phottoo2.jpg" alt="me" />
                <div className="text-message">
                    <span>
                    {props.messagesData[0].message}
                    </span>
                    </div>
                </div>
                <div className="message">
                    <img src='/assets/Phottoo2.jpg' alt="me" />
                    <div className="text-message">
                        <span>
                        {props.messagesData[1].message}
                    </span>
                    </div>
                </div>
        </div>
    );
}

export default Message1;