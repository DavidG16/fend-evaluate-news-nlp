function uiUpdate(data) {

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }
      
      

    let polarity = capitalize(data.polarity)
    let subjectivity = capitalize(data.subjectivity)
    let polarity_confidence = `${100 * (data.polarity_confidence.toFixed(2))}%`
    const cardMarkup = ` 
    <div class="container">
        <p class="lead">What we found</p>
        <div class="inner-card">
            <div class="card-item"> 
                <p class="card-text bold">Polarity:</p>
                <p class="card-text">${polarity}</p>
            </div>
            <div class="card-item"> 
                <p class="card-text bold">Subjectivity:</p>
                <p class="card-text">${subjectivity}</p>
            </div >
            <div class="card-item"> 
                <p class="card-text bold">Polarity Confidence:</p>
                <p class="card-text">${polarity_confidence}</p>
            </div>
        </div>
    </div>
    `
    document.getElementById("results-card-id").innerHTML = cardMarkup
    document.getElementById("results-card-id").classList.remove("hide")
}

export {
    uiUpdate
}