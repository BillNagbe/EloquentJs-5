const ballon = document.querySelector('p');
let size = window.getComputedStyle(ballon).fontSize;
console.log(size)

ballon.addEventListener('keydown', (event) => {
    event.preventDefault();
    
    function increase() {
        size = parseInt(size);
        size += 10;
        size + "px";
        ballon.fontSize = size;
        size = window.getComputedStyle(ballon).fontSize;
    }

    function decrease() {
        size = parseInt(size);
        size -= 10;
        size + "px";
        ballon.fontSize = size;
        size = window.getComputedStyle(ballon).fontSize;
    }


    if(event.key === 'arrow up') {
       increase();
       console.log(size);
    }
    if(event.key === 'arrow down') {
        decrease();
        console.log(size);
    }


})