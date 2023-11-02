import styled from 'styled-components'

export const TitleAppHome = styled.h1`
 text-transform: uppercase;
 color: white;
    text-align: center;
    margin-top: 0;
    padding-top: 60px;
`

export const GalleryWrapper = styled.div`
@media(max-width: 800px){
display: flex;
	flex-wrap: wrap;
    align-items: center;
    justify-content: center;
	height: 50vh;
	margin-top: 50px;
	overflow-y: scroll;

	
.items{
	display: flex;
	gap: 0.4rem;
	perspective: 500px;
}
.item{
	width: calc(var(--index)*3);
	height: calc(var(--index)*17);
	background-size: cover;
	background-position: center;
	cursor: pointer;
	transition: transform 1.25s var(--transition);
}


}

@media(min-width: 800px){
	display: flex;
	flex-wrap: wrap;
    align-items: center;
    justify-content: center;
	height: 50vh;
	margin-top: 50px;

	
.items{
	display: flex;
	gap: 0.4rem;
	perspective: 500px;
}
.item{
	width: calc(var(--index)*3);
	height: calc(var(--index)*17);
	background-size: cover;
	background-position: center;
	cursor: pointer;
	transition: transform 1.25s var(--transition);
}

.item::before, .item::after{
	content: '';
	position: absolute;
	width: 20px;
	height: 100%;
	right:  calc(var(--index)*-1);
}

.item::after{
	left:  calc(var(--index)*-1);
}

.items .item:hover{
	transform: translateZ(calc(var(--index)*7)) ;
}

.items .item:hover + *{
	transform: translateZ(calc(var(--index)*6)) rotateY(15deg);
	z-index: -1;
}

.items .item:hover + *+*{
	transform: translateZ(calc(var(--index)*4.5)) rotateY(40deg);
	z-index: -2;
}

.items .item:hover + *+*+*{
	transform: translateZ(calc(var(--index)*2.5)) rotateY(30deg);
	z-index: -3;
}

.items .item:hover + *+*+*+*{
	transform: translateZ(calc(var(--index)*0.8)) rotateY(17deg);
		z-index: -4;
}

.item:has(+ :hover){
	transform: translateZ(calc(var(--index)*6)) rotateY(-15deg);
	z-index: -1;
}

.item:has(+*+ :hover){
	transform: translateZ(calc(var(--index)*4.5)) rotateY(-40deg);
	z-index: -2;
}

.item:has(+*+*+ :hover){
	transform: translateZ(calc(var(--index)*2.5)) rotateY(-30deg);
	z-index: -3;
}

.item:has(+*+*+*+ :hover){
	transform: translateZ(calc(var(--index)*0.8)) rotateY(-17deg);
	z-index: -4;
}
}
`