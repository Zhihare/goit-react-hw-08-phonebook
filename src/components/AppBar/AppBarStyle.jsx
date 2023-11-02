import styled from 'styled-components'

export const AppBarHeader = styled.header`
@media(max-width: 600px){
	display: flex;
    justify-content: space-around;
    background-color: ${(props) => props.theme.themes.modalColor};
	color: ${(props) => props.theme.themes.titleColor};
	font-size: 14px;
	padding: 10px 0; 

		a{
	text-decoration: none;
	 transition-duration: .8s;
	color: ${(prop) => prop.theme.themes.titleColor};

&:hover{
	color: ${(props) => props.theme.themes.hover};
}};}



@media(min-width: 600px){
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
}};}


`

export const MobileAppBarHeader = styled.header`
position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
width:100%;
display: flex;
justify-content:center;
align-items: center;
background-color: ${(props) => props.theme.themes.mobileBar};
color: ${(prop) => prop.theme.themes.buttonColor};

	a{
			text-decoration: none;
	 		transition-duration: .8s;
			color: ${(prop) => prop.theme.themes.buttonColor};
		}

`
export const DivIcon = styled.div`
    display: flex;	
    flex-direction: column;
	grid-gap: 8px;
    justify-content: center;
	width: calc(var(--index)*7);
	    align-items: center;
	
	
	span{
		font-size: 10px;
	}


`