let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log('value', value);
console.log('btns', btns);

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
    //    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
    }

    if(count < 0){
        value.style.color = 'red'
    }

    if(styles.contains('increase')){
        count++;
    }

    if(count > 0){
        value.style.color = 'green'
    }

    if(styles.contains('reset')){
        count=0;
    }

    if(count === 0){
        value.style.color = 'rgb(34,34,34)'
    }

    value.textContent = count;
    console.log('value', value.textContent, value.style.color);
    });
})