import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"
import PostDetailCategory from "./postDetailCategory"
import PostDetailTitle from "./postDetailTitle"
import PostDetailContent from "./postDetailContent"
import PostDetailSidebar from "./postDetailSidebar"
import CommentBox from '../comment/commentBox';

const PostDetailBox = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({ title: '', content: '', category: '', fileURL: '', nickname: '', updateDate: ''});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!postId) {
            console.error('postId가 없습니다.');
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const userToken = localStorage.getItem('userToken');
                const postResponse = await axios.get(`http://localhost:49152/api/posts/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });
                setPost(postResponse.data);
                setLoading(false);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response && error.response.status === 404) {
                        console.error('게시글을 찾을 수 없습니다.');
                    } else {
                        console.error('게시글을 fetch할 수 없습니다.', error);
                    }
                } else {
                    console.error('알 수 없는 에러:', error);
                }
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    if (isLoading) {
        return <div>Loading post with ID: {postId}...</div>;
    }

    return (
        <>
            <PostDetailBoxWrapper>
                <PostDetailBoxHeader>
                    <PostDetailCategory category={post.category} />
                    <PostDateAndNick>{post.nickname} | {post.updateDate}</PostDateAndNick>
                </PostDetailBoxHeader>
                <PostDetailTitle title={post.title} />
                {post.fileURL && (
                    <WriteImgBox>
                        <div>
                            <img src={post.fileURL} alt="" style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </WriteImgBox>
                )}
                <PostDetailContent content={post.content} />
                <CommentBox />
                {postId && <PostDetailSidebar postId={postId} />}
            </PostDetailBoxWrapper>
        </>
    );
};


export default PostDetailBox;

const PostDetailBoxWrapper = styled.div`
    width: 50vw;
    margin: 10px 0 0 50px;
`;

const PostDetailBoxHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const PostDateAndNick = styled.span`
    align-item: center;
    font-size: 18px;
    line-height: 4;
    margin-right: 10px;
    color: gray;
`

const WriteImgBox = styled.div`
    width: 100%;
`;