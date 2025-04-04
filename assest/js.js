const name = document.querySelector('#fullName');
const major = document.querySelector('#yourmajor');
const university = document.querySelector('#university');
const email = document.querySelector('#youremail');
const youruninumber = document.querySelector('#youruninumber');
const submitbtn = document.querySelector("#click");
let information = [];
if(localStorage.getItem("information") != null){
    information = JSON.parse(localStorage.getItem("information"));
    displayinfo();
}
submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const info = {
        name : name.value,
        major : major.value,
        university : university.value,
        email : email.value,
        youruninumber : youruninumber.value,

    }
    information.push(info);
    localStorage.setItem("information",JSON.stringify(information));
    displayinfo();
});

function displayinfo(){
    const res = information.map((info,index)=>{
        return `
        <tr>
        <td class="text-light">${index}</td>
        <td class="text-light">${info.name}</td>
        <td class="text-light">${info.major}</td>
        <td class="text-light">${info.university}</td>
        <td class="text-light">${info.email}</td>
        <td class="text-light">${info.youruninumber}</td>

        </tr>
        `
    }).join('');
    document.querySelector("#data").innerHTML= res;
}
