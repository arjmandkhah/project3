let html=""
let fetchData=()=>{
    fetch("http://localhost:4000/contact")
    .then((data)=>data.json())
    .then((res)=>{
        html+=`<ul>
    <nav>`
        res.forEach(element => {
            html+=`<li><a href="">${element.text}</a><i class="${element.icon}"></i></li>`
        });
        html+=`
            </nav>
</ul>`
$("div#content").innerHTML+=html
    })

}
fetchData();