import styled from "styled-components"
import PostDetailSidebar from "./postDetailSidebar"
import PostDetailBox from "./postDetailBox"
import PostLeft from "../post/postLeft"
import { useParams } from 'react-router-dom';

const PostDetailWrapper = () => {
    const { postId } = useParams();
    
    return (
        <>
            <PostWrapperBox>
                <PostLeft />
                <PostDetailBox />
                {postId && <PostDetailSidebar postId={postId} />}
            </PostWrapperBox>
        </>
    )
}
export default PostDetailWrapper

const PostWrapperBox = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
`