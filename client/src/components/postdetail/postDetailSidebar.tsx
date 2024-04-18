import axios from 'axios';
import "../../style/postDetail/postDetailSidebar.scss";
import modify from "../../img/modify.png";
import trash from "../../img/trash.png";
import ScrollArrow from '../common/scrollArrow';
import { useNavigate } from 'react-router-dom';

interface PostDetailSidebarProps {
    postId: string;
}

const PostDetailSidebar = ({ postId }: PostDetailSidebarProps) => {
    const navigate = useNavigate();

    const deletePost = async () => {
        try {
            const userToken = localStorage.getItem('userToken');
            await axios.delete(`http://localhost:49152/api/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            alert('게시글이 삭제되었습니다.');
            navigate('/post');
        } catch (error) {
            console.error('게시글 삭제 실패:', error);
            alert('게시글 삭제에 실패했습니다.');
        }
    };

    const modifyPost = () => {
        navigate(`/write/${postId}`);
    };

    return (
        <>
            <div className="writeSidebar-box">
                <div className="writeSidebar-inner">
                    <p className="writeSidebar-inner-nickname">Navigator</p>
                    <div className="writeSidebar-icon">
                        <div onClick={modifyPost}>
                            <img src={modify} alt="Modify" />
                            <p>modify</p>
                        </div>
                        <div onClick={deletePost}>
                            <img src={trash} alt="Delete" />
                            <p>delete</p>
                        </div>
                    </div>
                    <ScrollArrow />
                </div>
            </div>
        </>
    );
};


export default PostDetailSidebar;
