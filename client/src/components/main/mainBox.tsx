import mainLogo from "../../img/main_myun.png"
import "../../style/main/mainBox.scss"

const MainBox = () => {
    return (
        <>
            <div className="mainBox-wrapper">
                <div className="mainBox-logoWrapper">
                    <img src={mainLogo} alt="" />
                </div>
                <div className="mainBox-btnWrapper">
                    <a href="/login">
                        <button>L O G I N</button>
                    </a>
                </div>
                <div className="mainBox-btnWrapper">
                    <a href="/signup">
                        <button>S I G N - U P</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default MainBox