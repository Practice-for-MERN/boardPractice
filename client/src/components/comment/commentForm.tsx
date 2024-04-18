import { useState } from "react";
import axios from "axios";

interface CommentFormProps {
    postId: string;
    userToken: string;
}

const CommentForm = ({ postId, userToken }: CommentFormProps) => {
    const [comment, setComment] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            await axios.post(
                `http://localhost:49152/api/posts/${postId}/comments`,
                { comment },
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            );
            setComment("");
        } catch (error) {
            console.error("댓글 전송 실패:", error);
        }
    };
    
    const commentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="commentbox-form">
                <h3>댓글 달기</h3>
                <div className="commentbox-input">
                    <input type="text" placeholder="댓글을 입력하세요." value={comment} onChange={commentInputChange} />
                    <button type="submit">COMMENT</button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;
