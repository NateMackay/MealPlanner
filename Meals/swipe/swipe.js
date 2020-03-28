
$(document).ready(function () {
  var theme = prepareSimulator("photoGallery");
  $('#photoGallery').jqxScrollView({ theme: theme, width: '100%', height: '100%',  buttonsOffset: [0, 0] });
  initSimulator("photoGallery");
});

