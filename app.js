
//get result element
const result = document.querySelector('#result');
//get input filter element
const input = document.querySelector('input');
//define an array variable
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    // filterData(e.???.???);    
    filterData(e.target.value);
});



getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json();

    // Clear result

    result.innerHTML = '';
    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div
    for(let r of results){
        const list = document.createElement('li');
        list.innerHTML = `<img src='${r.picture.large}'>
        <div class='user-info'>
        <h4>${r.name.first} ${r.name.last}</h4>
        <p>${r.location.city}</p>
        <p>${r.email}</p>
        </div>
        `;
        result.appendChild(list);
        listItems.push(list);
    }

}

function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            //remove the class of .hide
            item.classList.remove('hide');
        } else {
            //add the class of .hide
            item.classList.add('hide');
        }
    })
}