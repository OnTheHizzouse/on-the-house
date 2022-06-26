export function createPostModal(username) {
    //language=HTML
    let htmlModal = ``
    htmlModal += `
<button type="button" class="btn blue-btn" data-bs-toggle="modal" data-bs-target="#postModal" id="createPostBtn">
Create Post
</button>
<div class="modal" tabindex="-1" id="postModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create a New Post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<!--      todo: get better name-->
      <label for="item-name"><b>Item:</b></label>
      <input class="inputFields" placeholder="Enter Item name" name="item-name" id="create-item-name"  required>
      <br>
       <label for="description"><b>Describe the item to share:</b></label>
      <textarea class="inputFields " placeholder="Description of Item" name="description" id="create-description" required></textarea>
      <br>
<!--      todo change this to take in a photo-->
       <label for="photo"><b>Photo:</b></label>
      <input class="inputFields"  name="photo" id="create-photo"  required>
      <br>
<!--     todo possible calender integration -->
       <label for="date"><b>Post Expiration Date:</b></label>
      <input class="inputFields" placeholder="yyyy-mm-dd" name="date" id="create-expire-date"  required>
      <br>
       <label for="quantity"><b>Quantity:</b></label>
      <input class="inputFields" placeholder="Enter the number available" name="quantity" id="create-quantity"  required>
      <br>
      </div>
      <div class="modal-footer">
<!--          todo make sure the inputfields are not null-->
        <button type="button" class="btn btn-primary"  data-id="${username}" id="create-post-btn" data-bs-dismiss="modal" >Save Post</button>
      </div>
    </div>
  </div>
</div>
    `
    return htmlModal;
}

export function editPostModal(post) {
    console.log(post)
    //language=HTML
    let html = ``;
    html += `
    <button type="button" class="btn blue-btn" data-bs-toggle="modal" data-bs-target="#edit-${post.id}">
        Edit Post
    </button>

    <div class="modal" tabIndex="-1" id="edit-${post.id}">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit a Post</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!--      todo: get better name-->
                    <label For="item-name"><b>Edit Item Name:</b></label>
                    <input class="inputFields" value="${post.itemName}" name="item-name" id="itemName-${post.id}" required>
                        <br>
                            <label For="description"><b>Edit Description:</b></label>
                            <textarea class="inputFields " placeholder="" name="description"
                                      id="description-${post.id}" required>${post.description}</textarea>
                            <br>
                                <!--      todo change this to take in a photo-->
                                <label For="photo"><b>Edit Photo:</b></label>

                                <!--  vvvv Will eventually need to be changed to Post img. Maybe inside a div with these props (id="photo-post.id">post.photo<) Using Jquery-->
                                <input type="file" class="inputFields" accept="image/png, image/jpg"
                                       placeholder="Photo upload here.." name="photo" id="photo-${post.id}"
                                       required>

                                    <br>
                                        <!--     todo possible calender integration -->
                                        <label For="date"><b>Edit Expiration Date:</b></label>
                                        <input class="inputFields" placeholder="yyyy-mm-dd" name="date" value="${post.expiryDate}"
                                               id="expiryDate-${post.id}" required>
                                            <br>
                                                <label For="quantity"><b>Edit Quantity:</b></label>
                                                <input class="inputFields" placeholder="Enter the number available" value="${post.quantity}"
                                                       name="quantity" id="quantity-${post.id}" required>
                                                    <br>
                </div>
                <div class="modal-footer">

                    <!--          todo make sure the inputfields are not null-->
                    <button onClick="showAlert()" type="button" class="btn btn-success" id="save-edit-post-btn"
                            data-bs-dismiss="modal" data-id="${post.id}">SAVE
                    </button>
                </div>
            </div>
        </div>
    </div>`
    return html
}


export function createEventModal(post) {
    //language=HTML
    let postId = post.id
    let htmlModal = ``
     htmlModal += `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event${postId}">
Create Event
</button>
<div class="modal" tabindex="-1"  data-backdrop="static" id="event${postId}">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create an Event with ${post.user.username}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <label for="meet-date"><b>Meet up date::</b></label>
      <input class="inputFields" placeholder="yyyy-mm-dd" name="meet-date" id="meet-date">
      <br>

       <label for="meet-time"><b>Meet up time:</b></label>
      <input class="inputFields" placeholder="hh:tt" name="meet-time" id="meet-time"  required>
      <br>
        <label ><b>Meet up location:</b></label>
       <textarea class="inputFields"  rows="4" cols="50" placeholder="Put the location that you would like to meet up" id="meetUp"></textarea>
       
      <div class="modal-footer">

        <button type="button" class="btn btn-primary"  data-id="${postId}" id="create-post-btn" data-bs-dismiss="modal" >Save Post</button>
      </div>
    </div>
  </div>
</div>
</div>
    `

    return htmlModal
}

export function editUserProfileModal(user) {
    console.log(user)
    //language=HTML
    let html = ``;
    html += `
    <button type="button" class="btn blue-btn" data-bs-toggle="modal" data-bs-target="#edit-${user.id}">
        Edit Profile
    </button>

    <div class="modal" tabIndex="-1" id="edit-${user.id}">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Profile Information</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label For="username"><b>Edit Username:</b></label>
                    <input class="inputFields" value="${user.username}" name="username" id="username-${user.id}" required>
                        <br>
                            <label For="first-name"><b>Edit First Name:</b></label>
                            <input class="inputFields" value="${user.firstName}" name="first-name"
                                      id="first-name-${user.id}" required>
                            <br>
                            <label For="last-name"><b>Edit Last Name:</b></label>
                            <input class="inputFields" value="${user.lastName}" name="last-name"
                                      id="last-name-${user.id}" required>
                            <br>
                            <label For="geocoder"><b>Edit Address:</b></label>
                            <div id="geocoder"></div>
                            <div id="result"></div>
                            <div id="address"></div>
                            <br>
                            <label For="email"><b>Edit Email:</b></label>
                            <input class="inputFields" value="${user.email}" name="email"
                                      id="email-${user.id}" required>
                            <br>
                            <label For="phone-number"><b>Edit Phone Number:</b></label>
                            <input class="inputFields" name="phone-number" value="${user.phoneNumber}"
                                      id="phone-number-${user.id}" required>
                            <br>
                </div>
                <div class="modal-footer">

                    <!--          todo make sure the inputfields are not null-->
                    <button onClick="showAlert()" type="button" class="btn btn-success" id="save-edit-profile-btn"
                            data-bs-dismiss="modal" data-id="${user.id}" data-address="${user.address}" data-coordinates="${user.coordinates}">SAVE
                    </button>
                </div>
            </div>
        </div>
    </div>`
    return html
}

