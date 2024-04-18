import React, { useRef } from 'react';
import "../../style/write/writeSidebar.scss";
import pen from "../../img/pen.png";
import file from "../../img/file.png";
import ScrollArrow from '../common/scrollArrow';


const WriteSidebar = ({
    onFileSelect,
    onSubmit
}: {
    onFileSelect: (data: {url: string}) => void;
    onSubmit: () => void;
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            const fileURL = URL.createObjectURL(file);

            onFileSelect({url:fileURL});
            console.log(fileURL);
        }
    };



    return (
        <>
            <div className="writeSidebar-box">
                <div className="writeSidebar-inner">
                    <p className="writeSidebar-inner-nickname">Navigator</p>
                    <div className="writeSidebar-icon">
                        <div onClick={onSubmit}>
                            <img src={pen} alt="" />
                            <p>complete</p>
                        </div>
                        <div onClick={handleFileInputClick}>
                            <img src={file} alt="" />
                            <p>addfile</p>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <ScrollArrow />
                </div>
            </div>
        </>
    );
};

export default WriteSidebar;
