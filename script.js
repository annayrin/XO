
    let xTurn = true;
    let oTurn = false;
    let xClicks = [];
    let oClicks = [];
    let winningCombinations = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ];

    let endText = document.getElementById("end-text");

document.querySelectorAll(".grid-item").forEach(item =>
    item.addEventListener('click', function () {
    //console.log(this.value);

        if( !item.classList.contains('disabled')) {

            if(xTurn === true) {

                xClicks.push(this.value);
                endText.innerHTML = " O turn !";
                item.classList.add('x', 'disabled');
                winner(xClicks,oClicks,winningCombinations);

            } else{

                oClicks.push(this.value);
                endText.innerHTML = " X turn !";
                item.classList.add('o', 'disabled');
                winner(xClicks,oClicks,winningCombinations);

            }
            //console.log(xClicks);
           // console.log(oClicks);
           // item.classList.add(xTurn ? 'x' : 'o');
            //  oTurn = xTurn !== true;
            //oTurn = xTurn;

            xTurn = !xTurn; //ete false ar true terna i viceversa

        }

    })
)



    let result;

    function winner (x,o,win) {

        win.some(array => {
           // console.log(array);
            if (array.every(item => x.includes(item))){
       // console.log(array);
       // console.log(x);
                endText.innerHTML = "X Wins !";
                document.querySelectorAll('.grid-item')
                    .forEach(item => {item.classList.add('disabled')}
                    );

            }
            else if (array.every(item => o.includes(item))) {
                 console.log(array);
                 console.log(o);
                 endText.innerHTML = "O Wins !";

                    document.querySelectorAll('.grid-item').forEach(item => {
                        item.classList.add('disabled')}
                    );
            }

                else if ( array.every(item => o.includes(item) && x.includes(item)) && (x.length+o.length) >=9)
                 {
                    endText.innerHTML = "We have a tie!"; // not working
                }

        })

       // return endText.innerHTML = result;
    }

/*console.log(document.querySelector(".grid-item").classList.contains("x"));
    if( document.querySelector(".grid-item").classList.contains("x")) {
         winner(xClicks,oClicks,winningCombinations);
     }
         console.log(result);*/



    document.getElementById('restart').addEventListener('click', () => {
        document.querySelectorAll('.grid-item').forEach(item => {
            item.classList.remove('disabled', 'x', 'o');
            console.log(item);
        })
        endText.innerHTML = " X turn !";
        xTurn = true;
        xClicks = [];
        oClicks = [];
    })