const projectsContainer = document.querySelector('.projects');

// Fetch projects from API
fetch('/api/projects')
  .then(response => response.json())
  .then(data => {
    // Loop through projects and create HTML elements
    data.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');

      const imageElement = document.createElement('img');
      imageElement.src = project.imageUrl;
      projectElement.appendChild(imageElement);
