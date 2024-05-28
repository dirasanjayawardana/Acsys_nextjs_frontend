"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

export const IsConnected = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userid = document.cookie.split('; ').find(row => row.startsWith('ACSYS-USERID='))?.split('=')[1];
        
        if (userid) {
            
            const getUserInfo = async () => {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/users`,
                {
                    headers: {
                        'USER-ID': userid
                    }
                });
                if (response.data.data.status != 1) {
                    router.push("/login")
                }
            }

            getUserInfo();
            
            axios.defaults.headers.common['USER-ID'] = userid;
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
