import React from 'react';

import BtnBotcamp from './components/BtnBotcamp';
import LogoBotcamp from './components/LogoBotcamp';
import LoginWrapper from './components/LoginWrapper';


const App = () => (

        <LoginWrapper>
            <LogoBotcamp />
            <BtnBotcamp >Entrar</BtnBotcamp>
        </LoginWrapper>
   
);


/*class App extends Component{
    render(){
        return <section> <BtnBotcamp /> <LogoBotcamp /> </section>
            
    }
}*/

export default App;