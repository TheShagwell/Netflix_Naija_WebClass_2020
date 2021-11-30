const contentAccordion = document.getElementsByClassName('contentBox');

for (i = 0; i < contentAccordion.length; i++) {
    contentAccordion[i].addEventListener('click', whenClicked);

    function whenClicked() {
        this.classList.toggle('active');
    }
}