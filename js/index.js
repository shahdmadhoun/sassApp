document.getElementById('main-color-id').addEventListener('input', () => {
    let colormain = document.getElementById('main-color-id').value;
    let colorsecondery = document.getElementById('color-secondery-id').value;
    document.documentElement.style.setProperty('--color-main', colormain)
    document.documentElement.style.setProperty('--color-secondery', colorsecondery)
    document.getElementById('text-color-main-id').value = colormain
    document.getElementById('text-color-secondery-id').value = colorsecondery

});
document.getElementById('color-secondery-id').addEventListener('input', () => {
    let colormain = document.getElementById('main-color-id').value;
    let colorsecondery = document.getElementById('color-secondery-id').value;
    document.documentElement.style.setProperty('--color-main', colormain)
    document.documentElement.style.setProperty('--color-secondery', colorsecondery)
    document.getElementById('text-color-main-id').value = colormain
    document.getElementById('text-color-secondery-id').value = colorsecondery
});