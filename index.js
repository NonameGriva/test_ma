const Calculate = (str) => {
    console.log(str.value);
    const temp = str.value.toLowerCase();
    DisplayPandemicStart(temp);
    DisplayPandemicEnd(temp);
    DisolayStatistic(temp);
    str.value = '';
}

const DisplayPandemicEnd = (str) => {
    const infectedEl = infectElements(str);
    const el = document.getElementById('pandemicEnd');
    CreatePopulation(infectedEl, el);
}

const DisolayStatistic = (str) => {
    console.log(str)
    const elTotal = document.getElementById('total');
    const total = str.split('').map(l => l.replace('x', '')).join('');
    elTotal.innerHTML = elTotal.innerHTML + ' ' + total.length;
    let infectedArr = infectElements(str).split('');
    infectedArr = infectedArr.map(l => l.replace('0', ''));
    infectedArr = infectedArr.map(l => l.replace('x', ''));
    infectedArr = infectedArr.join('');
    const elInfected = document.getElementById('infected');
    elInfected.innerHTML = elInfected.innerHTML + ' ' + infectedArr.length;
    const elPercentage = document.getElementById('percentage');
    elPercentage.innerHTML = `${elPercentage.innerHTML} ${infectedArr.length / total.length * 100}%`;
}

const infectElements = (str) => {
    const arr = str.split('x');
    let tempArr = [];
    arr.forEach(el => {
        const temp = (el.includes('1')) ? el.split('').map(item => item.replace('0', '1')).join('') : el;
        tempArr.push(temp);
    });
    return tempArr.join('x');
}

const DisplayPandemicStart = (str) => {
    const el = document.getElementById('pandemicStart');
    CreatePopulation(str, el)
}

const CreatePopulation = (str, parentNode) => {
    for (let i = 0; i < str.length; i++) {
        let childEl = document.createElement('div');
        childEl.style.width = '24px';
        childEl.style.height = '24px';
        if (str[i] === '0') {
            childEl.style.backgroundColor = 'green';
        }
        else if (str[i] === '1') {
            childEl.style.backgroundColor = 'red';
        }
        else {
            childEl.style.backgroundColor = 'blue';
        }
        childEl.style.margin = '4px';
        parentNode.style.display = 'flex';
        parentNode.appendChild(childEl);
    }
}
