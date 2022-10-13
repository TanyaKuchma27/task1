import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import GoBackButton from '../components/GoBackButton/GoBackButton';
import { useUser } from '../context/userContext';

export default function UserPage() {
    const { userId } = useParams();
    const [user, setUser] = useState([]);
    const location = useLocation();
    const { isLoggedIn, username, logIn, logOut } = useUser();
    
    // useEffect(() => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/users`)
    //         .then((res) => {
    //             const users = res.data;
    //             const user = users.find(item => item.id === Number(userId));
    //             setUser(user)
    //         })
    //         .catch((err) => console.log(err));
    // }, [userId]);

    useEffect(() => {
        getListUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    async function getListUser() {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            const user = data.find(item => item.id === Number(userId));
            setUser(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {!user && <h2>Loading...</h2>}
            { user && (
                <div className="User">
                    <GoBackButton location={location} />
                    {isLoggedIn && <p>{username}</p>}
                    {isLoggedIn ? (
                        <button onClick={logOut}>Log out</button>
                        ) : (
                        <button onClick={logIn}>Log in</button>
                    )}
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