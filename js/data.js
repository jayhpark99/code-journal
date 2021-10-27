/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleUnload);
function handleUnload(event) {
  var myStorage = window.localStorage;
  var JSONdata = JSON.stringify(data);
  myStorage.setItem('javascript-local-storage', JSONdata);
}

var previousData = localStorage.getItem('javascript-local-storage');
if (previousData.entries !== null) {
  data.entries = JSON.parse(previousData).entries;
}
