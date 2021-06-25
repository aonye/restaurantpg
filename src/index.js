// import _ from 'lodash';
// import myName from './myName';
// import printMe from './print.js';
import home from './home.js';
import contact from './contact.js';
import menu from './menu.js';


const component = (() => {
    //const element = document.createElement('div');
    const container = document.querySelector('#content');
    //const btn = document.createElement('button');
    const homeTab = document.querySelector('#home');
    const menuTab = document.querySelector('#menu');
    const contactTab = document.querySelector('#contact');


    const clickHandler = () => {
        console.log('hhh');
    }

    const clickHandler2 = () => {
        console.log('jjj');
    }

    const clickHandler3 = () => {
        console.log('iii');
    }

    let homeDisplay = home.createHome();
    //console.log(homeDisplay, 'homedisplay');

    let contactDisplay = contact.createContact();
    //console.log(contactDisplay, 'contactdisplay');

    const appendContent = (arr) => {
        for (let i=0; i < arr.length; i++){
            console.log(arr[i]);
            container.appendChild(arr[i]);
        }
    }

    let menu2 = menu.createMenu();
    console.log(menu2, 'menudisplay');

    appendContent(menu2);
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    
    //element.innerHTML = myName('Cody');
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
  
    // element.appendChild(btn);
  
    //return element;

    homeTab.addEventListener('click', clickHandler);
    menuTab.addEventListener('click', clickHandler2);
    contactTab.addEventListener('click', clickHandler3);
    
})();

  
//document.body.appendChild(component());