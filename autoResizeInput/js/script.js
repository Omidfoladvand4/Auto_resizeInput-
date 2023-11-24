const textArea = document.querySelector('textarea')
textArea.addEventListener('keyup' , (e) => {
    let size = e.target.scrollHeight;
    textArea.style.height = `${size}px`
})


