import styled from 'styled-components';
import BotCampImg from "../../img/botcamp.png";


const LogoBotcamp = styled.img.attrs({
    src: `${BotCampImg}`
  })`
  width: 248px;
  position:relative;
  margin-top: 5em;
  margin-left: 2em;
  text-align: center;
  
  `;

/*const LogoBotcamp = () => (
    <img className="log-botcamp" src={BotCampImg} alt="botcamp"></img>
);*/

export default LogoBotcamp;

