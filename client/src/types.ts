export interface User {
    id: number;
    email: string;
    nickname: string;
}

export interface RootState {
    user: User;
}
