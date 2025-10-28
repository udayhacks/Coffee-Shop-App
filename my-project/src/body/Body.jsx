import bgImage from '../assets/bg-cafe-lg.jpg';
import style from './Body.module.css';

export default function Body() {
    return (
        <div className="relative w-full h-screen">
            <img
                src={bgImage}
                alt="background"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex items-center justify-center h-full">
            </div>
        </div>
    );
}
