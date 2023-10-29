import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NavigationNav } from './NavigationStyled';

export const Navigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<NavigationNav>
			<NavLink to="/">
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink to="/contacts">
					Contacts
				</NavLink>
			)}
		</NavigationNav>
	);
};