import './ScrollToTopButton.css';
import { BsArrowUp } from 'react-icons/bs';

export default function ScrollToTopButton() {
    const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <button className="scroll-to-top-button" onClick={handleScrollToTop} aria-label="Scroll to top">
        <BsArrowUp size={20} />
    </button>
    )
}