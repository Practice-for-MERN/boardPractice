import styled from "styled-components"

const Regmsg:React.FC<{msg: string;}> = ({msg}) => {
    return (
        <>
            <RegMsg>{msg}</RegMsg>
        </>
    )
}
export default Regmsg

const RegMsg = styled.p`
    font-size: 12px;
    margin-top: 5px;
`