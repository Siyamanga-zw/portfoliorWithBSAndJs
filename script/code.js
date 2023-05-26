let about = document.querySelector('section#about .row');
let aboutContent= [
    {
        image: 'https://i.postimg.cc/1zSD9y6H/C12-C2-Siyamanga-Zweni-1-removebg-preview.png',
        text: "A proactive Full stack developer student at Life Choices Academy with strong leadership skills and volunteering experience. Possess Public Speaking skills under Department of Water and Sanitation (DWS) and former Constitution Review Committee at Metanoia Residence in Stellenbosch. In addition, I am an attentive, intuitive, and flexible learner. I excel in teams while showcasing my individuality",  
cv: 'https://whimsical-dolphin-721a7d.netlify.app/files/zweni%20S%20CV.pdf',
firsta:"#contact"
    }
    
    
]//about
aboutContent.forEach((content)=>{
    about.innerHTML += `
    <div class="col-md-4">
    <img src="${content.image}" class="img-fluid rounded-start" alt="Profile">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title text-danger">ABOUT</h5>
      <p class="card-text">${content.text}</p>
      <a href="${contact.firsta}"> Let's Connect</a>
      <a  target="_blank" href="${content.cv}">Download CV </a>
    </div>
  </div>
    `
})

//edu
// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'Currently enrolled for a full stack developer, six months coding course at Life Choices.',
        place: 'Life Choices Academy',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: 'Completed second year of studies towards BCom Accounting degree.',
        place: 'University of Johannesburg',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2021,
        description: 'Completed first year of studies towards Bachelor of Commerse in Accounting',
        place: 'Stellenbosch University',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2019-2020,
        description: 'I ',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2018,
        description: 'I got my National Senior Cirtificate',
        place: 'Manzomthombo Senior Secondary',
        type: 'certificate',
        certificate: ''
    },
  
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
//
{

}