
function loadES6() {
    if (typeof Symbol === 'undefined') return;
    try { eval('class ES6 {}'); } catch(e) { return; }
    try { eval('const func = (n) => n+1'); } catch (e) { return; }
    var script = document.createElement('script');
    script.src = '/4c3900f8e9dd69b5714c214642cf1a280bd60a97b72770c05502ed560d248b20/';
    document.head.appendChild(script);
}
loadES6();
