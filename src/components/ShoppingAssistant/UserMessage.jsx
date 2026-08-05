import "./UserMessage.css";

function UserMessage({ children, time }) {

    return (

        <div className="user-message-wrapper">

            <div className="user-message">

                {children}

                <span className="user-message-time">
                    {time}
                </span>

            </div>

        </div>

    );

}

export default UserMessage;