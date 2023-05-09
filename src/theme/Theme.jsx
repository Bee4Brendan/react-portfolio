import Modal from "../components/Modal"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import BackgroundColor from './BackgroundColor';
import './theme.css'

const Theme = () => {
  return (
    <Modal className="theme__modal">
        <h5>Customize Your Theme</h5>
        <small>Choose primary and background color</small>
        <div className="theme__primary-wrapper">
            <h5>Primary Colors</h5>
            <div className="theme__primary-colors">
                {
                    primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                }
            </div>
        </div>
        <div className="theme__background-wrapper">
            <h5>Light Mode / Dark Mode</h5>
            <div className="theme__background-colors">
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme