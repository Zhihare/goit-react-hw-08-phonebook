import { UserMenuDiv } from 'components/UserMenu/UserMenuStyled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
	return (
		<UserMenuDiv>
			<NavLink to="/register">
				Register
			</NavLink>
			<NavLink to="/login">
				Log In
			</NavLink>
		</UserMenuDiv>
	);
};
