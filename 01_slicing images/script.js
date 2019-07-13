btn = document.querySelector('#btn');
defImg = document.querySelector('.def-image-holder');
slicedImg = document.querySelector('.sliced-images');
btnS = document.querySelector('#showBtn');


btnS.addEventListener('click', show)
btn.addEventListener('click', hide)

function hide(){

    defImg.style.visibility = 'hidden';
    slicedImg.style.visibility = 'visible';
}

function show(){

    defImg.style.visibility = 'visible';
    slicedImg.style.visibility = 'hidden';
}
