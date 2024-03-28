//Array of objects
var array = [
    {   //In url give (/) slashes as (\) slashes are usually escape character.
        songName:"Hanuman Chalisa",
        url:"Music/Y2Mate.is - Hanuman Chalisa Super Fast  Hanuman Chalisa  Shri Hanuman Chalisa-xJ3vatsNQDU-160k-1646807524627.mp3",
        img:"https://nirmalathanki.files.wordpress.com/2019/10/hanuman.jpg" 
    },
    {
        songName:"Kudiyan Sheher Di",
        url:"Music/yt1s.com - Kudiyaan Shehar DiyaanNa Na Na Re Video  TSeries Mixtape Punjabi  Daler Mehndi  Bhushan Kumar.mp3",
        img:"https://upload.wikimedia.org/wikipedia/commons/7/7d/T-series-logo.svg"
    },
    {
        songName:"Zinda",
        url:"Music/Zinda.mp3",
        img:"https://upload.wikimedia.org/wikipedia/en/4/42/Bhaag_Milkha_Bhaag_poster.jpg"
    },
    {
        songName:"Zor Se Zor Laga",
        url:"Music/Zor Se Zor Laga Khido Khundi.mp3",
        img:"https://a10.gaanacdn.com/gn_img/song/10q3ZR1352/q3ZVe80N35/size_m_1523935430.webp"
    }
]

var allSongs = document.querySelector("#all-songs");

var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction(){
    var clutter = "";
array.forEach(function(element,index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part-1">
        <img src="${element.img}" alt="">
        <h2>${element.songName}</h2>
    </div>

</div>`
})

allSongs.innerHTML = clutter;

audio.src = array[selectedSong].url
poster.style.backgroundImage = `url(${array[selectedSong].img})`

}
mainFunction();

allSongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click",function(){
    if(flag == 0){ 
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    mainFunction()
    audio.play()
    flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click",function(){
    if(selectedSong < array.length - 1){
       selectedSong++
       mainFunction()
       audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click",function(){
    if(selectedSong > 0){
       selectedSong--
       mainFunction()
       audio.play()
    }
    else{
        backward.style.opacity = 0.4
    }
})