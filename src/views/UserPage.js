import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import GoBackButton from '../components/GoBackButton/GoBackButton';

export default function UserPage() {
    const { userId } = useParams();
    const [user, setUser] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                const users = res.data;
                const user = users.find(item => item.id === Number(userId));
                setUser(user)
            })
            .catch((err) => console.log(err));
    }, [userId]);

    return (
        <>
            {!user && <h2>Loading...</h2>}
            { user && (
                <div className="User">
                    <GoBackButton location={location}/>
                    <h2>Name: {user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address:</p>
                    <p>street: {user?.address?.street}</p>
                    <p>suite: {user?.address?.suite}</p>
                    <p>city: {user?.address?.city}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            )}
        </>
    );
};