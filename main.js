// Create a variable
let filterInput = document.getElementById('filterInput');


// Create an Event listener

filterInput.addEventListener('keyup', filterNames)



// Create a function for filter names 

function filterNames() {
    // Get the input value

    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get the ul

    let ul = document.getElementById('names');

    // Get the lis from ul , an array would also be created from this
  let li = ul.querySelectorAll('li.collection-item');

  // Loop through 

for( let i=0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = '';
    } else {
        li[i].style.display = 'none'
    }
}
}
