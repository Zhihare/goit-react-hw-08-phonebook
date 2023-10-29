import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NavigationNav } from './NavigationStyled';

export const Navigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<NavigationNav>
			<NavLink activeClassName="active" to="/">
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink activeClassName="active" to="/contacts">
					Contacts
				</NavLink>
			)}
		</NavigationNav>
	);
};