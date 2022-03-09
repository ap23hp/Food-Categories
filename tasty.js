 


 function createCard({strCategory,strCategoryThumb,strCategoryDescription}){


document.querySelector(".user-list").innerHTML+=`


<div class="container">

<h3>${strCategory} </h3>
<img class="user-pic" src="${strCategoryThumb}" alt="food">
<p class="user-dep">${strCategoryDescription}   </p>
</div>

`

 }
 

 
 async function getData(){
try{
 const data= await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php", 
	{"method": "GET"}

)
const resp= await data.json()
//console.log(resp)
let arr=resp.categories

arr.forEach((user) => {
    createCard(user)
});


}

catch(e){
console.log("oh no",e)
}

}


 
 getData();

