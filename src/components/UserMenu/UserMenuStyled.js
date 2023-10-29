import styled from 'styled-components'

export const UserMenuDiv = styled.div`
	display: flex;
	gap: 20px;
	color: ${(props) => props.theme.themes.titleColor};
	align-items: center;

	a{
	text-decoration: none;
	 transition-duration: .8s;
	color: ${(prop) => prop.theme.themes.titleColor};

&:hover{
	color: red;
}}

&:active{
	color:red;
}
`