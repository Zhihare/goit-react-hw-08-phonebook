import styled from 'styled-components'

export const NavigationNav = styled.nav`
	display: flex;
    justify-content: space-around;
	align-items: center;
	gap: 20px;
/* padding: 15px 0;  */

a{
	text-decoration: none;
	color: ${(prop) => prop.theme.themes.titleColor};
}
`