const blogs = [
  {
    name: "Analysis on the yield of the corn crop in Illinois",
    date: "Jan 22, 2022",
    desc: `
    Modelling crop yields  datasets that are extracted from the State of Illinois, USA.
    `,
    link: "https://medium.com/saturdays-ai/an%C3%A1lisis-sobre-el-rendimiento-del-cultivo-de-ma%C3%ADz-en-illinois-22edf86360ba",
  },
  
];

const primaryContent = document.querySelector("#content--primary");

blogs.forEach((blog, index) => {
  const blogSection = document.createElement("section");
  blogSection.classList.add("container-centered");
  blogSection.innerHTML = `
    <div class="blog-section">
    <h2 class="blog-section__name">${blog.name}</h2>
    <small class="blog-section__date">${blog.date}</small>
    <div class="blog-section__desc">
        ${blog.desc}  
    </div>
    <a class="link--primary" href="${blog.link}" target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
    `;
  primaryContent.appendChild(blogSection);
  if (index !== blogs.length - 1)
    primaryContent.innerHTML += `
    <hr class="hr--half" />
    `;
});
