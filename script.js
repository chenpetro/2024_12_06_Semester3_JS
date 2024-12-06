// const names = ['tesla', 'BMW', 'Mercedes', 'opel']

// names.forEach(function(element, index){
//     console.log((element));
    
// })


// let filterNames = []


// for (let index = 0; index < names.length; index++) {
//     if (names[index].includes('o')) {
//         filterNames.push(names[index])
//     }
    
// }

// const filterNames = names.filter(function(element,index){
//     return element.includes('o')
// })
//  console.log(filterNames);

// const btn = document.getElementById('btn')

// function showHello() {
//     alert('hello')
// }
// btn.addEventListener('click', showHello)

const messi = {
    photo: '/image.png',
    footName: 'Leo Messi',
    speed: 90,
    shoot: 79,
    title: '2 world cups'
}

const footballer = document.querySelector('.messi')
footballer.innerHTML=`
 <img class="photo" src="${messi.photo}" alt="">
<p class = "name">${messi.footName}<p>
<p class = "name">${messi.speed}<p>
<p class = "name">${messi.shoot}<p>
<p class = "name">${messi.title}<p>
`


for (const key in messi) {
    console.log(key); 
    }

    const keys = Object.keys(messi)
console.log(keys);

const values = Object.values(messi)
console.log(values);
