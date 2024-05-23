"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  const change = 6.55957;
  const devisefr = document.getElementById('devisefr');
  const deviseeu = document.getElementById('deviseeu');

  devisefr.addEventListener('keyup', function(){
    let franc = parseFloat(this.value.trim());
    let euro = parseFloat(franc/change);
    //devisefr.value = franc.toFixed(2);
    deviseeu.value = euro.toFixed(2);
  });

  deviseeu.addEventListener('keyup', function(){
    let euro = parseFloat(this.value.trim());
    let franc = parseFloat(euro*change);
    devisefr.value = franc.toFixed(2);
    //deviseeu.value = euro.toFixed(2);
  });
});