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
	height: 60px;
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
position: relative;
padding:0 0 10px 0;
    display: flex;	
    flex-direction: column;
	grid-gap: 8px;
    justify-content: center;
	width: calc(var(--index)*7);
	align-items: center;
	

	span{
		position: absolute;
		font-size: 10px;
		transform: translateY(20px);
	
	}

	p{
		position: relative;
		font-size: 30px;
		margin: 0; 	
		transition: .5s;
	}

	.indicator{
		position: absolute;
	    top: -100%;
   		 width: 55px;
    	height: 55px;
		background: ${(props) => props.theme.themes.mobileBar};
		border: 6px solid transparent;
		border-radius: 50%;
		z-index: -2;
	}

	.indicator::before{
		content: '';
		position: absolute;
		top: 45%;
    	left: -22px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 1px -10px 0 transparent;
	}


		.indicator::after{
		content: '';
		position: absolute;
		top: 45%;
    	right: -22px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: 1px -10px 0 transparent;
	}

	
	.circle{
		z-index: -5;
		position: absolute;
		display: block;
		width: 50px;
		height: 50px;
		background: ${(props) => props.theme.themes.mobileBar};
		border-radius: 50%;
		border: 2px solid  ${(props) => props.theme.themes.action};
		transform: translateY(-22px) scale(0);
	}

`

export const Indicator = styled.div`


`