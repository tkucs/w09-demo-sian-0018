const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateBtn = document.querySelector('#calculate-wealth');

let data = [];

const config = {
    numRandom: 5,
    ratio: 1.5,
    showCondition: 2000000
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

function formatMoney(number) {

  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}

const updateDOM = (providedData = data) => {
    let tempData = providedData.map((item) => {
        return`<div class="person"><strong>${item.name}</strong> $${formatMoney(item.money)}</div>`
    });
    tempData = tempData.join('');
    //console.log('tempData', tempData);
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
}


const addData = (obj) => {
    data.push(obj);
    //console.log('data',data);
}

const getRandomUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    //console.log('random user data', data)
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*10000000)
    } 
    addData(newUser);
    updateDOM();
}

const getUsers = () => {
    for(let i=0; i < config.numRandom; i++){
        getRandomUser();
    }
}

getUsers();

// getRandomUser();
// getRandomUser();
// getRandomUser();

const changeBtnText = () => {
    addUserBtn.textContent = `Add User (${config.numRandom}) 👱‍♂️`;
    doubleBtn.textContent = `Raise Money * ${config.ratio} 💰`;
    showMillionairesBtn.textContent = `show > ${config.showCondition} 💵`;
}

changeBtnText();

const doubleMoney = () => {
    data = data.map( (user) => {
        return {
            name: user.name,
            money: user.money * config.ratio
        }
    });
    updateDOM();
}

const showMillionaries = () => {
    const filteredData = data.filter( (user) => {
        return user.money > config.showCondition;
    });
    //console.log('filteredData', filteredData);
    updateDOM(filteredData);
}

const sortByRichest = () => {
    data.sort( (a,b) => {
        return b.money - a.money
    });
    updateDOM();
}

const calculateWealth = () => {
    const wealth = data.reduce((wealth, user, index) =>{
        console.log('total, index, money',wealth, index, user.money);
        return wealth += user.money
    }, 0)
    main.innerHTML = main.innerHTML + `<h3>Total Wealth: <strong>$${formatMoney(wealth)}</strong></h3>`
}

calculateBtn.addEventListener('click', calculateWealth);
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaries);


sortBtn.addEventListener('click', sortByRichest);