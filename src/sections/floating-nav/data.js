import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FaReact } from "react-icons/fa";

const data = [
    { id: 1, link: "#", icon: <AiFillHome /> },
    { id: 2, link: "#about", icon: <BsPersonFill /> },
    { id: 3, link: "#skills", icon: <FaReact /> },
    { id: 4, link: "#roles", icon: <MdHomeRepairService /> },
    { id: 5, link: "#projects", icon: <AiFillAppstore /> },
    { id: 6, link: "#photography", icon: <MdOutlinePhotoSizeSelectActual /> },
    { id: 7, link: "#contact", icon: <AiFillMessage /> },
];

export default data;
