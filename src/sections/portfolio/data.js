import Image1 from '../../assets/project1.jpg'
import Image2 from '../../assets/project2.jpg'
import Image3 from '../../assets/project3.jpg'
import Image4 from '../../assets/project4.jpg'
import Image5 from '../../assets/project5.jpg'
import Image6 from '../../assets/project6.jpg'
import Image7 from '../../assets/project7.jpg'

const data = [
    {
        id: 1,
        category: 'Android Game',
        image: Image1,
        title: "Dungeon Crawler",
        desc: "Mobile Android dungeon crawler game. For this game, I designed the inventory system, the items, and the GUI for the character. This includes frontend and implentation.",
        demo: 'https://youtu.be/Mazv3WOq-7c?list=PL-HMEiZRDW4Vm1grUyyJMs4uJvPVDgihv&t=782',
        github: 'https://github.com/bee4brendan'
    },
    {
        id: 3,
        category: 'Android Utility',
        image: Image3,
        title: "Contacts App",
        desc: "This is a Contacts app created for Android. It can launch emails and deliver notifications to direct the user to UCO department websites as well as store important user information.",
        demo: 'https://youtu.be/mmzWqgDsBnk',
        github: 'https://github.com/bee4brendan'
    },
    {
        id: 2,
        category: 'Android Game',
        image: Image2,
        title: "Cannot Stop",
        desc: "Android Mobile Application designed to play like the Doodle Jump game. I designed the Highscores + Main section as well as implementing the logic for gyroscope and accelerometer sensors.",
        demo: 'https://youtu.be/aJlRW58MZUw?t=136',
        github: 'https://github.com/bee4brendan'
    },
    {
        id: 4,
        category: 'Android Utility',
        image: Image4,
        title: "Weather App",
        desc: "This Android Mobile Application allows the user to search for different cities to see the current weather for the area. There are also buttons to launch a map of the city!",
        demo: 'https://youtu.be/K3CiABLm3As',
        github: 'https://github.com/bee4brendan'
    },
    {
        id: 5,
        category: 'Android Game',
        image: Image5,
        title: "Baseball Number Game",
        desc: "This is an interesting game called Baseball, where the user is supposed to guess the numbers in the given 'Key'. A ball is where you guess the correct number in the wrong location. A strike is guessing the correct number in the correct location. Kind of like Wordle with numbers!",
        demo: 'https://youtu.be/fLsn16twFJw',
        github: 'https://github.com/bee4brendan'
    },
    {
        id: 6,
        category: 'Website',
        image: Image6,
        title: "Website Portfolio",
        desc: "This is a website portfolio built from the ground up, showcasing my personal and professional achievements in Computer Science.",
        demo: 'https://youtu.be/aCnGlp8CtFM',
        github: 'https://github.com/Bee4Brendan/react-portfolio'
    },
    {
        id: 7,
        category: 'Robotics',
        image: Image7,
        title: "Lego Robot",
        desc: "This is a robot that we programmed to follow certain directions. One of my parts was basically programming a Roomba before Roombas.",
        demo: 'https://youtu.be/tjNV6xjEO6g?t=58',
        github: 'https://github.com/Bee4Brendan/'
    }
]


export default data