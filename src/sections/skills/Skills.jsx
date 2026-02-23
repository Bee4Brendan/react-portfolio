import data from "./data";
import "./skills.css";
import SkillCard from "../../components/SkillCard";

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <p>Frontend artistry powered by modern engineering. These are my tools of choice and this is how my skills "stack" up.</p>
            <div className="container skills__container" data-aos="fade-up">
                <div className="skills__left" data-aos="fade-right" data-aos-duration="1200">
                    <div className="skills__cards">
                        {data.map((item) => (
                            <SkillCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="skills__right" data-aos="fade-left" data-aos-duration="1200">
                    <br />
                    <p>
                        My strengths lie in my visual-spatial abilities. They allow me to visualize different solutions to a problem
                        and to create intuitive, user-friendly interfaces. I know what looks good, while taking the user's experience
                        into account. From the logic to the aesthetics; from the front-end to the back-end; from the UI to the
                        database; I have experience in all areas of software development. Front-End is where I thrive and where I want
                        to focus my career.
                    </p>
                    <br />
                    <p>
                        In my decade long career as a Computer Scientist, I have accumulated experience with .NET, Android, Azure,
                        Bash, C, CSS, C#, C++, Eclipse, Git, Github, HTML, Java, JavaScript, Jira, Packer, PHP, ReactJS, SQL, TFS,
                        TypeScript, Visual Studio, WPF, XML, XAML & More...
                    </p>
                    <br />
                    <p>
                        I have designed, developed, and tested code for the Boeing E-3 Sentry <strong>AWACS</strong> as well as flight
                        simulations for the Boeing E-6B Mercury <strong>TACAMO</strong>
                    </p>
                </div>
            </div>
            <div className="ticker-wrap">
                <div className="ticker">
                    <p>
                        In my decade long career as a Computer Scientist, I have accumulated experience with .NET, Android, Azure,
                        Bash, C, CSS, C#, C++, Eclipse, Git, Github, HTML, Java, JavaScript, Jira, Packer, PHP, ReactJS, SQL, TFS,
                        TypeScript, Visual Studio, WPF, XML, XAML & More...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
