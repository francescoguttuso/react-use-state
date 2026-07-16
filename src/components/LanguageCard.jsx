export const LanguageCard = (props) => {
    return (
        <div className="card-details">
            <h2>{props.linguaggio.title}</h2>
            <p>{props.linguaggio.description}</p>
        </div>
    );
};