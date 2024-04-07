const button = document.getElementById('button');







button.addEventListener('click', handleButtonClick);
// ❌
button.addEventListener('mouseover', onButtonMouseOver)
// ✅
button.addEventListener('mouseover', handleButtonMouseOver)