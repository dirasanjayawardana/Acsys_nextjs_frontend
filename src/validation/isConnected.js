"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

export const IsConnected = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('ACSYS-TOKEN='))?.split('=')[1];
        
        if (token) {
            // const currentDate = Date.now() / 1000;

            // if (user.tokenExpiredAt < currentDate || user.status!=process.env.NEXT_PUBLIC_ACSYS_STATUS) {
            //     router.push('/login');
            // } else {
            //     axios.defaults.headers.common['X-API-TOKEN'] = token;
            // }
            axios.defaults.headers.common['X-API-TOKEN'] = token;
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
