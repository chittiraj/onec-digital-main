import "./MessageButton.css";

function MessageButton({
    icon,
    text,
    onClick,
    href,
    type = "button"
}) {

    if (href) {

        return (

            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="message-button"
            >

                <span className="message-button-icon">
                    {icon}
                </span>

                <span>
                    {text}
                </span>

            </a>

        );

    }

    return (

        <button
            type={type}
            className="message-button"
            onClick={onClick}
        >

            <span className="message-button-icon">
                {icon}
            </span>

            <span>
                {text}
            </span>

        </button>

    );

}

export default MessageButton;