document.getElementById('text-anim');

anim.addEventListener("click", function () {
    if (anim.clicked) {
        anim.classList.remove ('text-transform');
    }
    else {
        anim.classList.add ('text-transform');
    }
    setTimeout (function() {
        anim.classList.remove('text-transform');
    },3000)
});

anim.addEventListener('click',function() {
    if (anim.clicked) {
        anim.classList.remove ('text-animation')
    }
    else {
        anim.classList.add ('text-animation')
    }
})

const tabsBtn = document.querySelectorAll('.tabs__item');
const tabsItem = document.querySelectorAll('.tabs__block');

tabsBtn.forEach(function(item){
    item.addEventListener("click" , function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {          
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
    
            tabsItem.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
 
    });
});
