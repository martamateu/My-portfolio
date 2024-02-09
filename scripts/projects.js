const projects = [
{
    name: "MoonQuaker project - Space Apps Challenge 2022 ",
    date: "Oct, 2022",
    purpose: ["Learning", "3D animation"],
    desc: "Our project uses the CGI moon kit DEM Digital Elevation Map and other images to create a photorealistic model of the moon where quakes and artificial impacts from different datasest belonging to the Apollo Lunar Surface Experiments are mapped",
    liveLink: "https://www.youtube.com/watch?v=c3x6q36DnuU&t=5227s",
    srcLink: "https://github.com/MOON-QUAKERS/MOON-QUAKE-PROJECT",
  },
  {
    name: "Crop prediction",
    date: "Jan, 2022",
    purpose: ["Learning", "Artificial Intelligence"],
    desc: "Notebook with a Crop prediction project for IA Saturdays Course. Click on Live Project to watch our demo live presentation.",
    liveLink: "https://moon-quakers.github.io/MOON-QUAKE-PROJECT/",
    srcLink: "https://github.com/martamateu/crop-prediction",
  },
  {
    name: "Form profile",
    date: "Feb, 2022",
    purpose: ["Learning"],
    desc: "Simple Form for my third hackathon",
    liveLink: "https://martamateu.github.io/MWC/",
    srcLink: "https://github.com/martamateu/MWC",
  },
  {
    name: "Hackathon Jump2Digital",
    date: "Nov, 2021",
    purpose: ["Learning"],
    desc: "A simple check out page on my second hackathon.",
    liveLink:
      "https://martamateu.github.io/martamateu-JUMP2DIGITAL-FrontEnd-Challenge/",
    srcLink: "https://github.com/martamateu/martamateu-JUMP2DIGITAL-FrontEnd-Challenge",
  },
  {
    name: "Perseo landing Page",
    date: "Jan, 2021",
    purpose: ["Learning"],
    desc: "A simple landing page on my first hackathon.",
    liveLink: "https://silly-montalcini-b19c38.netlify.app/",
    srcLink: "https://github.com/martamateu/hackthatstartup",
  },

  {
    name: "More projects on....",
    date: "",
    purpose: ["Github"],
    desc: ``,
    liveLink: "https://www.linkedin.com/in/marta-mateu/",
    srcLink: "https://github.com/martamateu",
  },
 
];

const content = document.querySelector("#primary-content");

projects.forEach((project, index) => {
  const purposesDiv = document.createElement("div");
  project.purpose.forEach((purpose) => {
    purposesDiv.innerHTML += `<span class="project-purpose">${purpose}</span>&nbsp;`;
  });
  const projectDiv = document.createElement("div");
  projectDiv.innerHTML = `
    <section class="container-centered">
      <div class="project-section">
        <h2 class="project-section__name">${project.name}</h2>
        <small class="project-section__date">${project.date}</small>&emsp;<div class="purpose-div">${purposesDiv.innerHTML}</div>
        <p class="project-section__desc">
          ${project.desc}
        </p>
        <a
          class="link--primary"
          target="_blank"
          rel="noreferrer noopener"
          href="${project.liveLink}"
          >Live Project</a
        >
        
        <a
          class="link--secondary"
          target="_blank"
          rel="noreferrer noopener"
          href="${project.srcLink}"
          >View Source</a
        >
      </div>
    </section>
    `;
  content.appendChild(projectDiv);
  if (index !== projects.length - 1)
    content.innerHTML += `
    <hr class="hr--half" />
    `;
});
