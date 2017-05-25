var hitCounter = function() {
    if(window.location.href.indexOf('www.youtube.com/watch') !== -1){
        var el = document.getElementsByClassName('watch-view-count')[0];
        if(el){
            if(el.innerText.indexOf(' views') !== -1){
                var count = parseInt(el.textContent.split(' views')[0].replace(/,/g, '')),
                    billionCount = parseFloat(count/1000000000).toFixed(2),
                    millionCount = parseFloat(count/1000000).toFixed(1),
                    thousandCount = parseFloat(count/1000).toFixed(0);
                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
                el.style.textAlign = 'center';
                el.style.fontSize = '24px';
                el.style.color = '#e62117';
                switch (true) {
                    case count> 1000000000:
                        el.append(billionCount + 'B Hits');
                        break;
                    case count >= 1000000:
                        el.append(millionCount + 'M Hits');
                        break;
                    case count >= 1000:
                        el.append(thousandCount + 'K Hits');
                        break;
                    default:
                        el.append(count + ' Hits');
                        el.style.textAlign = '';
                        break;
                }
            }
        } else {
            setTimeout(hitCounter, 2000);
        }
    }
};
document.addEventListener('DOMContentLoaded', function () {
    (document.body || document.documentElement).addEventListener('transitionend',
        function(event) {
            if (event.propertyName === 'width' && event.target.id === 'progress') {
                hitCounter();
            }
        }, true);
    hitCounter();
});