let dialog = document.getElementById('myDialog')
let moreInfo = document.getElementById('moreInfo')
let closeDialog = document.getElementById('closeDialog')

moreInfo.addEventListener('click', function() {
    dialog.showModal()
})

closeDialog.addEventListener('click', function() {
    dialog.close()
})