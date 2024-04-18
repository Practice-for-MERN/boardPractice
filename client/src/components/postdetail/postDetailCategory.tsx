import "../../style/postDetail/postDetailCategory.scss"

interface PostDetailCategoryProps {
    category: string;
}

const PostDetailCategory = ({ category }: PostDetailCategoryProps) => {
    return (
        <>
            <div className="detail-category">
                <p>{category}</p>
            </div>
        </>
    )
}
export default PostDetailCategory