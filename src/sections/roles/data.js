import {BsAndroid2} from 'react-icons/bs'
import {SiXaml} from 'react-icons/si'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'


const data = [
    {
        id: 1, icon: <AiFillAppstore/>, title: 'Application Development', desc: "Long Wave Inc. + Tinker AFB - Developed a flight simulator for training Boeing E-6B Mercury pilots. This was for Windows, in C# .NET. & WPF. The simulator included an entire Operating System GUI imitation. Worked on Applications for Boeing E-3 Sentry with large code bases."
    },
    {
        id: 2, icon: <SiXaml/>, title: 'Front-end Development', desc: "UCO + Long Wave Inc. + Dudley - Designed and recreated frontend for Android applications and WPF in XAML. Created and updated components in ReactJS and TypeScript."
    },
    {
        id: 3, icon: <FaServer/>, title: 'Back-end Development', desc: "UCO + Long Wave Inc. + Tinker AFB + Dudley - Implemented logic for every application participated in. Created databases in SQL for class. Used a lot of C++, C# (Entity Framework), and Java."
    },
    {
        id: 4, icon: <BsAndroid2/>, title: 'Mobile App Development', desc: 'UCO + Side Projects - Designed many Java applications for Android, including a dungeon crawler and Doodle Jump recreation.'
    }
]


export default data