import React, { useState } from 'react';
import "../../style/common/dropdown.scss"

const Dropdown = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        onCategoryChange(e.target.value);
    };

    return (
        <div className='dropdown-box'>
            <label htmlFor="category"></label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">카테고리를 선택하세요</option>
                <option value="크래프톤정글">크래프톤 정글</option>
                <option value="프론트엔드">프론트 엔드</option>
                <option value="백엔드">백 엔드</option>
                <option value="MYUN">MYUN</option>
            </select>
        </div>
    );
};

export default Dropdown;
