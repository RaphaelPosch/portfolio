const designFilterCheckboxes = document.querySelectorAll('ul li input');
const projectSections = document.querySelectorAll('.project');

const FILTER_ID_ATTRIBUTE = 'data-filter';
const FILTER_ID_ALL = 'all';
const HIDDEN_UTILITY_CLASS = 'hidden';

designFilterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        if(event.target.checked && event.target.id !== FILTER_ID_ALL) {
            projectSections.forEach(section => {
                if(section.getAttribute(FILTER_ID_ATTRIBUTE) !== event.target.id) {
                    section.classList.add(HIDDEN_UTILITY_CLASS);
                } else {
                    section.classList.remove(HIDDEN_UTILITY_CLASS);
                }
            })
        }
    })
})
