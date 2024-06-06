let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-game");

let turnO = true;

const winPattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

const resetGame = () => {
    turnO = true;
    enableBoxs();
    msgContainer.classList.add("hide");
}

boxs.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) {
            box.innerText = "O";
            box.style.color = "coral";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxs = () => {
    for(let box of boxs) {
        box.disabled = true;
    }
}

const enableBoxs = () => {
    for(let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}
 
const showWinner = (winner) => {
    disableBoxs();
    msg.innerText = `Congratulations! You are Winner. ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2])
        let par1Val = boxs[pattern[0]].innerText;
        let par2Val = boxs[pattern[1]].innerText;
        let par3Val = boxs[pattern[2]].innerText;
        
        if(par1Val != "" && par2Val != "" && par3Val != ""){
            if (par1Val === par2Val && par2Val === par3Val) {
                console.log("winner", par1Val);
                showWinner(par1Val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);