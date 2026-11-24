console.log('quiz')

const quiz = [
    {
        text: 'Вопрос №1',
        answers: [
            {
                text: 'Ответ №1',
                points: 0
            },
            {
                text: 'Ответ №2',
                points: 1
            },
            {
                text: 'Ответ №3',
                points: 2
            }
        ]
    },
    {
        text: 'Вопрос №2',
        answers: [
            {
                text: 'Ответ №1',
                points: 0
            },
            {
                text: 'Ответ №2',
                points: 1
            },
            {
                text: 'Ответ №3',
                points: 2
            }
        ]
    },
    {
        text: 'Вопрос №3',
        answers: [
            {
                text: 'Ответ №1',
                points: 0
            },
            {
                text: 'Ответ №2',
                points: 1
            },
            {
                text: 'Ответ №3',
                points: 2
            }
        ]
    }
]

const quiz_description = [
    {
        from: 0,
        to: 3,
        text: 'Вывод 1'
    },
    {
        from: 4,
        to: 6,
        text: 'Вывод 2'
    }
]

const container = document.querySelector('.quiz-container')
const progress = document.querySelector('.quiz-progress')
const question = document.querySelector('.quiz-question')
const answers = document.querySelector('.quiz-answers')
const back = document.querySelector('.quiz-back')
const result = document.querySelector('.quiz-result')
const title = document.querySelector('.quiz-result-title')
const description = document.querySelector('.result-description')

let current_step = 0;

const select_answers = []

function create_question () {
    answers.replaceChildren();

    console.log(quiz);
    console.log(current_step)
    console.log(quiz[current_step]);

    question.textContent = quiz[current_step].text
    progress.textContent = `Вопрос ${(current_step + 1)} из ${quiz.length}`

    quiz[current_step].answers.forEach((answer) => {
        console.log(answer)

        const button = document.createElement('button')
        button.type = 'button'
        button.textContent = answer.text
        button.classList.add('quiz-answer')
        //button.dataset.points = answer.points

        answers.append(button)

        button.addEventListener('click', () => {
            select_answers[current_step] = answer.points
            console.log(select_answers)
            if(quiz.length <= (current_step + 1)){
                container.classList.add('hidden')
                result.classList.remove('hidden')

                console.log(select_answers)

                let max_total = 0;

                let total = 0
                select_answers.forEach((point, i) => {
                    total += point
                    let max_total_step = 0
                    quiz[i].answers.forEach((total_point) => {
                        if(total_point.points > max_total_step){
                            max_total_step = total_point.points
                        }
                    })

                    max_total += max_total_step
                })

                title.textContent = `Результат: ${total} из ${max_total}`
                quiz_description.forEach((item) => {
                    if(total >= item.from && total <= item.to){
                        description.textContent = item.text
                    }
                })
            } else{
                current_step++
                create_question()
            }
        })
    })

    if(current_step == 0){
        back.classList.add('hidden')
    } else{
        back.classList.remove('hidden')
    }
}

create_question ()

back.addEventListener('click', () => {
    current_step--
    create_question()
})