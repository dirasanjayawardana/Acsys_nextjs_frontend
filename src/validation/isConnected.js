"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Loading from '@/app/loading';

export const IsConnected = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

        if (token) {
            // const decodedToken = jwt_decode(token);
            // const currentDate = Date.now() / 1000;

            // if (decodedToken.exp < currentDate || !decodedToken.isConnected) {
            //     router.push('/login');
            // } else {
            //     axios.defaults.headers.common['Authorization'] = token;
            //     dispatch(updateUser(decodedToken));
            // }
        } else {
            router.push('/login');
        }

        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);


    if (loading) {
        return <Loading />
    } else {
        return children
    }
}
