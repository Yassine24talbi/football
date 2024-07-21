let p0 = {
    playerName:'Cristiano',
    firstName:'Ronaldo',
    speed:95,
    shot:99,
    defence:79,
    pass:90,
    dribbel:95,
    playerPic:'url(ronaldo.png)',
    teams:'url(madrid.png)',
    country:'url(portogal.png)',
}
let p1 = {
    playerName:'Lionel',
    firstName:'Messi',
    speed:90,
    shot:92,
    defence:65,
    pass:99,
    dribbel:99,
    playerPic:'url(messi.png)',
    teams:'url(barca.png)',
    country:'url(arg.png)',
}

let p2 = {
    playerName:'Jude',
    firstName:'Bellingham',
    speed:85,
    shot:95,
    defence:85,
    pass:90,
    dribbel:90,
    playerPic:'url(jude.png)',
    teams:'url(madrid.png)',
    country:'url(england.png)',
}

let p3 = {
    playerName:'Neymar',
    firstName:'Da-silva',
    speed:95,
    shot:90,
    defence:70,
    pass:95,
    dribbel:99,
    playerPic:'url(neymar.png)',
    teams:'url(barca.png)',
    country:'url(barzil.png)',
}
let p4 = {
    playerName:'Kylian',
    firstName:'Mbappe',
    speed:100,
    shot:85,
    defence:70,
    pass:90,
    dribbel:95,
    playerPic:'url(mbappe.png)',
    teams:'url(madrid.png)',
    country:'url(france.png)',

}
let p5 = {
    playerName:'Vinicius',
    firstName:'Júnior',
    speed:99,
    shot:80,
    defence:70,
    pass:93,
    dribbel:99,
    playerPic:'url(vini.png)',
    teams:'url(madrid.png)',
    country:'url(barzil.png)',

}
let p6 = {
    playerName:'Kevin',
    firstName:'De-Bruyne',
    speed:79,
    shot:95,
    defence:75,
    pass:100,
    dribbel:90,
    playerPic:'url(kevin.png)',
    teams:'url(mancity.png)',
    country:'url(belgium.png)',

}
let p7 = {
    playerName:'Antony',
    firstName:'',
    speed:85,
    shot:78,
    defence:70,
    pass:85,
    dribbel:89,
    playerPic:'url(antony.png)',
    teams:'url(manunitd.png)',
    country:'url(barzil.png)',

}
let p8 = {
    playerName:'Brahim',
    firstName:'Diaz',
    speed:95,
    shot:90,
    defence:65,
    pass:90,
    dribbel:95,
    playerPic:'url(brahim.png)',
    teams:'url(madrid.png)',
    country:'url(maroc.png)',

}
let p9 = {
    playerName:'Lamine',
    firstName:'Yamal',
    speed:95,
    shot:95,
    defence:70,
    pass:98,
    dribbel:99,
    playerPic:'url(lamin.png)',
    teams:'url(barca.png)',
    country:'url(spain.png)',

}
let p10 = {
    playerName:'Rafinha',
    firstName:'',
    speed:85,
    shot:80,
    defence:65,
    pass:85,
    dribbel:80,
    playerPic:'url(rafinha.png)',
    teams:'url(barca.png)',
    country:'url(barzil.png)',

}
let p11 = {
    playerName:'Antoine',
    firstName:'Griezmann ',
    speed:85,
    shot:90,
    defence:75,
    pass:90,
    dribbel:85,
    playerPic:'url(grizmann.png)',
    teams:'url(atmadrid.png)',
    country:'url(france.png)',

}
let p12 = {
    playerName:'Rodrigo',
    firstName:'Goes',
    speed:90,
    shot:95,
    defence:80,
    pass:80,
    dribbel:90,
    playerPic:'url(rodrigo.png)',
    teams:'url(madrid.png)',
    country:'url(barzil.png)',

}
let p13 = {
    playerName:'Martin',
    firstName:'Odegaard ',
    speed:85,
    shot:90,
    defence:85,
    pass:95,
    dribbel:90,
    playerPic:'url(odigard.png)',
    teams:'url(arsenal.png)',
    country:'url(narway.png)',

}
let p14 = {
    playerName:'Erling ',
    firstName:'Håland  ',
    speed:90,
    shot:99,
    defence:90,
    pass:79,
    dribbel:79,
    playerPic:'url(haland.png)',
    teams:'url(mancity.png)',
    country:'url(narway.png)',

}
let players = [p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14]
let playerPic = document.getElementById('player-pic')
let teams = document.getElementById('teams')
let firstName = document.getElementById('first-name')
let playerName = document.getElementById('player-name')
let speed = document.getElementById('speed')
let shot = document.getElementById('shot')
let defence = document.getElementById('defence')
let pass = document.getElementById('pass')
let dribbel = document.getElementById('dribbel')
let powers = document.querySelectorAll('.power > div > div')
let country = document.getElementById('country')
let point = 0


function next(){
    point++
    if(point >= players.length){
        point = 0
    }
    pick()
}

function back(){
    point--
    if(point < 0){
        point = players.length-1
    }
    pick()
}

function pick(){
    firstName.innerHTML = players[point].firstName
    playerName.innerHTML = players[point].playerName
    speed.style.width = players[point].speed +'%'
    shot.style.width = players[point].shot +'%'
    defence.style.width = players[point].defence +'%'
    pass.style.width = players[point].pass +'%'
    dribbel.style.width = players[point].dribbel +'%'
    playerPic.style.backgroundImage = players[point].playerPic
    teams.style.backgroundImage = players[point].teams
    country.style.backgroundImage = players[point].country

    if(parseInt(defence.style.width) < 70){
        defence.style.background = 'red';
    }else if(parseInt(defence.style.width) < 80){
        defence.style.background = 'orange';
    }else{
        defence.style.background = 'green'
    }
    if(parseInt(speed.style.width) < 70){
        speed.style.background = 'red';
    }else if(parseInt(speed.style.width) < 80){
        speed.style.background = 'orange';
    }else{
        speed.style.background = 'green'
    }
    if(parseInt(pass.style.width) < 70){
        pass.style.background = 'red';
    }else if(parseInt(pass.style.width) < 80){
        pass.style.background = 'orange';
    }else{
        pass.style.background = 'green'
    }
    if(parseInt(dribbel.style.width) < 70){
        dribbel.style.background = 'red';
    }else if(parseInt(dribbel.style.width) < 80){
        dribbel.style.background = 'orange';
    }else{
        dribbel.style.background = 'green'
    }
    if(parseInt(shot.style.width) < 70){
        shot.style.background = 'red';
    }else if(parseInt(shot.style.width) < 80){
        shot.style.background = 'orange';
    }else{
        shot.style.background = 'green'
    }

}
pick();



console.log(innerHeight)
// 1395