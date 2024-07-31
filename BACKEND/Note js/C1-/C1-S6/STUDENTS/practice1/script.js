// GET URL : https://reqres.in/api/unknown/2
function afterSuccess(respon){
    let p = document.querySelector('#theText')
    console.log(respon.data.data)
    p.textContent=respon.data.data.name
}
let request = "https://reqres.in/api/unknown/2";
axios.get(request).then(afterSuccess);