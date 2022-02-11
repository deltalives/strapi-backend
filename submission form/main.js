// console.log("hello");

//trying to post data through fetch
const element = document.querySelector('#post-request .article-id');
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch POST Request Example' })
};
fetch('https://delta-lives-strapi-backend.herokuapp.com/api/upload', requestOptions)
    .then(response => response.json())
    //send data to strapi
    .then(data => element.innerHTML = data.id );



//checking for required field
const form = document.getElementById('form');
const fileupload = document.getElementById('fileupload');
const button = document.getElementById('button');
  
fileupload.addEventListener('keyup', function (event) {
  isValidEmail = fileupload.checkValidity();
  
  if ( isValidEmail ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
  
button.addEventListener('click', function (event) {
  signUpForm.submit();
});




//action on submion
function demo() {
    document.getElementById("button").innerHTML = "Hello World";
}