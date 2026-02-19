import data from "./data";
import Card from "../../components/Card";
import "./skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <p>Here are some of the technologies and tools I have experience with. I'm always learning and expanding my skillset!</p>
            <div className="container skills__container">
                <div className="skills__cards">
                    {data.map((item) => (
                        <Card key={item.id} className="skills__card">
                            <span className="skills__card-icon">{item.icon}</span>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
