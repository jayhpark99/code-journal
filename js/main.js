/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photourl');
var $img = document.querySelector('.photo');
var $title = document.querySelector('.title');
var $notes = document.querySelector('.notes');
var $submit = document.querySelector('form');
$photoUrl.addEventListener('input', changePhoto);
function changePhoto(event) {
  $img.setAttribute('src', event.target.value);
}

$submit.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  var dataObj = {
    title: $title.value,
    photoUrl: $photoUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId += 1;
  data.entries.unshift(dataObj);
  $submit.reset();
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
}
