const questions=[
    {
        'que': "which of the following markup language ?",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
         'correct':'a'
    },
    {
        'que': 'What year was Javascript launched ?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct':'b',
    },
    {
        'que':'What does CSS stand for ?',
        'a':'Hypertext Markup Language',
        'b': 'Cascading Style sheet',
        'c': 'json Object Notation',
        'd': 'Helicopter terminal Motorboates lamborginis',
        'correct':'b',
    }
]

let index = 0;
let total=questions.length;
let correct = 0,
   incorrect=0;

const queBox=document.getElementById('que');
const optionInput =document.querySelectorAll('.options');
   const loadQuestion =()=>{
        
        if(index===total)
        {
            return endQuiz();
        }
        reset();
        const data = questions[index]
        // console.log(data);
        queBox.innerText=`${index +1}) ${data.que}`;
        optionInput[0].nextElementSibling.innerText = data.a;
        optionInput[1].nextElementSibling.innerText = data.b;
        optionInput[2].nextElementSibling.innerText = data.c;
        optionInput[3].nextElementSibling.innerText = data.d;
   }
 

   document.querySelector('.btn').addEventListener("click",
   function (){
    const data=questions[index]
    const ans =getAnswer()
    if(ans===data.correct){
        correct++;
    }else{
        incorrect++;
    }
    index++;
    loadQuestion();
   }
)


   const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        (input)=> {
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
   }
   const reset= () =>{
    optionInput.forEach(
        (input)=> {
            input.checked = false;
        }
    )
   }

   const endQuiz = () =>{
    document.getElementById("box").innerHTML= `
          <div class="col" style= "Color : red">
          <h3 class="w-100" style= "margin: 137px 0px 100px 170px"> Hii,you've scored ${correct}/${total} </h3>
          </div>
         `
   }
// initial call
loadQuestion(index);