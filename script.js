let skillB = document.getElementById('skills-button');

let skills = document.getElementById('icon-container');

const showHideSkills = () => {
  if (skills.style.backgroundColor === "black") {
    skills.style.backgroundColor = 'white';
  }
  else {
    skills.style.backgroundColor ='black';
  }
}


skillB.addEventListener('click', showHideSkills);

