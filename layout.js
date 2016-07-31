

// UPLOAD CLASS DEFINITION
// ======================
 
var dropZone = document.getElementById('drop-zone');
var csv;
var cards={}

if (JSON.parse(localStorage.getItem("cards")).q.length>0){ 
    max=JSON.parse(localStorage.getItem("cards")).q.length
    min=0
    number=Math.floor(Math.random() * (max - min)) + min
    console.log(number)
    currentQuestion=JSON.parse(localStorage.getItem("cards")).q[number]
    currentAns=JSON.parse(localStorage.getItem("cards")).a[number]
    document.getElementById("the question").innerHTML=currentQuestion
    document.getElementById("the answer").innerHTML=currentAns
}

var storeInfo=function(q,a){
    cards.q=q
    cards.a=a
    localStorage.setItem("cards", JSON.stringify(cards))


}
document.getElementById('fileinput').addEventListener('change', function(){
    for(var i = 0; i<this.files.length; i++){
        var file =  this.files[i];
        // This code is only for demo ...
        console.group("File "+i);
        console.log("name : " + file.name);
        console.log("size : " + file.size);
        console.log("type : " + file.type);
        console.log("date : " + file.lastModified);
        console.groupEnd();
    }
    var reader = new FileReader();

    reader.onload = handleReaderLoad;
    reader.readAsText(file, "UTF-8");
}, false);


var handleReaderLoad=function(event){
    console.log("reading the file")
    csv=event.target.result
    csv=csv.split(/\r\n|\n/)
    var questions=[]
    var answers=[]
    for(var line =0; line<csv.length; line++){
        card=csv[line].split(',')
        questions[line]=card[0]
        answers[line]=card[1]
        console.log(questions[line], answers[line])
    }
    storeInfo(questions,answers)
}




