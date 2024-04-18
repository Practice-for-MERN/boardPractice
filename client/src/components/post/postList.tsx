// import PostImgImg from "../../img/misaemococo.png"
import { Link } from "react-router-dom";
import "../../style/post/postList.scss"

interface postListProps {
    postTitle: string;
    fileURL: string;
    postId: Number;
}

const PostList:React.FC<postListProps> = ({postId, postTitle, fileURL}) => {
    return (
        <>
            <Link to={`/postdetail/${postId}`}>
                <div className="postList-box">
                    <div className="postList-text">
                        <h2>{`${postId}. ${postTitle}`}</h2>
                    </div>
                    <div className="postList-img-box">
                        <img src={fileURL} alt="" />
                    </div>
                </div>
            </Link>
        </>
    )
}
export default PostList