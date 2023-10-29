import styled from 'styled-components'

export const UserMenuDiv = styled.div`
	display: flex;
	gap: 20px;
	color: ${(props) => props.theme.themes.titleColor};
	align-items: center;
	


		a{
	padding: 6px;
	border-radius: 10px;
	border: 2px solid transparent;
	}
	.active{
		color:${(props) => props.theme.themes.active};
		border-color: ${(props) => props.theme.themes.active};		
	}

`