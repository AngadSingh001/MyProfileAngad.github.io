document.addEventListener("DOMContentLoaded", function() {

    // Helper function to create list items
    const createList = (items) => {
        let listHTML = '';
        items.forEach(item => {
            listHTML += `<li>${item}</li>`;
        });
        return `<ul>${listHTML}</ul>`;
    };

    // Helper function for skills section
    const createSkillsSection = (title, skillsArray) => {
        let skillsHTML = `<div><h3>${title}</h3><ul>`;
        skillsArray.forEach(skill => {
            skillsHTML += `<li>${skill}</li>`;
        });
        skillsHTML += `</ul></div>`;
        return skillsHTML;
    };

    // Populate Header
    document.getElementById("contact-name").textContent = portfolioData.contact.name;
    document.getElementById("contact-tagline").textContent = portfolioData.contact.tagline;
    document.getElementById("contact-location").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${portfolioData.contact.location}`;
    document.getElementById("contact-phone").innerHTML = `<i class="fas fa-phone"></i> ${portfolioData.contact.phone}`;
    document.getElementById("contact-email").innerHTML = `<i class="fas fa-envelope"></i> ${portfolioData.contact.email}`;
    document.getElementById("contact-linkedin").innerHTML = `<a href="${portfolioData.contact.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> linkedin.com/in/angad-gadhok</a>`;
    document.getElementById("contact-github").innerHTML = `<a href="${portfolioData.contact.github}" target="_blank"><i class="fab fa-github"></i> github.com/ANGADPREETSINGHGADHOK</a>`;

    // Populate Summary
    document.getElementById("about-content").textContent = portfolioData.summary;

    // Populate Skills
    const skillsContainer = document.getElementById("skills-list");
    skillsContainer.innerHTML = `
        ${createSkillsSection('Front-End', portfolioData.skills.frontend)}
        ${createSkillsSection('Back-End', portfolioData.skills.backend)}
        ${createSkillsSection('Database & DevOps', [...portfolioData.skills.database, ...portfolioData.skills.devops])}
        ${createSkillsSection('Application Support & Soft Skills', [...portfolioData.skills.app_support, ...portfolioData.skills.soft_skills])}
    `;

    // Populate Experience
    const experienceContainer = document.getElementById("experience-container");
    portfolioData.experience.forEach(job => {
        const jobHTML = `
            <div class="job-entry">
                <h3>${job.title} | ${job.company}</h3>
                <p class="job-date">${job.dates}</p>
                ${createList(job.details)}
            </div>
        `;
        experienceContainer.innerHTML += jobHTML;
    });

    // Populate Projects
    const projectsContainer = document.getElementById("projects-container");
    portfolioData.projects.forEach(project => {
        const projectHTML = `
            <div class="project-entry">
                <h3>${project.title}</h3>
                ${createList(project.details)}
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });

    // Populate Education
    const educationContainer = document.getElementById("education-container");
    portfolioData.education.forEach(edu => {
        const eduHTML = `
            <div class="education-entry">
                <h3>${edu.school}</h3>
                <p>${edu.degree}</p>
                <p class="job-date">${edu.dates}</p>
                <p><strong>Relevant Coursework:</strong> ${edu.coursework}</p>
            </div>
        `;
        educationContainer.innerHTML += eduHTML;
    });

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Close all tabs and remove active class from all headers
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.remove('active');
            });
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
            });

            // If the clicked tab was not active, open it
            if (!isActive) {
                header.classList.add('active');
                content.classList.add('active');
            }
        });
    });
});
