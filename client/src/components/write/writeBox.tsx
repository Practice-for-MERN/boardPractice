import styled from "styled-components"
import Dropdown from "../common/dropdown"
import WriteTitle from "./writeTitle"
import WriteContent from "./writeContent"
import WriteSidebar from "./writeSidebar"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface WriteBoxProps {
    postId?: string;
    initialData?: any;
}

const WriteBox = ({ postId, initialData }: WriteBoxProps) => {
    const [fileURL, setFileURL] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate();
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
        if (initialData) {
            setFileURL(initialData.fileURL || "");
            setCategoryValue(initialData.category || "");
            setTitleValue(initialData.title || "");
            setContentValue(initialData.content || "");
            //setNickname(initialData.nickname || '');
        }
    }, [initialData]);
    const handleFileSelect = ({url}: {url:string}) => {
        setFileURL(url);
    };

    const deleteImg = () => {
        setFileURL("");
    }

    const handleSubmit = async () => {
        const postData = {
            fileURL: fileURL,
            category: categoryValue,
            title: titleValue,
            content: contentValue,
            userNickname: nickname,
        };
    
        try {
            const userToken = localStorage.getItem('userToken');
            let response;
            if (postId) {
                response = await axios.put(`http://localhost:49152/api/posts/${postId}`, postData, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });
                console.log('Update response:', response.data);
            } else {
                response = await axios.post(`http://localhost:49152/api/posts`, postData, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });
                console.log('Post response:', response.data);
            }
    
            if (response.data && response.data.id) {
                navigate(`/postdetail/${response.data.id}`);
            } else {
                console.error('포스트 ID를 찾을 수 없습니다.');
            }
        } catch (error) {
            console.error('전송 실패: ', error);
        }
    };

    return (
        <>
            <WriteBoxWrapper>
                <WriteBoxHeader>
                    <Dropdown onCategoryChange={(categoryValue) => {
                        setCategoryValue(categoryValue);
                    }} />
                </WriteBoxHeader>
                <WriteTitle onTitleChange={(titleValue) => {
                    setTitleValue(titleValue);
                }} />
                {fileURL && (
                    <WriteImgBox>
                        <div>
                            <img src={fileURL} alt="" style={{width: '100%', height: 'auto'}}/>
                        </div>
                        <WriteImgDelete onClick={deleteImg}>❌</WriteImgDelete>
                    </WriteImgBox>
                )}
                <WriteContent onContentChange={(contentValue) => {
                    setContentValue(contentValue);
                }} />
                <WriteSidebar onFileSelect={handleFileSelect} onSubmit={handleSubmit} />
            </WriteBoxWrapper>
        </>
    )
}
export default WriteBox

const WriteBoxWrapper = styled.div`
    width: 50%;
    margin: 20px auto;
`

const WriteBoxHeader = styled.div`
    position: relative;
`

const WriteImgBox = styled.div`
    position: relative;
`

const WriteImgDelete = styled.div`
    position: absolute;
    top: -3%;
    right: -3%;
    padding: 8px;
    border-radius: 50%;
    border: 3px solid #d9d9d9;
    background-color: white;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`