import bgImage from '../assets/bg-cafe-lg.jpg';
import style from './Body.module.css';
import Display from "../Listing/Display.jsx";

export default function Body() {
    return (
        <div className={style.wrapper}>

            <div className={style.collection}>
                    <Display/>
            </div>


        </div>
    );
}
