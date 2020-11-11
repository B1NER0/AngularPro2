function handleFileSelect(evt) {
    var files = evt.target.files;
  
    var f = files[0];
  
    var reader = new FileReader();
  
    reader.onload = (function(theFile) {
      return function(e) {
        // Do everything what you need with the file's content(e.target.result)
        console.log(e.target.result);
      };
    })(f);
  
    reader.readAsText(f);
  }
  
  document
    .getElementById("upload")
    .addEventListener("change", handleFileSelect, false);