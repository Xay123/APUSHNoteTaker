function draw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let img = new Image();
  let notes = document.getElementById("myText").value;
  var f = new FontFace('handwriting', './include/handwriting.ttf');

    img.addEventListener("load", ()=>{
      ctx.drawImage(img,0,0);
      ctx.font = '50px handwriting';
      ctx.fillText('.' + notes, 260, 280);
    });

  img.src = "./include/notePaper.png";
}