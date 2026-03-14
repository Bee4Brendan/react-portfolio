import { useState } from "react";
import Card from "./Card";
import SkillBar from "./SkillBar";

const SkillCard = ({ item }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Card
            className="skills__card"
            title={item.description}
            style={{ "--skill-level": `${item.level}%` }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img className="skills__card-icon" src={item.image} alt={item.title + " logo"} />
            <h5>{item.title}</h5>
            <p>{item.years > 1 ? `${item.years} years` : `${item.years} year`}</p>
            <br />
            <SkillBar level={item.level} isHovered={hovered} />
        </Card>
    );
};

export default SkillCard;