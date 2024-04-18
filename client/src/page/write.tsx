import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LogoImg from "../components/common/logoImg";
import PostTitle from "../components/post/postTitle";
import WriteBox from "../components/write/writeBox";

const Write = () => {
    const { postId } = useParams(); // postId 가져오기
    const [initialData, setInitialData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("postId:", postId); // postId 출력
        if (postId) {
            const fetchPostData = async () => {
                try {
                    const userToken = localStorage.getItem('userToken');
                    const response = await axios.get(`http://localhost:49152/api/posts/${postId}`, {
                        headers: {
                            Authorization: `Bearer ${userToken}`
                        }
                    });
                    if (response.data) {
                        setInitialData(response.data);
                        console.log('Post data for edit:', response.data);
                    } else {
                        console.error('리턴되는 데이터가 없습니다.');
                    }
                } catch (error) {
                    console.error('Error fetching post for edit:', error);
                }
                setIsLoading(false);  // 데이터 로딩 완료
            };
            fetchPostData();
        } else {
            setIsLoading(false);  // postId가 없으면 데이터 로딩 완료 처리
        }
    }, [postId]);
    

    if (isLoading) {
        return <div>Loading...</div>;  // 로딩 중 UI 표시
    }

    return (
        <>
            <div className="write-frame">
                <LogoImg />
                <PostTitle mainText="W R I T E" subText={postId ? "글 수정" : "글 작성"} />
                <WriteBox postId={postId} initialData={initialData} />
            </div>
        </>
    );
};

export default Write;
