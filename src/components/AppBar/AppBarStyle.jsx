import styled from 'styled-components'

export const AppBarHeader = styled.header`
	display: flex;
    justify-content: space-around;
    background-color: ${(props) => props.theme.themes.modalColor};
	color: ${(props) => props.theme.themes.titleColor};
	padding: 15px 0; 

		a{
	text-decoration: none;
	 transition-duration: .8s;
	color: ${(prop) => prop.theme.themes.titleColor};

&:hover{
	color: ${(props) => props.theme.themes.hover};
}};
`
