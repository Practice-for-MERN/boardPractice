import React from "react";
import "../../style/comment/commentBox.scss";
import { AppComment } from "./AppCommentInterface";


interface CommentsProps {
    comments: AppComment[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}


const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const Comments = ({ comments, onDelete, onEdit }: CommentsProps) => {
    return (
        <div className="commentbox-comments">
            {comments.map(comment => (
                <div className="commentbox-comment" key={comment.id}>
                    <div className="commentbox-header">
                        <h3 className="commentbox-nickname">{comment.userNickname}</h3>
                        <span className="commentbox-date">{formatDate(comment.date)}</span>
                    </div>
                    <div className="commentbox-content">
                        <p>{comment.content}</p>
                        <div className="commentbox-actions">
                            <button className="commentbox-btn-edit" onClick={() => onEdit(comment.id)}>수정</button>
                            <button className="commentbox-btn-delete" onClick={() => onDelete(comment.id)}>삭제</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
