
function loadES6() {
    if (typeof Symbol === 'undefined') return;
    try { eval('class ES6 {}'); } catch(e) { return; }
    try { eval('const func = (n) => n+1'); } catch (e) { return; }
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/CoartDawg99/desmosModificationAttempt/main/inject.js';
    document.head.appendChild(script);
}
loadES6();
