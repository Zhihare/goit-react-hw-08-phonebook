import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NavigationNav, NavigationNavMobile } from './NavigationStyled';
import { LiaHomeSolid } from 'react-icons/lia'
import { RiContactsBook2Line } from 'react-icons/ri'
import { DivIcon } from 'components/AppBar/AppBarStyle';

export const MobileNavigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<NavigationNavMobile>
			<NavLink activeclassname="active" to="/" >
				<DivIcon>
					<LiaHomeSolid size={30} />
					<span>Home</span>
				</DivIcon>

			</NavLink>
			{isLoggedIn && (

				<NavLink activeclassname="active" to="/contacts">
					<DivIcon>
						<RiContactsBook2Line size={30} />
						<span>Contacts</span>
					</DivIcon>
				</NavLink>


			)
			}
		</NavigationNavMobile >
	);
};