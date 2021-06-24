// import _ from 'lodash';
// import myName from './myName';
// import printMe from './print.js';
import home from './home.js';


const component = (() => {
    //const element = document.createElement('div');
    const container = document.querySelector('#content');
    //const btn = document.createElement('button');
    const hometab = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');


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
    console.log(homeDisplay);

    const appendContent = (arr) => {
        for (let i=0; i < arr.length; i++){
            console.log(arr[i]);
            container.appendChild(arr[i]);
        }
    }

    appendContent(homeDisplay);
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    
    //element.innerHTML = myName('Cody');
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
  
    // element.appendChild(btn);
  
    //return element;

    hometab.addEventListener('click', clickHandler);
    menu.addEventListener('click', clickHandler2);
    contact.addEventListener('click', clickHandler3);
    
})();

  
//document.body.appendChild(component());