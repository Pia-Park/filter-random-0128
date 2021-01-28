//get result element
//get input filter element
//define an array variable

//add an event listener to filter element
filter.addEventListener('input', function(e){
    // filterData(e.???.???);
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div

}

function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        if() {
            //remove the class of .hide
        } else {
            //add the class of .hide
        }
    })
}