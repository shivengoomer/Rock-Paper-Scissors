let score=JSON.parse(localStorage.getItem('score'))
        ||{
            Wins:0,
            Loses:0,
            Ties:0
        };
        
        function Game(playermove) {
            let result = '';
            let cm = ComputerMove();
            
            if (playermove === 'Scissors') {
                if (cm === 'Rock') {
                    result = 'You lose!';
                } else if (cm === 'Scissors') {
                    result = 'Tie';
                } else {
                    result = 'You won!';
                }
            } else if (playermove === 'Rock') {
                if (cm === 'Paper') {
                    result = 'You lose!';
                } else if (cm === 'Rock') {
                    result = 'Tie';
                } else {
                    result = 'You won!';
                }
            } else if (playermove === 'Paper') {
                if (cm === 'Scissors') {
                    result = 'You lose!';
                } else if (cm === 'Paper') {
                    result = 'Tie';
                } else {
                    result = 'You won!';
                }
            }
            if(result === 'You won!'){
                score.Wins+=1;
            }
            else if (result === 'Tie'){
                score.Ties+=1;
            }
            else if (result === 'You lose!'){
                score.Loses+=1;
            }
            localStorage.setItem('score',JSON.stringify(score));
            UpdateScore(result,playermove,cm);
        }
        function UpdateScore(result,playermove,cm){

            document.querySelector('.js-score').innerHTML=`Wins:${score.Wins}, Loses:${score.Loses}, Ties:${score.Ties}`;
            document.querySelector('.js-result').innerHTML=result;
            document.querySelector('.js-move').innerHTML=`You
            <img src='images/${playermove}.png' class="move-icon">
            <img src='images/${cm}.png' class="move-icon">
            Computer`;
        }

        function ComputerMove() {
            let randomNum = Math.random();
            if (randomNum <= 1/3) {
                return 'Rock';
            } else if (randomNum <= 2/3) {
                return 'Paper';
            } else {
                return 'Scissors';
            }
        }
        document.querySelector('.js-score').innerHTML=`Wins:${score.Wins}, Loses:${score.Loses}, Ties:${score.Ties}`;
        let ifautoplay=false;
        let intervalId;
        function autoPlay(){
            if(!ifautoplay){
            intervalId=setInterval(function(){
                const playermove=ComputerMove();
                Game(playermove);
            },1000);
            ifautoplay=true;
        }
        else{
            clearInterval(intervalId);
            ifautoplay=false;
        }
    }
    document.querySelector('.move-button-rock').addEventListener('click', () => { Game('Rock'); });
    document.querySelector('.move-button-paper').addEventListener('click', () => { Game('Paper'); });
    document.querySelector('.move-button-sci').addEventListener('click', () => { Game('Scissors'); });
    

    document.body.addEventListener('keydown',(event)=>{console.log(event.key);});
    document.body.addEventListener('keydown',()=>{
        if(event.key==='r'){
            Game("Rock");
        }
        else if(event.key==='p'){
            Game('Paper');
        }
        else if (event.key==='s'){
            Game('Scissors');
        }
    } );