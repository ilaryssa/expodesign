import './BackButton.css';
import { BsArrowLeft } from 'react-icons/bs';

export default function BackButton() {
    return (
        <>
            <button className='back-button' onClick={() => window.history.back()}><BsArrowLeft size={24}/></button>
        </>
    )
}