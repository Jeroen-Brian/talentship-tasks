// Promise
function fetchData(url){
    return new Promise((resolve, reject) => {
         fetch(url)
        .then((response) => {
            if(!response.ok) {
                reject('Failed to fetch data. Status: '+ response.status)}
            else{
                    return response.json()
            }
        }).then((data) => resolve(data))
        .catch((error) => reject('Error occureed'))
    })
}


//Async-Await
async function fetchApiData(url) {
    try{
        console.log('Fetching data from the API');
        const result = await fetchData(url)
        return result
    } catch(error){
        console.error('Error :', error)
    }
}

let data = await fetchApiData('https://jsonplaceholder.typicode.com/posts/1')
console.log(data)


//Template literals
let nm = 'Jeroen'
console.log(typeof(data))
data.userId = 2
data.id = 201
data.title = `Hi there ${nm}!`
data.body = "Welcome to JavaScript Event Loops"
console.log(`${data.title}
${data.body}`)


//Spread Syntax
let dat1 = {...data, time : '10:30 PM'}
console.log(dat1)


//Destructuring assignment
const {userId, id, title, body, time} = dat1;
console.log(title)

//Arrow function with Default Parameters and REST Parameter
let info = (a=7, b=8, c=9, ...input) => {
    console.log(a**2)
    console.log(b**2)
    console.log(c**2)
    let arr = input.map((val) => val**2)
    return arr
}
console.log(info(1, 2, 3, 4, 5, 6))



