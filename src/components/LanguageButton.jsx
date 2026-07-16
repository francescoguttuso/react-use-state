export const LanguageButton = (props) => {
    return (
        <button
            className={props.isActive ? "btn active" : "btn"}
            onClick={props.onClickEvent}
        >
            {props.title}
        </button>
    );
};