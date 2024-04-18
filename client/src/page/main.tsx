import Earth from "../components/main/earth"
import Jupiter from "../components/main/jupiter"
import MainBox from "../components/main/mainBox"
import Moon from "../components/main/moon"
import Sun from "../components/main/sun"
import "../style/main/main.scss"

const Main = () => {
    return (
        <>
            <MainBox />
            <Earth />
            <Sun />
            <Jupiter />
            <Moon />
        </>
    )
}
export default Main