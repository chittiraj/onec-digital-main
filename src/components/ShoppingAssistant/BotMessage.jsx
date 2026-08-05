import "./BotMessage.css";

function BotMessage({ children, time }) {

    return (

        <div className="bot-message-wrapper">

            <div className="bot-avatar">
                🤖
            </div>

            <div className="bot-message">

                {children}

                <span className="message-time">
                    {time}
                </span>

            </div>

        </div>

    );

}

export default BotMessage;