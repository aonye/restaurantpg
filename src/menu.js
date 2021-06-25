const menu = (() => {
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    }

    const omakaseMenu = () => {
        let outerDiv = createDiv();
        
        let boldText = document.createElement('B');
        boldText.textContent = 'Full Course';
        let innerDiv = createDiv();
        innerDiv.textContent = `Omakase (chef's choice) $100, 15 course`;

        outerDiv.append(boldText, innerDiv);
        return outerDiv;
    }

    const sushiMenu = () => {
        let outerDiv = createDiv();
        outerDiv.classList.add('grid');

        let menuDiv = createDiv();
        menuDiv.setAttribute('id', 'menusushi');
        let boldText = document.createElement('B');
        boldText.textContent = 'Sushi Menu';
        menuDiv.appendChild(boldText);

        let menu1 = createDiv();
        menu1.textContent = 'Nigiri $3.50/plate';

        let menu2 = createDiv();
        menu2.textContent = 'Sashimi $3.00/plate';

        let menu3 = createDiv();
        menu3.textContent = 'Makimono sushi $2.50/plate';

        let menu4 = createDiv();
        menu4.textContent = 'Temaki $5.00/plate';

        let menu5 = createDiv();
        menu5.textContent = 'Chirashi $7.50/plate';

        let menu6 = createDiv();
        menu6.textContent = 'Inari $3.00/plate';

        outerDiv.append(menuDiv, menu1, menu2, menu3, menu4, menu5, menu6);
        return outerDiv;
    }

    const extraMenu = () => {
        let outerDiv = createDiv();

        let menuDiv = createDiv();
        let boldText = document.createElement('B');
        boldText.textContent = 'Extras';
        menuDiv.appendChild(boldText);

        let extra1 = createDiv();
        extra1.textContent = 'Edamame $3.00/plate';

        let extra2 = createDiv();
        extra2.textContent = 'Miso Soup $3.00/bowl';

        let extra3 = createDiv();
        extra3.textContent = 'Red Bean Ice Cream $5.00';

        outerDiv.append(menuDiv, extra1, extra2, extra3);
        return outerDiv;
    }

    const createMenu = () => {
        let arr = new Array(omakaseMenu(), sushiMenu(), extraMenu());
        return arr;
    };

    return { createMenu }
})();

export default menu


/* <h1>Menu</h1>
<div> 
  <b>Full course</b>
  <div>Omakase $100, 15 course</div>
</div> 
<div class="grid">
  <div id='menusushi'><b>Sushi Menu</b></div>
  <div>Nigiri $3.50/plate</div>
  <div>Sashimi $3.00/plate</div>
  <div>Makimono $2.50/plate</div>
  <div>Temaki $5.00/plate</div>
  <div>Chirashi $7.50/plate</div>
  <div>Inari $3.00/plate</div>
</div>
<div>
  <b>Extras</b>
  <div>Edamame $3.00/plate</div>
  <div>Miso Soup $3.00/bowl</div>
  <div>Red Bean Ice Cream $5.00</div>
</div> */