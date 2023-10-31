import styled from 'styled-components';

export const Overlay = styled.div`
	 position: fixed;
  top: -25vh;
  left: -50vw;
  right: -50vw;
  bottom: -20vh;
  background-color: rgba(0, 0, 0, 0.8);
  
`

export const ModalWindow = styled.div`

 position: relative;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 200px;
  border-radius: 10px;
  padding: 25px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;

 background-color: ${(props) => props.theme.themes.modalColor};
  backdrop-filter: blur(70px);
 color: ${(props) => props.theme.themes.titleColor};
 border: 2px solid ${(props) => props.theme.themes.border};
  border-radius: 20px;
 

`
export const ModalTitle = styled.p`
width: 100%
`