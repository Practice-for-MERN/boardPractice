import "../../style/postDetail/postDetailContent.scss"

interface PostDetailContentProps {
    content: string;
}

const PostDetailContent = ({ content }: PostDetailContentProps) => {
    return (
        <>
            <div className="detail-content-box">
                <div>{content}</div>
            </div>
        </>
    );
};
export default PostDetailContent;
