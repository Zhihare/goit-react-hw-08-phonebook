import styled from 'styled-components';

export const ContactsListContainer = styled.div`
    width: 100%;
    height: 365px;
    overflow-y: auto;

    
    &::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

&::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
	background-color:${(props) => props.theme.themes.buttonColor};
}
`
export const ContactsListName = styled.div`
     display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 50px;
    margin-left: 50px;

    span{
        display: inline-block;
        width: 15px;
        margin-right: 15px;
    }
`

export const ContactsListButton = styled.button`
    border: none;
    background-color: transparent;
	transition-duration: .8s;
    color: ${(props) => props.theme.themes.buttonColor};
    cursor: pointer;

	&:hover{
		color: ${(props) => props.theme.themes.buttonHover};
	}
`

export const ContactListEditForm = styled.form`
      display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--index)*1.8);
    height: 50px;

div{
    display: flex;
   
    /* margin-left:calc(var(--index)*1.8); */
}
`

export const ContactListEditLabel = styled.label`
    max-width: 150px; 

`

export const ContactListEditInput = styled.input`
    width:100%;
    background-color: ${(props) => props.theme.themes.tagLineColor};
    border-style: ridge;
    color: ${(props) => props.theme.themes.titleColor};
`