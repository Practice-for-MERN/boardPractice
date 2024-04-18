import "../../style/post/postTitle.scss"

const PostTitle:React.FC<{mainText: string; subText: string}> = ({mainText, subText}) => {
    return (
        <>
            <div className="post-title-box">
                <h1 className="post-title-main">{mainText}</h1>
                <p className="post-title-sub">{subText}</p>
            </div>
        </>
    )
}
export default PostTitle