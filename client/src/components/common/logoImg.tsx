import "../../style/common/logoImg.scss"
import LogoImgImg from "../../img/myun_logo.svg"

const LogoImg:React.FC<{}> = () => {
    return (
        <>
            <div className="logo-img-box">
                <a href="/post">
                    <img src={LogoImgImg} alt="" />
                </a>
            </div>
        </>
    )
}
export default LogoImg