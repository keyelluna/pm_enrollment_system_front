const content = document.querySelector("#enrollment-list")


// ==================  ADD
const addButton = document.querySelector(".addButton");

//POST API
addButton?.addEventListener('click', ()=> {
    let fullName = document.querySelector('#fullName').value;
    let course = document.querySelector('#course').value;
    let yearLevel = document.querySelector('#yearLevel').value;
    let email = document.querySelector('#email').value;
    let formData = {fullName, course, yearLevel, email};

    fetch('https://pm-enrollment-system-back.onrender.com/api/add', {
        method: 'POST',
        body:JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
    if (response.ok) {
        alert("Student Added Successfully!");
        location.reload();
    }
}).catch((error) => {
        console.log(error)
    })
})


window.addEventListener('load',() => {
    getProducts();
})

function getProducts(){
    let html = ""

    //FETCH API

    fetch('https://pm-enrollment-system-back.onrender.com/api/view', {mode:'cors'})

    .then(response=>{
        console.log(response);
        return response.json()
    })

    .then(data=>{
        console.log(data);
        data.forEach(element => {
            // html+=`<li> ${element.itemName} </li>` 
            // html+=`<li> ${element.unitPrice} </li>`
            // html+=`<li> ${element.quantity} </li>`
            // html+=`<li> ${element.supplier} </li>`

            html += `
                <tr>
                    <td>${element.fullName}</td>
                    <td>${element.course}</td>
                    <td>${element.yearLevel}</td>
                    <td>${element.email}</td>
                    <td>${element.dateEnrolled}</td>
                </tr>
            `;
        })

        content.innerHTML = html;
    })
    .catch(error=>{
        console.log(error)
    })
}



