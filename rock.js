var imageCordinate = '0';
var dictionary = { // dictionary data structure
    rock : '0',
    scissors : '-142px',
    paper : '-284px'

}


function computerSelect (imageCordinate) {
    return Object.entries(dictionary).find(function(v) {
        return v[1] === imageCordinate;
    })[0];
} // to get rid of hard coding


var interval;

function intervalMaker(){
    interval = setInterval(function() {
        if(imageCordinate === dictionary.rock){
            imageCordinate = dictionary.scissors;
        }else if(imageCordinate === dictionary.scissors){
            imageCordinate = dictionary.paper;
        }else{
            imageCordinate = dictionary.rock;
        }
        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + imageCordinate +' 0';
    }, 100);
}

 intervalMaker();

var scoreChart = {
    scissors : 1,
    rock : 0,
    paper : -1
};

document.querySelectorAll('.btn').forEach( function(btn){ // 버튼이 유사배열
    btn.addEventListener('click', function (){
        clearInterval(interval);
        
        setTimeout(function () {
             intervalMaker();
        }, 1000)

        var myChoice = this.textContent;
        var myScore = scoreChart[myChoice];
        var computerScore = scoreChart[computerSelect(imageCordinate)];
        var scoreDifference = myScore - computerScore;
        if(scoreDifference){
            console.log('You played a draw!');

        } else if([-1,2].includes(scoreDifference)){
            // 또는(or)를 줄일 수 있다.
            console.log('You won!');

        }else{
            console.log('You lost!');

        }

        
    });
});

// 가위 : 1, 바위 : 0, 보 : -1
// 나\컴퓨터 가위   바위      보
//    가위  1 1   1 0     1 -1
//    바위  0 1   0 0     0 -1
//     보  -1 1   -1 0    -1 -1