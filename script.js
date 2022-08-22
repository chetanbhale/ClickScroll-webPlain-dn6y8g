document
  .getElementsByClassName('btn1')[0]
  .addEventListener('click', function (event) {
    document.querySelector('.scrollBox').scrollBy({
      top: 44,
      left: 0,
      behavior: 'smooth',
    });
  });
document
  .getElementsByClassName('btn2')[0]
  .addEventListener('click', function (event) {
    document.querySelector('.scrollBox').scrollBy({
      top: -44,
      left: 0,
      behavior: 'smooth',
    });
  });
