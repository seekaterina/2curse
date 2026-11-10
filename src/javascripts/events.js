console.log('events')

const data_response = [
    {
        title: 'Городской маркет',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event1.html',
        category: [
            {
                category1: 'Категория 1'
            },
            {
                category2: 'Категория 2'
            }
        ]
    },
    {
        title: 'Вечер джаза',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event2.html',
        category: [
            {
                category2: 'Категория 2'
            }
        ]
    }
]




const cards = document.querySelectorAll('.card')
const filter_buttons = document.querySelectorAll('.filters .button')

const selection_categories = new Set()

filter_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        console.log(category)
        if(category == 'all'){
            //очистить выбранные категории
            selection_categories.clear()
        } else if(selection_categories.has(category)){
            selection_categories.delete(category)
        } else {
            selection_categories.add(category)
        }
        console.log(selection_categories)
        filter_buttons.forEach((button_validate) => {
            const category_validate = button_validate.dataset.category;
            if(category_validate == 'all'){
                if(selection_categories.size == 0){
                    button_validate.classList.add('active')
                } else{
                    button_validate.classList.remove('active')
                }
            } else{
                if(selection_categories.has(category_validate)){
                    button_validate.classList.add('active')
                } else{
                    button_validate.classList.remove('active')
                }
            }
        })

        cards.forEach((card) => {
            const card_category = card.dataset.filter;
            console.log(card_category)

            let is_active = false
            if(selection_categories.has(card_category) || selection_categories.size == 0){
                is_active = true
            }

            is_active ? card.classList.remove('hidden') : card.classList.add('hidden')
        })
    })
})