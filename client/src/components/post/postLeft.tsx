import styled from "styled-components"
import PostCategory from "./postCategory"
import PostProfile from "./postProfile"

const PostLeft = () => {
    return (
        <>
            <PostLeftBox>
                <PostProfile />
                <PostCategory />
            </PostLeftBox>
        </>
    )
}
export default PostLeft

const PostLeftBox = styled.div`
    width: 230px;
`