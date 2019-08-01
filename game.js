document.addEventListener('DOMContentLoaded', init)
let hit, fold, ree, hf;
let phand = document.getElementById('hand');
let folded = false;
function init() {
    hit = document.getElementById('hit');
    fold = document.getElementById('fold');
    hf = document.getElementById('hf');
    ree = document.getElementById('ree');
    hit.addEventListener('click', hitt);
    fold.addEventListener('click', folder);
    ree.addEventListener('click', reee);
}
function reee() {
    location.reload();
}
function folder() {
    folded = true;
    AImove();
    checkWin();
}