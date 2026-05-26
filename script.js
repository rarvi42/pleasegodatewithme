const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
    "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
]

const noMessages = [
    "No",
    "Are you positive? 🤔",
    "Pookie please... 🥺",
    "If you say no, I will be really sad...",
    "I will be very sad 😢",
    "Please??? 💔",
    "Don't do this to me...",
    "Last chance 😭"
]

const yesTeasePokes = [
    "try saying no first 😏",
    "go on, hit no 👀",
    "you're missing out 😈",
    "click no, I dare you 😏"
]

let yesTeasedCount = 0
let noClickCount = 0
let musicPlaying = true

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

music.muted = true
music.volume = 0.3

music.play().then(() => {
    music.muted = false
}).catch(() => {
    document.addEventListener('click', () => {
        music.muted = false
        music.play().catch(()=>{})
    }, {once:true})
})

function toggleMusic() {

    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent='🔇'
    }
    else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent='🔊'
    }
}

function handleYesClick() {
    window.location.href='yes.html'
}

function showTeaseMessage(msg){

    let toast=document.getElementById('tease-toast')

    toast.textContent=msg
    toast.classList.add('show')

    clearTimeout(toast._timer)

    toast._timer=setTimeout(()=>{
        toast.classList.remove('show')
    },2500)

}

function handleNoClick() {

    noClickCount++

    // Change button text
    const msgIndex=Math.min(
        noClickCount,
        noMessages.length-1
    )

    noBtn.textContent=noMessages[msgIndex]

    // Grow YES
    const currentYes=parseFloat(
        window.getComputedStyle(yesBtn).fontSize
    )

    yesBtn.style.fontSize=
    `${currentYes*1.35}px`

    const padY=Math.min(
        18+noClickCount*6,
        100
    )

    const padX=Math.min(
        45+noClickCount*10,
        180
    )

    yesBtn.style.padding=
    `${padY}px ${padX}px`

    // Shrink NO
    const currentNo=parseFloat(
        window.getComputedStyle(noBtn).fontSize
    )

    noBtn.style.fontSize=
    `${Math.max(currentNo*0.8,6)}px`

    noBtn.style.padding=
    `${Math.max(12-noClickCount,2)}px ${Math.max(28-noClickCount*2,5)}px`

    // Change GIF
    const gifIndex=Math.min(
        noClickCount,
        gifStages.length-1
    )

    swapGif(
        gifStages[gifIndex]
    )

    // Hide No eventually
    if(currentNo<=8){

        noBtn.style.display='none'

        showTeaseMessage(
            "Fine... only Yes remains 🥺❤️"
        )
    }
}

function swapGif(src){

    catGif.style.opacity='0'

    setTimeout(()=>{

        catGif.src=src

        catGif.style.opacity='1'

    },200)

}
