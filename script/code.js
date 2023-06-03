let about = document.querySelector('section#about .row');
let aboutContent= [
    {
        image: 'https://i.postimg.cc/1zSD9y6H/C12-C2-Siyamanga-Zweni-1-removebg-preview.png',
        text: "I am a proactive  aspiring full-stack developer at Life Choices Academy. I have strong leadership skills and volunteering experience. I also possess Public Speaking skills, and was nominated in 2017 National Public Speaking winners under Department of Water and Sanitation (DWS). Former Constitution Review Committee at Metanoia Residence in Stellenbosch University. In addition, I am an attentive, intuitive, and flexible learner. I excel in teams while showcasing my individuality",  
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
      <h5 class="card-title text-danger">ABOUT ME</h5>
      <p class="card-text">${content.text}</p>
      <a href="${contact.firsta}"> Let's Connect</a>
      <a  target="_blank" href="${content.cv}">Download CV </a>
    </div>
  </div>
    `
})
let projects = document.querySelector('section#projects .row')
let projectsContenet= [

    {
        id:1,
        image:'https://i.postimg.cc/d3kBbZyw/0x0.webp',
        title:'To-Do List',
        github:'https://github.com/siyamanga22/To-doListChallenge.git',
        netify:'https://ornate-cannoli-56c76e.netlify.app/',
    },
   
    {
        id:2,
        image:'https://i.postimg.cc/fywH0rGg/2023-06-03-png-bmi.png',
        title:'BMI Calculator',
        github:'https://github.com/siyamanga22/BMICalculator.git',
        netify:'https://siyamangabmi.netlify.app/',
    },
    {
        id:3,
        image:'https://i.postimg.cc/8khYtG6r/beauty.jpg',
        title:'E-Commerse',
        github:'https://github.com/siyamanga22/E-cormerse.git',
        netify:'',
    },
    {
        id:4,
        image:'https://i.postimg.cc/5tZSsPBH/Z.png',
        title:'First Portfolio',
        github:'https://github.com/siyamanga22/ProjectPort.git',
        netify:'https://whimsical-dolphin-721a7d.netlify.app/',
    },
   
    {
        id:5,
        image:'https://i.postimg.cc/6qbcWRny/Screenshot-2023-06-03-115824-removebg-preview.png',
        title:'Simple Calculator',
        github:'https://github.com/siyamanga22/calculatorDone.git',
        netify:'https://siyacalculator.netlify.app/',
    },
]
projectsContenet.forEach((content)=>{
    projects.innerHTML+=` {
        <div class="card" style="width: 18rem; margin-right:55px; margin-bottom:20px;">
  <img src="${content.image}" class="card-img-top" alt="projects">
  <div class="card-body">
    <h5 class="card-title">${content.title}</h5>
    <a href="${content.github}" class="btn btn-primary">View Code</a> <a href="${content.netify}" class="btn btn-primary">Go Live</a>
  </div>
</div>
    `

})