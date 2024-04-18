import downArrow from "../../img/downArrow.png";
import upArrow from "../../img/upArrow.png";
import "../../style/common/scrollArrow.scss"

const ScrollArrow = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="postSidebar-arrow">
                <img src={upArrow} alt="up" onClick={scrollTop} />
                <img src={downArrow} alt="down" onClick={scrollBottom} />
            </div>
        </>
    )
}
export default ScrollArrow