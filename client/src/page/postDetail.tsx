import LogoImg from "../components/common/logoImg"
import PostTitle from "../components/post/postTitle"
import PostDetailWrapper from "../components/postdetail/postDetailWrapper"

const PostDetail = () => {
    return (
        <>
            <LogoImg />
            <PostTitle mainText="D E T A I L" subText="게시글" />
            <PostDetailWrapper />
        </>
    )
}
export default PostDetail