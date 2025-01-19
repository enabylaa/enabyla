function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DIvWZwEhHy":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.scr="musikku.mp3";
audio.load();
audio.play();
audio.volume=0,3;
}

