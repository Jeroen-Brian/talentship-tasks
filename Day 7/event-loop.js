new Promise((response, reject) => 
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            title: 'Hi there,',
            body: 'Welcome to JavaScript Advanced - Event Loops.',
            date : 'Feb 4, 2025'
        }),
    })
    .then((response) => response.json())
    .then(data => console.log(data))
)