import "./card.css";

const Card = ({ children, title, style, className, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <article
            className={`card ${className}`}
            title={title}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {children}
        </article>
    );
};

export default Card;
