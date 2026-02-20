import "./card.css";

const Card = ({ children, style, className, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <article
            className={`card ${className}`}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {children}
        </article>
    );
};

export default Card;
