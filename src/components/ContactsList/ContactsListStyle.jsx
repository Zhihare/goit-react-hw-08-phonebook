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
  @media(max-width: 600px){
    margin: 0 10px;
    font-size: 16px;

  }

     display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: 30px;

    span{
        display: inline-block;
        width: 15px;
        margin-right: 15px;
    }

    p{
            margin-top: 8px;
    margin-bottom: 8px;
    }

    .activeButton{
        font-size: 20px;
        margin-left: auto;
    }

    .contactItem{
         display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        border-bottom: 2px solid  ${(props) => props.theme.themes.tagLineColor};
            padding:8px 0;
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