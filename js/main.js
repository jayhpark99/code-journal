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

function renderEntry(entry) {
  var li = document.createElement('li');
  var rowDiv = document.createElement('div');
  rowDiv.setAttribute('class', 'row');
  li.appendChild(rowDiv);
  var colDiv1 = document.createElement('div');
  colDiv1.setAttribute('class', 'column-half');
  rowDiv.appendChild(colDiv1);
  var img = document.createElement('img');
  img.setAttribute('src', entry.photoUrl);
  colDiv1.appendChild(img);
  var colDiv2 = document.createElement('div');
  colDiv2.setAttribute('class', 'column-half');
  rowDiv.appendChild(colDiv2);
  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  colDiv2.appendChild(h2);
  var p = document.createElement('p');
  p.textContent = entry.notes;
  colDiv2.appendChild(p);
  return li;
}
