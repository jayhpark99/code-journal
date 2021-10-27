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
  var JSONdata = JSON.stringify(data.entries);
  myStorage.setItem('javascript-local-storage', JSONdata);
  myStorage.setItem('data-view', data.view);
}
