import {editPostModal} from "./modals.js";

export function postCards(posts) {
    //language=HTML
    console.log(posts)
    let htmlCard = ``
    for (let i = 0; i < posts.length; i++) {
        htmlCard += `
        <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 475px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">${posts[i].itemName}</h5>
            <button type="button" class="btn request-home-card-btn mx-1">Request</button>
        </div>
        <img src='https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' class="img-fluid rounded-start my-2" alt="..." id="card-img-home">
        <p class="card-text" style="height: 60px">${posts[i].description}</p>
        <p class="card-text"><small>Quantity: ${posts[i].quantity}</small></p>
        <p class="card-text"><small>Expiry Date: ${posts[i].expiryDate}</small></p>
        <p class="card-text"><small>Shared by: ${posts[i].user.username}</small></p>
      </div>
    </div>
</div>
`
    }
    return htmlCard
}

export function myPostCards(post) {
    //language=HTML
    console.log(post)

    let html = ``

    for (let i = 0; i < post.length; i++) {
        html += ` 
         <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 475px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">${post[i].itemName}</h5>
        </div>
        <img src='https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' class="img-fluid rounded-start my-2" alt="..." id="card-img-home">
        <p class="card-text" style="height: 40px">${post[i].description}</p>
        <p class="card-text"><small>Quantity: ${post[i].quantity}</small></p>
        <p class="card-text"><small>Expiry Date: ${post[i].expiryDate}</small></p>
        <p class="card-text"><small>Shared by: ${post[i].user.username}</small></p>
      </div>
      <div class="d-flex mb-2 justify-content-around">
              ${editPostModal(post[i])}
              <button id="deleteBtn" type="button" class="btn btn-danger" onclick="confirmAction()" data-id="${post[i].id}">Delete</button>
       </div>
    </div>
</div>
 
<br>
`
    }
    return html

}

export function landingCards(posts) {
    //language=HTML
    console.log(posts)
    let htmlCard = ``
    for (let i = 0; i < posts.length; i++) {
        htmlCard += `
        <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 475px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">${posts[i].itemName}</h5>
        </div>
        <img src='https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' class="img-fluid rounded-start my-2" alt="..." id="card-img-home">
        <p class="card-text" style="height: 60px">${posts[i].description}</p>
        <p class="card-text"><small>Quantity: ${posts[i].quantity}</small></p>
        <p class="card-text"><small>Expiry Date: ${posts[i].expiryDate}</small></p>
        <p class="card-text"><small>Shared by: ${posts[i].user.username}</small></p>
      </div>
    </div>
</div>
`
    }
    return htmlCard
}