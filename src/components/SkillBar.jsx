import { useState, useEffect } from "react";

const SkillBar = ({ level, isHovered }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (!isHovered) {
            setPercent(0); // reset when not hovered
            return;
        }

        let start = 0;
        const duration = 1500; // 1.5 seconds
        const stepTime = 15; // ms per update
        const step = (level / duration) * stepTime;

        const timer = setInterval(() => {
            start += step;
            if (start >= level) {
                start = level;
                clearInterval(timer);
            }
            setPercent(Math.round(start));
        }, stepTime);

        return () => clearInterval(timer);
    }, [isHovered, level]);

    return (
        <div className="skills__bar">
            <div
                className="skills__fill"
                style={{
                    width: `${percent}%`,
                    transition: isHovered ? "width 0.1s linear" : "width 0.5s ease-in-out",
                }}></div>
            <span className="skills__percent">{percent}%</span>
        </div>
    );
};

export default SkillBar;
