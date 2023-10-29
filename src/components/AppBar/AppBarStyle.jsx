import styled from 'styled-components'

export const AppBarHeader = styled.header`
	display: flex;
    justify-content: space-around;
    background-color: ${(props) => props.theme.themes.modalColor};
	color: ${(props) => props.theme.themes.titleColor};
	padding: 15px 0; 
`