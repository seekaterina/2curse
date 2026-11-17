console.log('events')



const data_response = [
    {
        sort: 1,
        title: 'Городской маркет',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event1.html',
        category: [
            {
                id: 'category1',
                title: 'Категория 1'
            },
            {
                id: 'category2',
                title: 'Категория 2'
            }
        ]
    },
    {
        sort: 2,
        title: 'Вечер джаза',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event2.html',
        category: [
            {
                id: 'category2',
                title: 'Категория 2'
            }
        ]
    },
    {
        sort: 3,
        title: 'Прогулка с гидом',
        description: 'Маршрут по городу с историями о знакомых местах.',
        link: 'event3.html',
        category: [
            {
                id: 'category3',
                title: 'Категория 3'
            }
        ]
    },
    {
        sort: 4,
        title: 'Городской маркет 2',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event1.html',
        category: [
            {
                id: 'category1',
                title: 'Категория 1'
            }
        ]
    },
    {
        sort: 5,
        title: 'Вечер джаза 2',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event2.html',
        category: [
            {
                id: 'category2',
                title: 'Категория 2'
            }
        ]
    },
    {
        sort: 6,
        title: 'Прогулка с гидом 2',
        description: 'Маршрут по городу с историями о знакомых местах.',
        link: 'event3.html',
        category: [
            {
                id: 'category3',
                title: 'Категория 3'
            }
        ]
    },
    {
        sort: 7,
        title: 'Городской маркет 3',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event1.html',
        category: [
            {
                id: 'category1',
                title: 'Категория 1'
            }
        ]
    },
    {
        sort: 8,
        title: 'Вечер джаза 3',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event2.html',
        category: [
            {
                id: 'category2',
                title: 'Категория 2'
            }
        ]
    },
    {
        sort: 9,
        title: 'Прогулка с гидом 3',
        description: 'Маршрут по городу с историями о знакомых местах.',
        link: 'event3.html',
        category: [
            {
                id: 'category3',
                title: 'Категория 3'
            }
        ]
    },
    {
        sort: 10,
        title: 'Городской маркет 4',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event1.html',
        category: [
            {
                id: 'category1',
                title: 'Категория 1'
            }
        ]
    },
    {
        sort: 11,
        title: 'Вечер джаза 4',
        description: 'Локальные бренды, мастерские и уличная еда на одной площадке. Можно познакомиться с мастерами, посмотреть их работы и выбрать подарки.',
        link: 'event2.html',
        category: [
            {
                id: 'category2',
                title: 'Категория 2'
            }
        ]
    },
    {
        sort: 12,
        title: 'Прогулка с гидом 4',
        description: 'Маршрут по городу с историями о знакомых местах.',
        link: 'event3.html',
        category: [
            {
                id: 'category3',
                title: 'Категория 3'
            }
        ]
    },
]

const filter_buttons = document.querySelectorAll('.filters .button')
const selection_categories = new Set()
const cards_container = document.querySelector('.cards');
const card_template = document.querySelector('#event-card')
const sort_select = document.querySelector('.sort-select')

function render_card(event){
    const card = card_template.content.cloneNode(true)

    card.querySelector('h2').textContent = event.title;
    card.querySelector('p').textContent = event.description;
    event.category.forEach((item) => {
        const category_tag = document.createElement('span')
        category_tag.classList.add('category')
        category_tag.textContent = item.title

        card.querySelector('.card-category').append(category_tag)
    })
    card.querySelector('.button').href = event.link
        


    cards_container.append(card)
}

data_response.forEach((event) => {
    render_card(event)  
})




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

        update_cards()
    })
})

sort_select.addEventListener('change', () => {
    console.log(sort_select.value)
    if (sort_select.value === 'title-ask'){
        data_response.sort((a, b) => {
            return a.title.localeCompare(b.title, 'ru')
        })
    } else if (sort_select.value == 'title-desk'){
        data_response.sort((a, b) => {
            return b.title.localeCompare(a.title, 'ru')
        })
    } else {
        data_response.sort((a, b) => {
            return a.sort - b.sort
        })
    }

    update_cards()
})

function update_cards () {
    cards_container.replaceChildren()

    data_response.forEach((event) => {
        let is_active = false
        event.category.forEach((category) => {
            if(selection_categories.has(category.id) || selection_categories.size == 0){
                is_active = true
            }
        })
        if(is_active) render_card(event)
    })
}