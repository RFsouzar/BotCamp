import styled from 'styled-components';
import BotCampImg from "../../img/botcamp.png";


const LogoBotcamp = styled.img.attrs({
    src: `${BotCampImg}`,
    alt: "Logo do Botcamp"
  })`
  width: 248px;
  
  `;

/*const LogoBotcamp = () => (
    <img className="log-botcamp" src={BotCampImg} alt="botcamp"></img>
);*/

export default LogoBotcamp;

