import { useRef } from "react"
import "../../style/write/writeContent.scss"


const WriteContent = ({onContentChange}: {onContentChange: (content: string) => void}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = (e:any) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        onContentChange(e.target.value);
    };

    return (
        <>
            <div className="write-content-box">
                <textarea className="write-content-input"
                    ref={textareaRef}
                    rows={11}
                    placeholder="내용을 입력하세요."
                    onChange={handleResizeHeight}
                >
                </textarea>
            </div>
        </>
    )
}
export default WriteContent
