import { useNavigate } from 'react-router-dom';

const GoBackButton = ({ location }) => {
  const navigate = useNavigate();

  return (
    <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
    </button>    
  );
};
export default GoBackButton;