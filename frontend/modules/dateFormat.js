export default function dateFormat(className) {
    const el = document.querySelectorAll(className)
    el.forEach(elemtent => {
        if(elemtent.innerHTML !== '') {
            const formated = elemtent.innerHTML.split('-')
            elemtent.innerHTML = `${formated[2]}/${formated[1]}/${formated[0]}`
        }
    })
}

