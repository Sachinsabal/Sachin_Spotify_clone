console.log("welcome to music world!");

// intializing the variable
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs= [

    { songName: "Heat Attack -Alan Walker", filepath: "music/1.mp3", coverPath: "covers/0.jpg" },
    { songName: "Morni Banke(Badhai Ho)", filepath: "music/2.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dilbar-Ishare-Guru Randhava", filepath: "music/3.mp3", coverPath: "covers/2.jpg" },
    { songName: "Jaane Meri-Sumit Goswami", filepath: "music/4.mp3", coverPath: "covers/3.jpg" },
    { songName: "Maan Meri jaan(pagalWorld)", filepath: "music/5.mp3", coverPath: "covers/4.jpg" },
    { songName: "Manike(pagalWorld)", filepath: "music/6.mp3", coverPath: "covers/5.jpg" },
    { songName: "Pehli Baarish Mein-Jubin", filepath: "music/7.mp3", coverPath: "covers/6.jpg" },
    { songName: "Suit Suit(Hindi Medium)", filepath: "music/8.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tu Hai To Mujhe Phir Aur", filepath: "music/9.mp3", coverPath: "covers/8.jpg" },

]

songItems.forEach((Element,i) =>{
    console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

// audioElement.play()

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
 
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
     element.addEventListener('click',(e)=>{
        makeAllplays();
        gif.style.opacity = 1;

        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/${Index + 1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
     })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0; 
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0; 
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})