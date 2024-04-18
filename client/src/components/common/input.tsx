import React from "react";
import styled from "styled-components";


interface InputProps {
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <>
            <InputBox>
                <InputMain
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </InputBox>
        </>
    )
}
export default Input;

const InputBox = styled.div`
    width: 400px;
    margin: 30px auto;
`

const InputMain = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid #ECECEC;
    padding: 10px 0;
    font-size: 16px;
    
    &:focus {
        outline: none;
    }
`