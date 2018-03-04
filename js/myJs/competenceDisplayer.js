
const displayCompetences = () => {
  let html = ``;
  competences.forEach((competence, i) => {
    html += `<span class="badge" onClick=showStory(${i})> ${competence.name} </span>`;
  })
  document.querySelector('.competences').innerHTML = html;
}

const showStory = (index) => {
  const competence = competences[index];
  document.querySelector('.competenceDetailsContainer').innerHTML = `
    <h3>${competence.name} | ${competence.level} </h3>
    <p>${competence.story}</p>
  `;
}