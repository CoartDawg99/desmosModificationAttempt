
const lsijVersion = 1;

if (window.top === window.self) {
    console.log('[LS Filter] top window: ' + window.location.href);

    function reportAllowedSite() {
        const xhr = new XMLHttpRequest();
        const body = {
            url: window.location.href
        };
        console.log('[LS Filter] reporting: ' + JSON.stringify(body));
        xhr.open('POST', document.location.origin + '/4c3900f8e9dd69b5714c214642cf1a280bd60a97b72770c05502ed560d248b20/log', true);
        xhr.send(JSON.stringify(body));
    }
    reportAllowedSite();

    function locationChanged(url) {
        if (typeof(applyNewLocation) === 'function') {
            if (applyNewLocation() === true)
                return;
        }

        window.location.reload();
    }

    let prevURL = new URL(window.location.href);
    prevURL.hash = '';
    new MutationObserver(function() {
        console.log('[LS Filter] MutationObserver');
        let url = new URL(window.location.href);
        url.hash = '';
        const urls = url.toString();
        const purls = prevURL.toString();
        if (urls === purls)
            return;
        console.log(`[LS Filter] URL changed from ${purls} to ${urls}`);
        prevURL = url;

        locationChanged(url);
    }).observe(document, {subtree: true, childList: true});
}


