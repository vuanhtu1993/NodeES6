function wait3s() {
    let ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
    }
    console.log('finished wait3s');
}

function clickHandle() {
    console.log('click event');
}

document.addEventListener('click', clickHandle);

console.log('finish all');
wait3s();