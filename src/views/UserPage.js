import { useParams, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '../redux/userSlice';
import GoBackButton from '../components/GoBackButton/GoBackButton';

export default function UserPage() {
    const { userId } = useParams();
    const location = useLocation();
    const { isFetching, data: users } = useFetchUserQuery(); 
    const user = users?.find(item => item.id === Number(userId));  

    return (
        <>
            {isFetching && <h2> Loading... </h2>}
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