function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('active');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      });
      tabContent[index].classList.add('active');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      this.nextElementSibling.classList.toggle('ativo');
      this.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    // window.scrollTo(eixo-x, eixo-y)

    //forma alternativa
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - 500; //esse método retorna o tamanho de um elemento e sua posição relativa ao viewport
        const isShttps://drive.google.com/drive/u/0/folders/1fZOMUoTuFgNlp_dl-K4mSSciEqo8AzrJectionVisible = sectionTop - windowMetade < 0; // true ou false
        if (isSectionVisible) {
          section.classList.add('ativo');
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initAnimationScroll();
