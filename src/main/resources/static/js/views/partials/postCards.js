export function postCards(posts) {
    //language=HTML
    console.log(posts)
    let htmlCard = ``
    for (let i = 0; i < posts.length; i++) {
        htmlCard += `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src='${posts[i].itemPhoto}' class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${posts[i].itemName}</h5>
        <p class="card-text"><small class="text-muted">Quantity: ${posts[i].quantity}</small></p>
        <p class="card-text"><small class="text-muted">Expiry Date: ${posts[i].expiryDate}</small></p>
        <p class="card-text">${posts[i].description}</p>
        
        <button type="button" class="btn btn-primary">Request</button>
        <button type="button" class="btn btn-success">Message</button>
       
      </div>
    </div>
  </div>
</div>
`
    }
    return htmlCard
}
