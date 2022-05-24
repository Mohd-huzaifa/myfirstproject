 let res="Mohd  Huzaifa";
 async function fetchText() {
    let response = await fetch('/text.txt');
    let data = await response.text();
     res += data;
}


 var respoText = document.getElementById('data');
 respoText.innerHTML='<span>'+res+'</span>';
 
