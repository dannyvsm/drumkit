

document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyA') {
        document.getElementById("boom-a").play();
    }
    else if (event.code == 'KeyS') {
        document.getElementById("clap-a").play();
    }
    else if (event.code == 'KeyD') {
        document.getElementById("hihat-a").play();
    }
    else if (event.code == 'KeyF') {
        document.getElementById("kick-a").play();
    }
    else if (event.code == 'KeyG') {
        document.getElementById("openhat-a").play();
    }
    else if (event.code == 'KeyH') {
        document.getElementById("ride-a").play();
    }
    else if (event.code == 'KeyJ') {
        document.getElementById("snare-a").play();
    }
    else if (event.code == 'KeyK') {
        document.getElementById("tink-a").play();
    }
    else if (event.code == 'KeyL') {
        document.getElementById("tom-a").play();
    }
});

// document.addEventListener('click', (event) => {
//     let boom = document.getElementsByClassName("boom")
//     let clap = document.getElementsByClassName("clap")
//     let hihat = document.getElementsByClassName("hihat")
//     let kick = document.getElementsByClassName("kick")
//     let openhat = document.getElementsByClassName("openhat")
//     let ride = document.getElementsByClassName("ride")
//     let snare = document.getElementsByClassName("snare")
//     let tink = document.getElementsByClassName("tink")
//     let tom = document.getElementsByClassName("tom")

//     //check whether button is clicked and then do actions
//     //link audio autoplay on click
// })