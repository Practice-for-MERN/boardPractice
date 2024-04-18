import "../../style/post/postCategory.scss"
import { Link, useLocation, useNavigate  } from "react-router-dom";
import React, { useState } from 'react';

const PostCategory = () => {
    // const location = useLocation();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("/post");

    const categories = {
        "/post": "전체 게시글",
        "/post/크래프톤정글": "크래프톤정글",
        "/post/프론트엔드": "프론트엔드",
        "/post/백엔드": "백엔드",
        "/post/TIL": "TIL",
        "/post/pintOS": "pintOS"
    };

    const handleRadioChange = (event:any) => {
        setSelectedCategory(event.target.value);
        navigate(event.target.value); // 선택된 카테고리로 라우팅
    };

    // const isActive = (path:any) => {
    //     if (location.pathname === path) {
    //         return true;
    //     }
    //     return false;
    // };

    return (
        <>
            <div className="post-category-box">
                <p className="post-category-title">카테고리</p>
                {/* <ul className="post-category-list">
                    {Object.entries(categories).map(([path, name]) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={isActive(path) ? 'active' : ''}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul> */}
                {Object.entries(categories).map(([path, name]) => (
                <div className="post-category-list" key={path}>
                    <input
                        type="radio"
                        id={path}
                        name="postCategory"
                        value={path}
                        checked={selectedCategory === path}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor={path}>{name}</label>
                </div>
            ))}
            </div>
        </>
    )
}
export default PostCategory