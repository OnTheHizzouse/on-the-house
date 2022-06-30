

export function eventsReceivedCardsBtn(arrayOfEvents){
    //language=HTML
    console.log(arrayOfEvents)
    let status = arrayOfEvents.status
    let postId = arrayOfEvents.postId
    let html = ``
    if (status == 'OPEN'){
        html +=`
         <button id="decline-request-btn" type="button" class="btn btn-danger" data-id="${arrayOfEvents.id}">Cancel</button>
            <button id="final-accept-btn" type="button" class="btn" style="background-color: #6a9f5a; color: #FFFFFF" data-id="${arrayOfEvents.id}" data-postId="${postId}">Picked Up</button>
`
    }else {
        html +=`
         <button id="decline-request-btn" type="button" class="btn btn-danger" data-id="${arrayOfEvents.id}">Decline</button>
            <button id="accept-request-btn" type="button" class="btn" style="background-color: #6a9f5a; color: #FFFFFF" data-id="${arrayOfEvents.id}">Accept</button>
        `
    }
    return html

}