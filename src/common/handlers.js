// eslint-disable-next-line import/prefer-default-export
export function HandleClick(event) {
  if (event.target.id === 'ToExperience') {
    const anchor = document.querySelector('#Experience');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (event.target.id === 'ToExtracurriculars') {
    const anchor = document.querySelector('#Extracurriculars');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (event.target.id === 'ToProjects') {
    const anchor = document.querySelector('#Projects');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (event.target.id === 'ToAbout') {
    const anchor = document.querySelector('#AboutMe');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
