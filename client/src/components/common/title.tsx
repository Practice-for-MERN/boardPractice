import "../../style/common/title.scss"

const Title:React.FC<{mainText: string; subText: string}> = ({mainText, subText}) => {
    return (
        <>
            <div className="title-box">
                <h1 className="title-main">{mainText}</h1>
                <p className="title-sub">{subText}</p>
            </div>
        </>
    )
}
export default Title