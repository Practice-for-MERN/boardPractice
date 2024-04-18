import styled from "styled-components";
import PostList from "./postList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PostRight = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    interface Post {
        id: number;
        title: string;
        fileURL: string;
    }
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('userToken');
                const response = await axios.get("http://localhost:49152/api/posts", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PostListBox>
            {posts.map((post) => (
                <PostList key={post.id} postId={post.id} postTitle={post.title} fileURL={post.fileURL} />
            ))}
        </PostListBox>
    );
};
export default PostRight;

const PostListBox = styled.div`
    width: 57vw;
    background-color: #f4f4f4;
    margin: 20px;
`;
