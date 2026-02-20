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
                    <p>
                        In my decade long career as a Computer Scientist, I have accumulated experience with .NET, Android, Azure,
                        Bash, C, CSS, C#, C++, Eclipse, Git, Github, HTML, Java, JavaScript, Jira, Packer, PHP, ReactJS, SQL, TFS,
                        TypeScript, Visual Studio, WPF, XML, XAML & More...
                    </p>
                    <br />
                    <p>
                        I have designed, developed, and tested code for the Boeing E-3 Sentry <strong>AWACS</strong> as well as flight
                        simulations for the Boeing E-6B Mercury <strong>TACAMO</strong> in just a few, short years. There is no part of
                        the Software Development Life Cycle that I have not participated in.
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
