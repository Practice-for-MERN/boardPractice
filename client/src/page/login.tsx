import Btn from "../components/common/btn";
import Input from "../components/common/input";
import LogoImg from "../components/common/logoImg";
import Title from "../components/common/title";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email || !pw) {
            alert('이메일과 비밀번호를 모두 입력해주세요.');
            return;
        }
        setIsLoading(true);

        const formData = {
            email,
            pw
        };

        try {
            const response = await axios.post('http://localhost:5000/user/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // localStorage.setItem('userToken', response.data.token); // 로그인 성공 시 토큰 저장
            // localStorage.setItem('userId', response.data.userId); // 사용자 ID 저장
            alert('로그인에 성공하였습니다.');
            navigate('/post'); // navigate 사용 시 사용자 ID를 파라미터로 전달할 수도 있음
        } catch (error) {
            setIsLoading(false);
            if (axios.isAxiosError(error) && error.response) {
                const message = error.response.data?.message || '없는 계정이거나 비밀번호가 틀렸습니다. 다시 시도해주세요.';
                alert(message);
            } else {
                alert('네트워크 오류가 발생했습니다.');
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <LogoImg />
                <Title mainText="L O G I N" subText="로그인" />
                <Input
                    type="email"
                    placeholder="이메일 아이디"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <Btn type="submit" color="black" fontcolor="white" btnText={isLoading ? "로그인 중..." : "LOGIN"} />
            </form>
            <a href="/signup">
                <Btn type="button" color="white" fontcolor="black" btnText="SIGNUP" />
            </a>
        </>
    );
};

export default Login;
