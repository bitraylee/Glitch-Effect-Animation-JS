function glitchEffect() {
   const count = 20;
   let bg = document.getElementById('container');
   for (let i = 0; i < count; i++) {
      let glitchBox = document.createElement('div');
      glitchBox.className = 'box';
      bg.appendChild(glitchBox);
   }
   for (let i = 0; i < 30; i++) {
      let glitchLine = document.createElement('div');
      glitchLine.className = 'line';
      bg.appendChild(glitchLine);
   }
   for (let i = 0; i < count; i++) {
      let glitchBoxS = document.createElement('div');
      glitchBoxS.className = 'boxS';
      bg.appendChild(glitchBoxS);
   }
   setInterval(() => {
      let glitchLines = document.getElementsByClassName('line');
      for (let i = 0; i < glitchLines.length; i++) {
         // glitchLines[i].style.left = Math.floor(Math.random() * 50) + 'vw';
         glitchLines[i].style.top = Math.floor(Math.random() * 100) + 'vh';
         glitchLines[i].style.right = Math.floor(Math.random() * 100) + 'vw';
         glitchLines[i].style.bottom = Math.floor(Math.random() * 100) + 'vh';
         glitchLines[i].style.width = Math.floor(Math.random() * 5) + 'vw';
         glitchLines[i].style.height = Math.floor(Math.random() * 3) + 'px';
         glitchLines[i].style.backgroundPosition = Math.floor(Math.random() * 25) + 'px';

      }
   }, 50);

   setInterval(() => {
      let glitchBoxSmall = document.getElementsByClassName('boxS');
      for (let i = 0; i < glitchBoxSmall.length; i++) {
         // glitchBoxSmall[i].style.left = Math.floor(Math.random() * 20) + 'vw';
         glitchBoxSmall[i].style.top = Math.floor(Math.random() * 100) + 'vh';
         glitchBoxSmall[i].style.right = Math.floor(Math.random() * 100) + 'vw';
         glitchBoxSmall[i].style.bottom = Math.floor(Math.random() * 100) + 'vh';
         glitchBoxSmall[i].style.width = Math.floor(Math.random() * 50) + 'vw';
         glitchBoxSmall[i].style.height = Math.floor(Math.random() * 20) + 'vh';
         let randomDisplacement = Math.floor(Math.random() * 10);
         if ((Math.floor(Math.random() * 2 + 1)) == 1) {
            randomDisplacement *= -1;
         }
         glitchBoxSmall[i].style.backgroundPosition = randomDisplacement + 'px';

      }
   }, 200);

   setInterval(() => {
      let glitch = document.getElementsByClassName('box');
      for (let i = 0; i < glitch.length; i++) {
         // glitch[i].style.left = Math.floor(Math.random() * 20) + 'vw';
         glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
         // glitch[i].style.right = Math.floor(Math.random() * 100) + 'vw';
         glitch[i].style.bottom = Math.floor(Math.random() * 100) + 'vh';
         glitch[i].style.width = Math.floor(Math.random() * 50 + 50) + 'vw';
         glitch[i].style.height = Math.floor(Math.random() * 50 + 50) + 'vh';

         let randomDisplacement = Math.floor(Math.random() * 10);
         if ((Math.floor(Math.random() * 2 + 1)) == 1) {
            randomDisplacement *= -1;
         }
         glitch[i].style.backgroundPosition = randomDisplacement + 'px';

         glitch[i].style.opacity = Math.floor(Math.random() * 5 + 5) / 10;
      }



   }, 500);

}