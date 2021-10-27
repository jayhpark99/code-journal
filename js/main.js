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
  var enTree = renderEntry(dataObj);
  $ul.prepend(enTree);
  $noEntriesMessage.className = 'text-center hidden';
  changeView('entries');
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
  h2.setAttribute('class', 'shift-down');
  colDiv2.appendChild(h2);
  var p = document.createElement('p');
  p.textContent = entry.notes;
  colDiv2.appendChild(p);
  return li;
}

var $ul = document.querySelector('ul');
var $noEntriesMessage = document.querySelector('.text-center');

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var enTree = renderEntry(data.entries[i]);
    $ul.appendChild(enTree);
  }
  if (data.entries.length !== 0) {
    $noEntriesMessage.className = 'text-center hidden';
  }
  changeView(data.view);
}
);

var $navItem = document.querySelector('a');
$navItem.addEventListener('click', checkView);

var $new = document.querySelector('.new');
$new.addEventListener('click', checkView);

function checkView() {
  changeView(event.target.getAttribute('data-view'));
}

var $views = document.querySelectorAll('.view');

function changeView(viewType) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === viewType) {
      $views[i].className = '';
    } else {
      $views[i].className = 'hidden';
    }
  }
  data.view = viewType;
}
