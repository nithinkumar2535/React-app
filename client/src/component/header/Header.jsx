import AdminHeader from './AdminHeader';
import UserHeader from './UserHeader';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const [admin, setAdmin] = useState();
    const [isLoggedIn, setisLoggedIn] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/', { withCredentials: true })
            .then((result) => {
                if (result.data.valid) {
                    console.log(result.data);
                    setAdmin(result.data.admin);
                    setisLoggedIn(true);
                } else {
                    navigate('/login');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [navigate]);

    return (
        <div>
            {admin ? (<AdminHeader isLoggedIn={isLoggedIn} />) : (<UserHeader isLoggedIn={isLoggedIn} />)}
        </div>
    );
}

export default Header;
