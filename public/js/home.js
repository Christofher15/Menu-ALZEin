function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var heading = section.previousElementSibling;
    if (section.classList.contains('open')) {
        section.classList.remove('open');
        section.style.maxHeight = null;
        heading.setAttribute('aria-expanded', 'false');
    } else {
        section.classList.add('open');
        section.style.maxHeight = section.scrollHeight + "px";
        heading.setAttribute('aria-expanded', 'true');
    }
}
