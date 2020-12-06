import React from 'react';
import frm from './frm.jpeg';
class Main extends React.Component
{
    render(){
        return(
         <div class= "box">
            <div class="spinner spinner-1"></div>
            <img class="img1" src="https://agrevolution.in/assets/frontend/images/index/outer.svg"/>
            <div class="spinner spinner-4"></div>
            <img class="img2" src="https://agrevolution.in/assets/frontend/images/index/outer2.svg"/>
            <div class="hm-spinner"></div>
            <div class="logo"><img class="img" src={frm}/></div>
            
          </div>
        );
    }

}

export default Main;
