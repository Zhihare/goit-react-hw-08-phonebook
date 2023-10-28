import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<div>
			<p>Welcome, {user.name}</p>
			<button type="button" onClick={() => dispatch(logOut())}>
				Logout
			</button>
		</div>
	);
};