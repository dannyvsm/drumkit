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

const boom = document.getElementsByClassName("boom")[0]
const clap = document.getElementsByClassName("clap")[0]
const hihat = document.getElementsByClassName("hihat")[0]
const kick = document.getElementsByClassName("kick")[0]
const openhat = document.getElementsByClassName("openhat")[0]
const ride = document.getElementsByClassName("ride")[0]
const snare = document.getElementsByClassName("snare")[0]
const tink = document.getElementsByClassName("tink")[0]
const tom = document.getElementsByClassName("tom")[0]

boom.addEventListener('click', () => {
    document.getElementById("boom-a").play();
})

clap.addEventListener('click', () => {
    document.getElementById("clap-a").play();
})

hihat.addEventListener('click', () => {
    document.getElementById("hihat-a").play();
})

kick.addEventListener('click', () => {
    document.getElementById("kick-a").play();
})

openhat.addEventListener('click', () => {
    document.getElementById("openhat-a").play();
})

ride.addEventListener('click', () => {
    document.getElementById("ride-a").play();
})

snare.addEventListener('click', () => {
    document.getElementById("snare-a").play();
})

tink.addEventListener('click', () => {
    document.getElementById("tink-a").play();
})

tom.addEventListener('click', () => {
    document.getElementById("tom-a").play();
})
