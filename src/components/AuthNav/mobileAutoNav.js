import { DivIcon } from 'components/AppBar/AppBarStyle';
import { UserMenuDiv } from 'components/UserMenu/UserMenuStyled';
import { NavLink } from 'react-router-dom';

export const MobileAuthNav = () => {
	return (
		<UserMenuDiv>
			<NavLink activeclassname="active" to="/register">
				<DivIcon>
					<p>R</p>
					<span>Register</span>
					<span className='circle'></span>
					{/* <div className='indicator'></div> */}
				</DivIcon>
			</NavLink>
			<NavLink activeclassname="active" to="/login">
				<DivIcon>
					<p>L</p>
					<span>Log in</span>
					<span className='circle'></span>
					{/* <div className='indicator'></div> */}
				</DivIcon>
			</NavLink>
		</UserMenuDiv>
	);
};
