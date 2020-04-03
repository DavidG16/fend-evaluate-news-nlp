function handleSubmit(e) {
    e.preventDefault()

    const input_url = document.getElementById("news-id").value

    if (Client.validURL(JSON.parse(JSON.stringify(input_url)))){
        console.log("Valid URL")
        console.log('Fetching News Article')
        console.log(input_url)
        console.log(JSON.parse(JSON.stringify(input_url)))

        fetch('http://localhost:3000/sentiment', {
            method: 'POST',
            mode: 'cors',
            headers:  {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: input_url})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            Client.uiUpdate(data)
        })
    } else {
        console.log("Error")
    }
}

export {
    handleSubmit
}

  