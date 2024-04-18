import React, { useState, useEffect } from 'react';
import axios from 'axios';
import postProfileImg from "../../img/mr_rbtree.svg";
import "../../style/post/postProfile.scss";

const PostProfile = () => {
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userIdFromStorage = localStorage.getItem('userId');
                const userToken = localStorage.getItem('userToken');
                if (userIdFromStorage && userToken) {
                    const response = await axios.get(`http://localhost:49152/api/users/${userIdFromStorage}`, {
                        headers: {
                            Authorization: `Bearer ${userToken}`
                        }
                    });
                    setNickname(response.data.nickname);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    
        fetchUserData();
    }, []);

    return (
        <div className="profile-box">
            <div className="profile-img-box">
                <img className="profile-img" src={postProfileImg} alt="profile image" />
            </div>
            <h2 className="profile-nickname">{nickname}</h2>
        </div>
    );
}

export default PostProfile;
