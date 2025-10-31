document.getElementById('clicker').onclick = function () 
{
  const element = document.getElementById('clicker');
  element.style.color= "#fff";
}

const bgm = new Audio("steves-lava-chicken.mp3");
bgm.loop = true;
bgm.play();