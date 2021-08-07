const bodyResidet = document.querySelector('body');
const divMazeResident = document.querySelector('#divMaze');

let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

//criate to Maze
function criateMaze(maps){
    
    for(let counter = 0; counter < maps.length; counter++){
        maps[counter] = maps[counter].split('');
    }

    for(let counter = 0; counter < maps.length; counter++){
        let divLine = document.createElement('div');
        divLine.classList.add('lineMaze');
        divLine.classList.add(`line${counter}`);
        divMazeResident.appendChild(divLine);
        for (counter1 = 0; counter1 < maps[counter].length; counter1++){
            if(maps[counter][counter1] === 'W'){
                let divWall = document.createElement('div');
                divWall.classList.add('blockMaze');
                divWall.classList.add(`Div${counter1}`);
                divLine.appendChild(divWall);
            }
            if(maps[counter][counter1] === ' '){
                let divPath = document.createElement('div');
                divPath.classList.add('path');
                divPath.classList.add(`div${counter1}`);
                divLine.appendChild(divPath);
            }
            if(maps[counter][counter1] === 'S' ){
                let divMatch = document.createElement('div');
                divMatch.classList.add('match');
                divMatch.classList.add(`div${counter1}`);
                divLine.appendChild(divMatch);
            }

            if(maps[counter][counter1] === 'F'){
                let divArrival = document.createElement('div');
                divArrival.classList.add('arrival');
                divArrival.classList.add(`div${counter1}`);
                divLine.appendChild(divArrival);
            }
        }
        
        
    }

    console.log(maps);
    createplayer();
}

//create player
function createplayer(){
    const matchresident = document.querySelector('.match');
    let player = document.createElement('div');
    player.classList.add('player');
    matchresident.appendChild(player);
}

//movement Plyer

document.addEventListener('keydown', (event) =>{
    const player = document.querySelector('.player');
    const kayName = event.key;
    if(kayName === 'ArrowRight'){
        const blokNext =  player.parentElement.nextElementSibling;
        if (blokNext.classList[0] !== 'blockMaze'){
            player.classList.remove('playerReverse');
            blokNext.appendChild(player);
        }
        victoryCheck()
    }
    if(kayName === 'ArrowLeft'){
        const blockPrevios =  player.parentElement.previousSibling;
        if (blockPrevios.classList[0] !== 'blockMaze'){
            player.classList.add('playerReverse');
            blockPrevios.appendChild(player);
        }     
        victoryCheck() 
    }
    if(kayName === 'ArrowUp'){
        const classBlock = player.parentElement.classList[1];
        const classline = player.parentElement.parentElement.previousElementSibling.classList[1];
        const blockUp = document.querySelector('.'+classline+' .'+classBlock);
        if (blockUp.classList[0] !== 'blockMaze'){
            blockUp.appendChild(player);
        }
        victoryCheck()
        
    }
    if(kayName === 'ArrowDown'){
        const classBlock = player.parentElement.classList[1];
        const classline = player.parentElement.parentElement.nextElementSibling.classList[1];
        const blockDown = document.querySelector('.'+classline+' .'+classBlock);
        if (blockDown.classList[0] !== 'blockMaze'){
            blockDown.appendChild(player);
        }
        victoryCheck()
    }
})

//victory Check
function victoryCheck(){
    const player = document.querySelector('.player');
    const blockVictory = document.querySelector('.arrival');
    const divVictory = document.querySelector('#divVictory'); 
    if(blockVictory === player.parentElement){
        divMazeResident.classList.add('displayNone');
        divVictory.classList.add('displayFlex');
    }
}

//button reset
const buttonReset = document.querySelector('#button')
buttonReset.addEventListener('click', function(){
    document.location.reload();
})

criateMaze(map)