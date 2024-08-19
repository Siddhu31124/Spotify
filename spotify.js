let SongList=[
    {
        image:"https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
        name:"StarBoy",
        artist:"The Weekend"
        
    },
    {
        image:"https://c.saavncdn.com/406/Ek-Tha-Raja-Hindi-2024-20240318125601-500x500.jpg",
        name:"Ek Tha Raja",
        artist:"Badshasa"
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b273021d7017f73387b008eab271",
        name:"ney Veray",
        artist:"Animal"
        
    },
    {
        image:"https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_orchard/20230512070539_197188915704/1683896530964/resources/197188915704.jpg",
        name:"cheques",
        artist:"Shubh"
        
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
        name:"Blinding Lights",
        artist:"The Weekend"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3",
        name:"Tum Hi Ho",
        artist:"Aashiqui 2"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b273d5f4378b1ffc9119fdc7306d",
        name:"Sajni",
        artist:"Lapatha Ladies"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b2736d97b3dc154dfdbe2321fb5c",
        name:"Chuttamalle",
        artist:"Devara"
        
    },
    {
        image:"https://c.saavncdn.com/584/V-Telugu-2020-20200828173314-500x500.jpg",
        name:"Manasu Maree",
        artist:"V"
        
    },
    {
        image:"https://assetscdn1.paytm.com/images/cinema/pushpa-2-(1)-(1)-ff7e1f10-fbfc-11ee-bfde-1dbbef51e33c.jpg",
        name:"PUSHPA PUSHPA",
        artist:"Pushpa 2"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b2738591a24a47e09545b988f9b2",
        name:"Fear Song",
        artist:"Devara"
        
    },
    {
        image:"https://i2o.scdn.co/image/ab67706c0000cfa343d87044543b83bbbcf3b5bf",
        name:"Sitar",
        artist:"Mr.Bachan"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b2735fb9ec91608a996202583525",
        name:"Theam Of Kalki",
        artist:"Kalki 2898AD"
        
    },
    {
        image:"https://s.saregama.tech/image/c/fw_485/8/32/77/game_changer_tam_jaragandi_ott_1440_1711465462.jpg",
        name:"Jaragandi",
        artist:"Game Changer"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b27385e12c19989a0cae9b5124f6",
        name:"Samavarthi",
        artist:"Saripodhaa Sanivaaram"
        
    },
    {
        image:"https://c.saavncdn.com/385/Agnyaathavaasi-Telugu-2017-20180102061403-500x500.jpg",
        name:"Baitikochi chuste",
        artist:"Agnyaathavaasi"
        
    },
    {
        image:"https://c.saavncdn.com/623/Jersey-Telugu-2019-20190427102305-500x500.jpg",
        name:"Adhento Gaani",
        artist:"Jersey"
        
    },
    {
        image:"https://c.saavncdn.com/244/3-Telugu-2012-500x500.jpg",
        name:"Kolaveri Di",
        artist:"3"
        
    },
    {
        image:"https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg",
        name:"Chaleya",
        artist:"Jawan"
        
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHS3g5vpIMKPtm90WUyG7h-6KHtiEUx1uiuA&s",
        name:"Aaj ki Rath",
        artist:"Stree 2"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d00001e02281650a8e8c5d04658d31ac1",
        name:"Ghungroo",
        artist:"War"
        
    },
    {
        image:"https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg",
        name:"Bekayali (Kabir Sing)",
        artist:"Kabir Sing"
        
    },
    {
        image:"https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
        name:"BADTAMEEZ DIL",
        artist:"Hey Jawani He Diwani"
        
    },
    {
        image:"https://i1.sndcdn.com/artworks-000126060865-qlbvre-t500x500.jpg",
        name:"Hamari Adhuri Kahani",
        artist:"Hamari Adhuri Kahani"
        
    },
    {
        image:"https://www.pagalworld.com.so/uploads/thumb/sft43/21347_4.jpg",
        name:"Tauba Tauba",
        artist:"BadNews"
        
    },
    {
        image:"https://pagalfree.com/images/128Kesariya%20-%20Brahmastra%20128%20Kbps.jpg",
        name:"Kesariya",
        artist:"Brahmastra"
        
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9O_iBlZKkH9Rn5zQIbG_QAR2MWSt9I9h7_Q&s",
        name:"What Jumka",
        artist:"Rocky Aur Rani Kii Prem Kahaani"
        
    },

    
]
let PlayerBar=document.getElementById("playBar")
let songs=[]
async function main(){
    let a=await fetch("http://127.0.0.1:5500/songs/")
    let response=await a.text()
    let div=document.createElement("div")
    div.innerHTML=response
    let ul=div.getElementsByTagName("a")
    for (let i of ul){
        if(i.href.endsWith(".mp3")){
            songs.push(i.href)
        }
    }
}
function formatTime(seconds) {
    // Convert to an integer value to remove fractional seconds
    seconds = Math.floor(seconds);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Pad the minutes and seconds with leading zeros if needed
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
main()
let index
let song
let indexofSong
let songname=document.getElementById("SongName")
let songartist=document.getElementById("SongArtist")
let img=document.getElementById("imageOfPlaybar")
let mini=document.getElementById("miniSongname")
function time(name){
    console.log(name)
    index=SongList.findIndex((items)=>{
        if(items.name.toLowerCase().includes(name)){
            return true
        }
        else{
            return false
        }
    })
    img.setAttribute("src",SongList[index].image)
    img.classList.add("playbarImg")
    songname.textContent=SongList[index].name
    songartist.textContent=SongList[index].artist
    mini.textContent=SongList[index].name
}
function songtime(song1){
    song1.addEventListener("timeupdate",()=>{
        presenttime.textContent=formatTime(song1.currentTime)
        totaltime.textContent=formatTime(song1.duration)
        presenttime1.textContent=formatTime(song1.currentTime)
        totaltime1.textContent=formatTime(song1.duration)
        document.querySelector(".cricle").style.left=(song1.currentTime/song1.duration)*100+"%"})
        document.querySelector(".seekbar").addEventListener("click",(event)=>{
            let SongtimePercent=(event.offsetX/event.target.getBoundingClientRect().width)*100
            document.querySelector(".cricle").style.left=SongtimePercent+"%"
            song1.currentTime=(song1.duration*SongtimePercent)/100})
}
let presenttime=document.querySelector(".currenttime")
let totaltime=document.querySelector(".duration")
let presenttime1=document.querySelector(".currenttime1")
let totaltime1=document.querySelector(".duration1")
let previousSong=undefined
let p="play"
let p1="play"
function selectSong(name) {
    PlayerBar.classList.remove("hidebar")
    time(name)
    if(previousSong!=undefined){
        previousSong.pause();
    }
    indexofSong=songs.findIndex((items)=>{
        if(items.toLowerCase().includes(name)){ return true}
    })
    console.log(indexofSong)
    for (let i of songs){
        if(i.toLowerCase().includes(name)){
            song = new Audio(i);
            song.play();
            song.volume = document.getElementById('volumeControl').value;
            document.getElementById('volumeControl').addEventListener('input', function() {
            song.volume = document.getElementById('volumeControl').value;});
            songtime(song)
            // song.addEventListener("timeupdate",()=>{
            // presenttime.textContent=formatTime(song.currentTime)
            // totaltime.textContent=formatTime(song.duration)
            // presenttime1.textContent=formatTime(song.currentTime)
            // totaltime1.textContent=formatTime(song.duration)
            // document.querySelector(".cricle").style.left=(song.currentTime/song.duration)*100+"%"})
            // document.querySelector(".seekbar").addEventListener("click",(event)=>{
            //     let SongtimePercent=(event.offsetX/event.target.getBoundingClientRect().width)*100
            //     document.querySelector(".cricle").style.left=SongtimePercent+"%"
            //     song.currentTime=(song.duration*SongtimePercent)/100})
            previousSong=song
        }
    } 
}
document.getElementById("centerid").addEventListener("click",()=>{
    if(p==="play"){
        previousSong.pause()
        document.getElementById("playandpause").classList.remove("fa-solid","fa-pause")
        document.getElementById("playandpause").classList.add("fa-solid","fa-play")
        p="pause"
    }
    else{
        previousSong.play()
        document.getElementById("playandpause").classList.remove("fa-solid","fa-play")
        document.getElementById("playandpause").classList.add("fa-solid","fa-pause")
        p="play"
    }
})
document.getElementById("centerid1").addEventListener("click",()=>{
    if(p1==="play"){
        previousSong.pause()
        document.getElementById("playandpause1").classList.remove("fa-solid","fa-pause")
        document.getElementById("playandpause1").classList.add("fa-solid","fa-play")
        p1="pause"
    }
    else{
        previousSong.play()
        document.getElementById("playandpause1").classList.remove("fa-solid","fa-play")
        document.getElementById("playandpause1").classList.add("fa-solid","fa-pause")
        p1="play"
    }
})
document.getElementById("rightid").addEventListener("click",()=>{
    if(index<SongList.length-1){
        previousSong.pause()
        img.setAttribute("src",SongList[index+1].image)
        img.classList.add("playbarImg")
        songname.textContent=SongList[index+1].name
        songartist.textContent=SongList[index+1].artist
        mini.textContent=SongList[index+1].name
        song=new Audio(songs[indexofSong+1])
        song.play()
        songtime(song)
        console.log(indexofSong,index)
        previousSong=song
        index=index+1  
        indexofSong=indexofSong+1
    }
    else{
        index=0
        indexofSong=0
        previousSong.pause()
        img.setAttribute("src",SongList[index].image)
        img.classList.add("playbarImg")
        songname.textContent=SongList[index].name
        songartist.textContent=SongList[index].artist
        mini.textContent=SongList[index].name 
        song=new Audio(songs[indexofSong])
        song.play()
        songtime(song)
        previousSong=song
    }
    
    })
document.getElementById("rightid1").addEventListener("click",()=>{
    if(index<SongList.length-1){
        previousSong.pause()
        console.log(SongList.length)
        console.log(index)
        img.setAttribute("src",SongList[index+1].image)
        img.classList.add("playbarImg")
        songname.textContent=SongList[index+1].name
        songartist.textContent=SongList[index+1].artist
        mini.textContent=SongList[index+1].name
        index=index+1
        song=new Audio(songs[indexofSong+1])
        song.play()
        songtime(song)
        previousSong=song
        index=index+1  
        indexofSong=indexofSong+1  
    }
    else{
        index=0
        indexofSong=0
        previousSong.pause()
        img.setAttribute("src",SongList[index].image)
        img.classList.add("playbarImg")
        songname.textContent=SongList[index].name
        songartist.textContent=SongList[index].artist
        mini.textContent=SongList[index].name
        song=new Audio(songs[indexofSong])
        song.play()
        songtime(song)
        previousSong=song 
    }
    
    })
    document.getElementById("leftid").addEventListener("click",()=>{
        if(index>0 && indexofSong>0){
            console.log(indexofSong)
            console.log(index)
            previousSong.pause()
            img.setAttribute("src",SongList[index-1].image)
            img.classList.add("playbarImg")
            songname.textContent=SongList[index-1].name
            songartist.textContent=SongList[index-1].artist
            mini.textContent=SongList[index-1].name 
            song=new Audio(songs[indexofSong-1])
            song.play()
            songtime(song)
            previousSong=song
            index=index-1  
            indexofSong=indexofSong-1 
        }
        else{
            console.log("over")
            previousSong.pause()
            index=SongList.length-1
            indexofSong=songs.length-1
            img.setAttribute("src",SongList[index].image)
            img.classList.add("playbarImg")
            songname.textContent=SongList[index].name
            songartist.textContent=SongList[index].artist
            mini.textContent=SongList[index].name 
            song=new Audio(songs[indexofSong])
            song.play()
            songtime(song)
            previousSong=song 
        }
    })
    document.getElementById("leftid1").addEventListener("click",()=>{
        if(index>0){
            previousSong.pause()
            img.setAttribute("src",SongList[index-1].image)
            img.classList.add("playbarImg")
            songname.textContent=SongList[index-1].name
            songartist.textContent=SongList[index-1].artist
            mini.textContent=SongList[index-1].name
            song.play()
            songtime(song)
            previousSong=song
            index=index-1  
            indexofSong=indexofSong-1  
        }
        else{
            previousSong.pause()
            index=SongList.length-1
            indexofSong=songs.length-1
            img.setAttribute("src",SongList[index].image)
            img.classList.add("playbarImg")
            songname.textContent=SongList[index].name
            songartist.textContent=SongList[index].artist
            mini.textContent=SongList[index].name 
            song=new Audio(songs[indexofSong])
            song.play()
            songtime(song)
            previousSong=song 
        }
    })
