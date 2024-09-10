const access='gw5Z2r-QZpBJHrpgoIXnlL3a8pifyIGj3wMA9XQhw4Y'

const form=document.getElementById('form')
const searchbox=document.getElementById('search-box')
const searchresult=document.getElementById('search-result')
const btn2=document.getElementById('btn2')

let keword="";
let page=1;

async function searchimage() {
    keword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keword}&client_id=${access}&per_page=6`;

    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchresult.innerHTML=" ";
    }
    const results=data.results;

    results.map((result)=>{
        const img=document.createElement("img");
        img.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";   

        imagelink.appendChild(img);
        searchresult.appendChild(imagelink);
    })
    btn2.style.display='block';
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchimage();
})

btn2.addEventListener('click',()=>{
    page++;
    searchimage();
})