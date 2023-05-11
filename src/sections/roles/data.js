import {BsAndroid2} from 'react-icons/bs'
import {SiXaml} from 'react-icons/si'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'


const data = [
    {
        id: 1, icon: <AiFillAppstore/>, title: 'Desktop Software', desc: "Long Wave Inc. - Developed a flight simulator for training Boeing E-6B Mercury pilots. This was for Windows, in C# .NET."
    },
    {
        id: 2, icon: <SiXaml/>, title: 'Frontend Development', desc: "UCO + Long Wave Inc. - Designed and recreated frontend for Android applications and WPF in XAML. This website was designed by me as well!"
    },
    {
        id: 3, icon: <FaServer/>, title: 'Backend Development', desc: "UCO + Long Wave Inc. + Tinker AFB - Implemented logic for every application participated in. Created databases in SQL for class. Used a lot of C++, C#, and Java."
    },
    {
        id: 4, icon: <BsAndroid2/>, title: 'Mobile App Development', desc: 'UCO - Designed many Java aplications for Android, including a dungeon crawler and Doodle Jump recreation. Demos can be found in a playlist on my YouTube channel.'
    }
]


export default data