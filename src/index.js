import './style.css';

{
  const init = () => {
    addListenersToSteveParts();
  };


  const addListenersToSteveParts = () => {
    const allbuttons = document.querySelectorAll('.grid__button');
    console.log(allbuttons);

    const interval = 3000;
    const swapImage = id => {
      document.getElementById(id).setAttribute('src', 'assets/gifs/main.gif');
      // console.log(id, 'tot hier is fine');
    };

    let amountClicks = 0;

    allbuttons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        const currentIndex = button.id;

      if(amountClicks > 0){
        const $changetext = document.querySelector(`.subtitle`);
        $changetext.classList.add(`noopacity`);
      }

       if(amountClicks >= 3){

          console.log('owch he is done with ur sht');
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src ="assets/gifs/weglopen.gif";
          const $changetext = document.querySelector(`.subtitle`);
          $changetext.classList.remove(`noopacity`);
          $changetext.textContent = "I'm done with you.";

          setTimeout(function(){location.href='assets/pages/end.html';}, 3000);

        } else if (currentIndex == 1) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 1 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/eyeleftt.gif';
          setInterval(swapImage(1), interval);

        } else if (currentIndex == 2) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 2 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/eyeright.gif';
          setInterval(swapImage(2), interval);

        } else if (currentIndex == 3) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 3 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/armlinks1_1.gif';
          setInterval(swapImage(3), interval);


        } else if (currentIndex == 4) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 4 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/armrechtsvanboven.gif';
          setInterval(swapImage(4), interval);


        } else if (currentIndex == 5) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 5 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/armlinks2_3.gif';
          setInterval(swapImage(5), interval);


        } else if (currentIndex == 6) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 6 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/armrechts2.gif';
          setInterval(swapImage(6), interval);

        } else if (currentIndex == 7) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 7 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/armlinks3_1.gif';

        } else if (currentIndex == 8) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 8 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/armrechts1.gif';

        } else if (currentIndex == 9) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 9 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/voetlinks.gif';

        } else if (currentIndex == 10) {
          amountClicks++;
          console.log(amountClicks);
          console.log(`nummer 10 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = 'assets/gifs/voetrechts.gif';

        } else {
          console.log(`niets moet gebeuren`);
        }
      });
    });
  };

  init();
}
