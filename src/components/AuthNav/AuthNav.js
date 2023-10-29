import { UserMenuDiv } from 'components/UserMenu/UserMenuStyled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
	return (
		<UserMenuDiv>
			<NavLink activeClassName="active" to="/register">
				Register
			</NavLink>
			<NavLink exact activeClassName="active" to="/login">
				Log In
			</NavLink>
		</UserMenuDiv>
	);
};
