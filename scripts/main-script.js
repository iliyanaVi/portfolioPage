(function () {
    'use strict';

    openProjects();

    function openProjects() {
        var btnMore = document.querySelector(".btn-more");
        var projectsMore = document.querySelector(".more-projects");
        btnMore.addEventListener('click', function ()  {
            if (projectsMore.classList.contains("none")) {
                projectsMore.classList.remove("none");
                projectsMore.classList.add("flex");
            }
            else {
                projectsMore.classList.remove("flex");
                projectsMore.classList.add("none");
            }
        }
        )
    }
})();