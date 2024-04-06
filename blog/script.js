var Tabs = (function () {
    var s;
  
    return {
      settings: {
        tabs: document.getElementsByClassName("tabs__item"),
        tab: document.getElementsByClassName("tab")
      },
  
      init: function () {
        s = this.settings;
        this.display();
        this.click();
      },
  
      display: function () {
        if (s.tab.length) {
          [].forEach.call(s.tab, function (tab) {
            tab.style.opacity = 0; // Initially set opacity to 0
          });
          s.tab[0].style.opacity = 1; // Set opacity to 1 for the first tab
          s.tab[0].classList.add("active");
          s.tabs[0].classList.add("active");
        }
      },
  
      click: function () {
        if (s.tabs.length) {
          var currentIdx = 0,
            prevIdx = currentIdx;
  
          [].forEach.call(s.tabs, function (tab, idx) {
            tab.addEventListener("click", function () {
              prevIdx = currentIdx;
              currentIdx = idx;
  
              if (prevIdx !== currentIdx) {
                // Fade out previous tab
                s.tab[prevIdx].style.opacity = 0;
                s.tab[prevIdx].classList.remove("active");
                s.tabs[prevIdx].classList.remove("active");
                // Fade in current tab
                s.tab[currentIdx].style.opacity = 1;
                s.tab[currentIdx].classList.add("active");
                s.tabs[currentIdx].classList.add("active");
              }
            });
          });
        }
      }
    };
})();
