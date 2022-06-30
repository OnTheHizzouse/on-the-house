import {createEventModal, editPostModal} from "./modals.js";
import {eventsReceivedCardsBtn} from "./eventBtn.js";

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

            ${createEventModal(posts[i], posts[i].user.username)}

        </div>
        <img src='https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' class="img-fluid rounded-start my-2" alt="..." id="card-img-home">
        <p class="card-text" style="height: 60px">${posts[i].description}</p>
        <p class="card-text"><small>Quantity: ${posts[i].quantity}</small></p>
        <p class="card-text"><small>Expiry Date: ${posts[i].expiryDate.split("-").reverse().join("-")}</small></p>
        <p class="card-text"><small>Shared by: ${posts[i].user.username}</small></p>
      </div>
    </div>
</div>
`
    }
    return htmlCard
}


export function markerPostCards(user) {
    //language=HTML
    console.log(user)
    let htmlCard = ``
    for (let i = 0; i < user.posts.length; i++) {
        htmlCard += `
        <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 475px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">${user.posts[i].itemName}</h5>
            ${createEventModal(user.posts[i], user.username)}
        </div>
        <img src='https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' class="img-fluid rounded-start my-2" alt="..." id="card-img-home">
        <p class="card-text" style="height: 40px">${user.posts[i].description}</p>
        <p class="card-text"><small>Quantity: ${user.posts[i].quantity}</small></p>
        <p class="card-text"><small>Expiry Date: ${user.posts[i].expiryDate.split("-").reverse().join("-")}</small></p>
        <p class="card-text"><small>Shared by: ${user.username}</small></p>
      </div>
    </div>
</div>
`
    }
    return htmlCard
}

// export function myPostCards(post) {
//     //language=HTML
//     console.log(post)
//
//     let html = ``
//
//     for (let i = 0; i < post.length; i++) {
//         html += `
//          <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 475px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
//     <div>
//       <div class="card-body">
//         <div class="d-flex justify-content-between align-items-center">
//             <h5 class="card-title">${post[i].itemName}</h5>
//         </div>
//         <img src='https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' class="img-fluid rounded-start my-2" alt="..." id="card-img-home">
//         <p class="card-text" style="height: 40px">${post[i].description}</p>
//         <p class="card-text"><small>Quantity: ${post[i].quantity}</small></p>
//         <p class="card-text"><small>Expiry Date: ${post[i].expiryDate}</small></p>
//         <p class="card-text"><small>Shared by: ${post[i].user.username}</small></p>
//       </div>
//       <div class="d-flex mb-2 justify-content-around">
//               ${editPostModal(post[i])}
//               <button id="deleteBtn" type="button" class="btn btn-danger" onclick="confirmAction()" data-id="${post[i].id}">Delete</button>
//        </div>
//     </div>
// </div>
//
// <br>
// `
//     }
//     return html
//
// }

export function myPostCards(user) {
    //language=HTML
    let post = user.posts;
    let html = ``

    for (let i = 0; i < post.length; i++) {
        if (post.status === "OPEN") {
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
        <p class="card-text"><small>Expiry Date: ${post[i].expiryDate.split("-").reverse().join("-")}</small></p>
        <p class="card-text"><small>Shared by: ${user.username}</small></p>
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
        <p class="card-text"><small>Expiry Date: ${posts[i].expiryDate.split("-").reverse().join("-")}</small></p>



      </div>
    </div>
</div>
`
    }
    return htmlCard
}
// <p className="card-text"><small>Shared by: ${user}</small></p>

export function createEventsSentCards(arrayOfEvents, arrayOfPosts) {
    //language=HTML
    console.log(arrayOfPosts)
    let status = "";
    let html = ``;
    for (let i = 0; i < arrayOfEvents.length; i++) {
        if(arrayOfEvents[i].status === "PENDING") {
            status = `<div class="my-2 text-center" style="background-color: darkorange; color: white; border: 3px solid darkorange; width: 90%">Awaiting Approval</div>`
        } else if(arrayOfEvents[i].status === "OPEN") {
            status = `<div class="my-2 text-center" style="background-color: #2788bb; color: white; border: 3px solid #2788bb; width: 90%">Ready For Pickup</div>`
        }
        html += `
         <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 550px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title" data-item-name="received-${arrayOfEvents[i].postId}">${arrayOfPosts[i].itemName}</h5>
        </div>
        <p class="card-text">User Sharing: ${arrayOfEvents[i].donor.username}</p>
        <p class="card-text"><small>Pickup Time: ${arrayOfEvents[i].meetupTime}</small></p>
        <p class="card-text"><small>Pickup Date: ${arrayOfEvents[i].meetupDate.split("-").reverse().join("-")}</small></p>
        <p class="card-text"><small style="height: 50px">Pickup Location: ${arrayOfEvents[i].meetupLocation}</small></p>
      </div>
      <div class="d-flex justify-content-center">
      ${status}
      </div>
      
      <div class="d-flex mb-2 justify-content-center">
            <button id="event-cancel-btn" type="button" class="btn btn-danger" data-id="${arrayOfEvents[i].id}">Cancel</button>
       </div>
    </div>
</div>

<br>
`
    }
    return html;
}

export function createEventsReceivedCards(arrayOfEvents, arrayOfPosts) {
    //language=HTML
    console.log("LOOK HERE");
    console.log(arrayOfPosts)
    let status = "";
    let html = ``;
    for (let i = 0; i < arrayOfEvents.length; i++) {
        if(arrayOfEvents[i].status === "PENDING") {
            status = `<div class="my-2 text-center" style="background-color: darkorange; color: white; border: 3px solid darkorange; width: 90%">Awaiting Approval</div>`
        } else if(arrayOfEvents[i].status === "OPEN") {
            status = `<div class="my-2 text-center" style="background-color: #2788bb; color: white; border: 3px solid #2788bb; width: 90%">Ready For Pickup</div>`
        }
        html += `
         <div class="card mb-3 col-3 mx-2" style="max-width: 550px; height: 550px border-radius: 2%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title" data-item-name="received-${arrayOfEvents[i].postId}">${arrayOfPosts[i].itemName}</h5>
        </div>
        <p class="card-text">User Requesting Pickup: ${arrayOfEvents[i].requester.username}</p>
        <p class="card-text"><small>Pickup Time: ${arrayOfEvents[i].meetupTime}</small></p>
        <p class="card-text"><small>Pickup Date: ${arrayOfEvents[i].meetupDate.split("-").reverse().join("-")}</small></p>
        <p class="card-text"><small style="height: 50px">Pickup Location: ${arrayOfEvents[i].meetupLocation}</small></p>
      </div>
      <div class="d-flex justify-content-center">
      ${status}
      </div>
      
      <div class="d-flex mb-2 justify-content-around">
          ${eventsReceivedCardsBtn(arrayOfEvents[i])}
       </div>
      
    </div>
</div>

<br>
`
    }
    return html;
}