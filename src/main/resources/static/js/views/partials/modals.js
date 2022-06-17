export function createPostModal(username) {
    //language=HTML
    let htmlModal = ``
    htmlModal += `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postModal">
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
       <label for="photo"><b>photo:</b></label>
      <input class="inputFields" placeholder="this will be change later" name="photo" id="create-photo"  required>
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cancel-btn">Cancel</button> 
<!--          todo make sure the inputfields are not null-->
        <button type="button" class="btn btn-primary"  data-id="${username}" id="create-post-btn" data-bs-dismiss="modal" >Save Post</button>
      </div>
    </div>
  </div>
</div>
    `
    return htmlModal;
}