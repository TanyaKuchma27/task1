import { useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/operations";
import { getUsers } from "../redux/selectors";
import GoBackButton from '../components/GoBackButton/GoBackButton';

export default function UserPage() {
    const { userId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { items: users, isLoading } = useSelector(getUsers); 
    const user = users?.find(item => item.id === Number(userId));  

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]); 

    return (
        <>
            {isLoading && <h2> Loading... </h2>}
            {user && (
                <div className="User">
                    <GoBackButton location={location} />
                    <h2>Name: {user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address:</p>
                    <p>street: {user.address.street}</p>
                    <p>suite: {user.address.suite}</p>
                    <p>city: {user.address.city}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            )}          
        </>
    );
};