import "../../style/write/writeTitle.scss"

const WriteTitle = ({onTitleChange}: {onTitleChange: (title: string) => void}) => {
    return (
        <>
            <div className="write-title-box">
                <input type="text"
                    placeholder="제목을 입력하세요."
                    onChange={(e) => onTitleChange(e.target.value)}        
                />
            </div>
        </>
    )
}
export default WriteTitle