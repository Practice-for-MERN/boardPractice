import styled from "styled-components"

interface BtnProps {
    type: "button" | "submit";
    color: string;
    fontcolor: string;
    btnText: string;
}

const Btn:React.FC<BtnProps> = ({type, color, fontcolor, btnText}) => {
    return (
        <>
            <BtnBox>
                <BtnBtn type={type} color={color} fontcolor={fontcolor}>{btnText}</BtnBtn>
            </BtnBox>
        </>
    )
}
export default Btn

const BtnBox = styled.div`
    width: 400px;
    margin: 0 auto;
`

const BtnBtn = styled.button<{color: string; fontcolor: string}>`
    width: 100%;
    margin-bottom: 10px;
    padding: 15px 0;
    background-color: ${(props) => props.color};
    cursor: pointer;
    color: ${(props) => props.fontcolor};
    border: 1px solid black;
`