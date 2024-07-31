



const createPoster = () => {
   // TODO: Create poster here
   const poster = document.createElement("div")
   const poster_img = document.createElement("div")
   const img =document.createElement("img")
   const textContainer=document.createElement("div")
   const header1 = document.createElement('h1')
   const text = document.createElement("p")
   poster.classList.add("poster")
   poster_img.classList.add("poster-img")
   textContainer.classList.add("poster-text")
   img.src="images/poster.jpg"
   header1.textContent="កង្រីជាតិថ្មី"
   text.textContent="រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និង សៀវភៅរូបភាពសំរាប់កុមារជាដើម។"
   poster_img.appendChild(img)
   textContainer.appendChild(header1)
   textContainer.appendChild(text)
   container.appendChild(poster)
   poster.appendChild(poster_img)
   poster.appendChild(textContainer)
}

// Main code 
const container = document.querySelector('.container');
// TODO:  Call function to create 10 poster here
createPoster()