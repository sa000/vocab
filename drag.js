
dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        console.log("leaving")
        return false;
    }

function handleDragOver(evt) {
    this.className = 'upload-drop-zone drop';
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

function handleFileSelect(evt) {
    this.className = 'upload-drop-zone';
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files[0]; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    var reader=new FileReader()
    reader.onload = handleReaderLoad(evt);
    console.log("finished drag")

  }
})
