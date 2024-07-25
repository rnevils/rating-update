document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  const $charTabs = Array.prototype.slice.call(document.querySelectorAll('.charTab'));
  var currentPage = window.location || window.document.location;
  if ($charTabs.length > 0) {
    $charTabs.forEach ( el => {
      console.log(el.children[0].href)
      console.log(currentPage.href)
      if ( currentPage.href == el.children[0].href ) {
        el.children[0].classList.toggle('is-active');
      }
    });
  }
});

function doLocalFormat(utcDateIn) {
  const utcDateTimeString = utcDateIn.trim();
  const utcDate = new Date(utcDateTimeString + 'Z');

  const localYear = utcDate.getFullYear();
  const localMonth = String(utcDate.getMonth() + 1).padStart(2, '0');
  const localDay = String(utcDate.getDate()).padStart(2, '0');
  const localHours = String(utcDate.getHours()).padStart(2, '0');
  const localMinutes = String(utcDate.getMinutes()).padStart(2, '0');

  return `${localYear}-${localMonth}-${localDay} ${localHours}:${localMinutes}`;
}

const formatUTCToLocal = () => {
  const timestampElements = document.querySelectorAll('.timestamp');
  timestampElements.forEach(element => {
    element.textContent = doLocalFormat(element.textContent);
  });
}

var page_index = 0;
var char_id = "SO";
const load_history = () => {

    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('got history');

            document.getElementById('history').innerHTML = this.responseText;
            document.getElementById("decrement_button").disabled = page_index == 0;
            document.getElementById("current_page").innerHTML = "Games " + (page_index * 100 + 1) + "–" + (page_index * 100 + 100)
            
            const localDate = localStorage.getItem("localDate") || false;
            if (localDate) {
              formatUTCToLocal()
            }

            document.querySelectorAll('.SO').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Sol_Badguy";
            });
            document.querySelectorAll('.KY').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Ky_Kiske";
            });
            document.querySelectorAll('.MA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/May";
            });
            document.querySelectorAll('.AX').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Axl_Low";
            });
            document.querySelectorAll('.CH').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Chipp_Zanuff";
            });
            document.querySelectorAll('.PO').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Potemkin";
            });
            document.querySelectorAll('.FA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Faust";
            });
            document.querySelectorAll('.MI').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Millia_Rage";
            });
            document.querySelectorAll('.ZA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Zato-1";
            });
            document.querySelectorAll('.RA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Ramlethal_Valentine";
            });
            document.querySelectorAll('.LE').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Leo_Whitefang";
            });
            document.querySelectorAll('.NA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Nagoriyuki";
            });
            document.querySelectorAll('.GI').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Giovanna";
            });
            document.querySelectorAll('.AN').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Anji_Mito";
            });
            document.querySelectorAll('.IN').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/I-No";
            });
            document.querySelectorAll('.GO').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Goldlewis_Dickinson";
            });
            document.querySelectorAll('.JC').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Jack-O";
            });
            document.querySelectorAll('.HA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Happy_Chaos";
            });
            document.querySelectorAll('.BA').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Baiken";
            });
            document.querySelectorAll('.TE').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Testament";
            });
            document.querySelectorAll('.BI').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Bridget";
            });
            document.querySelectorAll('.SI').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Sin_Kiske";
            });
            document.querySelectorAll('.BE').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Bedman";
            });
            document.querySelectorAll('.AS').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Asuka_R";
            });
            document.querySelectorAll('.JN').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Johnny";
            });
            document.querySelectorAll('.EL').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Elphelt_Valentine";
            });
            document.querySelectorAll('.AB').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/A.B.A";
            });
            document.querySelectorAll('.SL').forEach(function(t) {
              t.href="https://www.dustloop.com/w/GGST/Slayer";
            });

        }
    };
    console.log('requesting history');
    req.open('GET', char_id + '/history?offset=' + page_index * 100, true);
    req.send();
}
const increment_page = () => {
    page_index += 1;
    load_history();
}
const decrement_page = () => {
    if (page_index > 0) {
        page_index -= 1;
        load_history()
    }
}
