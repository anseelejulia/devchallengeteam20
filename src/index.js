import './style.css';

{
  const init = () => {
    addListenersToSteveParts();
  };

  const addListenersToSteveParts=()=>{
    const allbuttons = document.querySelectorAll('.grid__button');
    console.log(allbuttons);
    
    allbuttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIndex = button.id;

        if(currentIndex == 1){
          console.log(`nummer 1 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src = "assets/img/eye.gif";

        } else if(currentIndex ==2){
          console.log(`nummer 2 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/eye.gif';


        } else if(currentIndex ==3){
          console.log(`nummer 3 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/l1.gif';


        } else if(currentIndex ==4){
          console.log(`nummer 4 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/r1.gif';

        
        } else if(currentIndex ==5){
          console.log(`nummer 5 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/l2.gif';

        
        } else if(currentIndex == 6){
          console.log(`nummer 6 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/r2.gif';

        } else if(currentIndex == 7){
          console.log(`nummer 6 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/l3.gif';

        } else if(currentIndex == 8){
          console.log(`nummer 6 is aangeduid`);
          const $gettingimgsrc = document.querySelector(`.steveoriginal`);
          $gettingimgsrc.src= 'assets/img/r3.gif';

        } else {
          console.log(`niets moet gebeuren`);
        }
      });
    });
  };

  init();
}
