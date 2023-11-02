import styled from 'styled-components'

export const NavigationNav = styled.nav`
	display: flex;
    justify-content: space-around;
	align-items: center;
	gap: 20px;

		a{
	padding: 6px;
	border-radius: 10px;
	border: 2px solid transparent;
	}
	.active{
		color: ${(props) => props.theme.themes.active};
		border-color: ${(props) => props.theme.themes.active};		
	}

`

export const NavigationNavMobile = styled.nav`
	display: flex;
    justify-content: space-around;
	align-items: center;
	color: ${(props) => props.theme.themes.buttonColor};



	
	.active{
		color: ${(props) => props.theme.themes.active};	
	}

`