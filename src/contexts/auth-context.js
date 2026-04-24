import { createContext } from 'react';

export const guestUser = { name: 'Guest User', role: 'Tài khoản khách' };
export const AuthContext = createContext();

export function getInitialUser() {
    try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : guestUser;
    } catch {
        return guestUser;
    }
}
