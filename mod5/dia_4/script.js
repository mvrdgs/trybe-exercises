if(typeof(Storage) != "undefined") {
  localStorage.setItem("bgColor", "blue");
  localStorage.setItem("textColor", "red");
  localStorage.setItem('fontSize', '1.5em');
  localStorage.setItem('lineHeight', '30px');
  localStorage.setItem('fontFamily', 'Arial');

  function setPreferences() {
    let text = document.querySelector('.text');
    let bgColor = localStorage.getItem('bgColor');
    let paragraphs = document.querySelectorAll('p');

    for(let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.backgroundColor = bgColor;
    }
    text.style.color = localStorage.getItem('textColor');
    text.style.fontSize = localStorage.getItem('fontSize');
    text.style.lineHeight = localStorage.getItem('lineHeight');
    text.style.fontFamily = localStorage.getItem('fontFamily');
  }

  setPreferences();

  localStorage.clear();
}