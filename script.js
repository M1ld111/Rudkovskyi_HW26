const buttons = document.querySelectorAll('.smile');
const wrapper = document.querySelector('.wrapper');

buttons.forEach((button) => {
    let count = 0
    const span = document.createElement('span');

    button.addEventListener('click', () => {
        span.textContent = ''
        button.append(span)
        span.textContent = ++count
  })
});