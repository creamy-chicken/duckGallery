function showInfo(element) {
    const preview = document.getElementById('image');
    preview.innerText = element.alt;
    preview.style.backgroundImage = `url('${element.src}')`;
}

function resetInfo() {
    const preview = document.getElementById('image');
    preview.innerText = 'Hover over an image below to display here.';
    preview.style.backgroundImage = "url('')";
}
