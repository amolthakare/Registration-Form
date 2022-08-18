document.querySelector("#form").addEventListener("submit", formSubmit)
var arr = JSON.parse(localStorage.getItem("form")) || [];

function formSubmit(event) {
    event.preventDefault()
    var formObj = {
        title:document.querySelector("title").value,
        name: document.querySelector("#name").value,
        father: document.querySelector("#father").value,
        mother: document.querySelector("#mother").value,
        dob: document.querySelector("#dob").value,
        email: document.querySelector("#email").value,
        mobile: document.querySelector("#mobile").value,
        address: document.querySelector("#address").value,
        state: document.querySelector("#state").value,
        city: document.querySelector("#city").value,
    }

    var title = formObj.title;
    var name = formObj.name;
    var father = formObj.father;
    var mother = formObj.mother;
    var dob = formObj.dob;
    var email = formObj.email;
    var mobile = formObj.mobile;
    var address = formObj.address;
    var state = formObj.state;
    var city = formObj.city;

    if (name == "" || father == "" || mother == "" || email == "" || mobile=="" || address=="" || state=="" || city=="" || title=="") {
        alert("Fill all Fields")
        return
    } else {
        alert("Form Submitted Sucessfully")
        arr.push(formObj);
        window.location.reload();
        localStorage.setItem("form", JSON.stringify(arr));
        return
    }
}