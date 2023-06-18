//your JS code here. If required.
function removeSelectedColor() {
      var colorSelect = document.getElementById('colorSelect');
      var selectedIndex = colorSelect.selectedIndex;
      
      if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
      }
}