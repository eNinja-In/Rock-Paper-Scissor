let score = document.querySelectorAll("p")
let choice = document.querySelectorAll(".choice")
let resetBtn = document.querySelector("#resetbtn")
let result = document.querySelector("#resultScore")

let compscore = 0
let userscore = 0
const deFaultScore = 0
let updatescore = () =>
    {
        score[0].innerText = userscore;
        score[2].innerText = compscore;
    }
updatescore()
result.innerText = "Score Board"
let compChoice = () =>
    {
        const options = ["paper", "rock", "scissor"]
        let compNum = Math.floor(Math.random()*3)
        return options[compNum]
    }
choice.forEach((select) => 
    {
        select.addEventListener("click" , () => {
            let userchoice = select.getAttribute("id")
            let comp = compChoice()
            checkWinner(comp,userchoice)
            updatescore()
        })
    })
let checkWinner = (computerChoice,userChoice) =>
    {
        if (computerChoice === userChoice)
            {
                result.innerText = " Game Tie"
            }
        else
        {
            if (userChoice == "rock")
                {
                    if(computerChoice == "paper")
                        {
                            compscore++;
                            result.innerText = "Rock < Paper\n\tComputer Win"

                        }
                    else
                    {
                        userscore++;
                        result.innerText = "Rock > Scissor\n\tYou Win"
                    }
                }
            else if(userChoice == "paper")
                {
                    if(computerChoice == "rock")
                        {
                            userscore++;
                            result.innerText = "Paper > Rock\n\tYou Win"

                        }
                    else
                    {
                        compscore++;
                        result.innerText = "Paper < Scissor\n\tComputer Win"
                    }
                }
            else
            {
                if(computerChoice == "paper")
                    {
                        userscore++;
                        result.innerText = "Scissor > Paper\n\tYou Win"

                    }
                else
                {
                    compscore++;
                    result.innerText = "Scissor < Rock\n\tComputer Win"
                }
            }
            
        }
    }