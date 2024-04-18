import "../../style/postDetail/postDetailTitle.scss";

interface PostDetailTitleProps {
    title: string;
}

const PostDetailTitle = ({ title }: PostDetailTitleProps) => {
    return (
        <>
            <div className="detail-title-box">
                <div>{title}</div>
            </div>
        </>
    );
};
export default PostDetailTitle;
