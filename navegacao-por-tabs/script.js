const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('active');

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
