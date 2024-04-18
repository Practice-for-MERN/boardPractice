import { useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/comment/commentBox.scss";
import CommentForm from "./commentForm";
import Comments from "./comments";
import { AppComment } from "./AppCommentInterface";

const CommentBox = () => {
    const { postId } = useParams<{ postId?: string }>();
    const [comments, setComments] = useState<AppComment[]>([]); // 여기를 AppComment로 변경
    const userToken = localStorage.getItem('userToken');

    if (postId === undefined) {
        return <div>포스트 ID가 없습니다.</div>;
    }

    if (userToken === null) {
        return <div>로그인이 필요합니다.</div>;
    }

    const handleDelete = (commentId: number) => {
        console.log(`Deleting comment with ID: ${commentId}`);
    };

    const handleEdit = (commentId: number) => {
        console.log(`Editing comment with ID: ${commentId}`);
    };

    return (
        <>
            <div className="commentbox-wrapper">
                <CommentForm postId={postId} userToken={userToken} />
                <Comments comments={comments} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        </>
    );
};

export default CommentBox;
