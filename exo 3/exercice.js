let libButton = document.getElementById('lib-button');
let libIt = function() {
    let name = document.getElementById("noun").value;
    let adj = document.getElementById("adjective").value;
    let namePerson = document.getElementById("person").value;
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = name + " " + adj + " " + namePerson;

};
libButton.addEventListener('click', libIt);








