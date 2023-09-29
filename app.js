const questions = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'php',
        'c': 'css',
        'd': 'javascript',
        'correct': 'a'
    },
    {
        'que': 'In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element',
        'a': 'display:left;',
        'b': 'display:horizontal;',
        'c': 'display:inline;',
        'd': 'None',
        'correct': 'a'
    },
    {
        'que': 'Select the property used to create space between the element’s border and inner content?',
        'a': 'margin',
        'b': 'border',
        'c': 'padding',
        'd': 'spacing',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'php',
        'c': 'css',
        'd': 'javascript',
        'correct': 'a'
    },

];
let index = 0;
let totalquestions = questions.length;
let right = 0, wrong = 0;
const question = document.getElementById('question');
const options = document.querySelectorAll("input[type='radio']");
const loadQuestions = () => {
    if (index == totalquestions) {
        return endquiz();
    }
    reset();
    const data = questions[index];
    question.innerText = `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}
document.querySelector(".btn").addEventListener("click",
    () => {
        console.log("clicked");
        const data = questions[index];
        const ans = getanswer();
        if (ans === data.correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        loadQuestions();
        return;
    }
)
const getanswer = () => {
    let answer;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }
    )
    return answer;

}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align :center">
       <h3> Thank you for playing the quiz </h3>
       <h2>${right} / ${totalquestions} are correct</h2>
    </div>
    `
}
loadQuestions();