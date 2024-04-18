import styled from "styled-components"
import Regmsg from "../common/regmsg";

interface InputProps {
    type: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    msg: string
}

const SignupInput:React.FC<InputProps> = ({ type, placeholder, value, onChange, title, msg }) => {
    return (
        <>
            <SignupInputBox>
                <SignupInputTitle>{title}</SignupInputTitle>
                <SignInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
                <Regmsg msg={msg} />
            </SignupInputBox>
        </>
    )
}
export default SignupInput

const SignupInputBox = styled.div`
    width: 400px;
    margin: 30px auto;
`
const SignupInputTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
`

const SignInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid #ECECEC;
    padding: 10px 0;
    font-size: 16px;
    
    &:focus {
        outline: none;
    }
`