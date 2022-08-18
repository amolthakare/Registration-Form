// var arr = JSON.parse(localStorage.getItem("arr")) || [];
// console.log(arr);

// var arr = JSON.parse(localStorage.getItem("arr"));
// console.log(arr);

var arr1 = JSON.parse(localStorage.getItem("form"))
console.log(arr1);

function displayData(arr) {
    document.querySelector(".displayRegistrations").innerHTML="";

    arr1.map(function (elem, index, array){

        var div = document.createElement("div");
        div.setAttribute("id","data");

        var name = document.createElement("p");
        name.innerText = elem.name;
        name.setAttribute("class","name")

        var father = document.createElement("p");
        father.innerText = elem.father;
        father.setAttribute("class","father")

        var mother = document.createElement("p");
        mother.innerText = elem.mother;
        mother.setAttribute("class","mother")

        var dob = document.createElement("p");
        dob.innerText = elem.dob;
        dob.setAttribute("class","dob")

        var email = document.createElement("p");
        email.innerText = elem.email;
        email.setAttribute("class","email")

        var mobile = document.createElement("p");
        mobile.innerText = elem.mobile;
        mobile.setAttribute("class","mobile")

        var address = document.createElement("p");
        address.innerText = elem.address;
        address.setAttribute("class","address")

        var state = document.createElement("p");
        state.innerText = elem.state;
        state.setAttribute("class","state")

        var city = document.createElement("p");
        city.innerText = elem.city;
        city.setAttribute("class","city")

        let btn = document.createElement("button");
        btn.innerText="Delete";
        btn.setAttribute("id","btn");
        btn.addEventListener("click",function() {
            deleteItem(index);
        })

        div.append(name,father,mother,dob,email,mobile,address,state,city,btn);
        document.querySelector(".displayRegistrations").append(div);
    })
}

displayData(arr1);

function deleteItem(index){
    arr1.splice(index, 1);
    window.location.reload();
    localStorage.setItem("form",JSON.stringify(arr1));
    displayData(arr1);
}