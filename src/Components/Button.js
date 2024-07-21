function Button(props) {
    return (
        <button className="yellow-button" onClick={props.onClick}>{props.buttonText}</button>
    );
}

export default Button;