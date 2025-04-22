document.addEventListener("DOMContentLoaded", function () {
    // Alert sambutan
    alert("Selamat datang di halaman multimedia!");

    // Event klik elemen
    document.getElementById("video").addEventListener("click", function () {
        alert("Ini video pemandangan");
    });
    document.getElementById("audio").addEventListener("click", function () {
        alert("Ini audio pemandangan");
    });
    document.getElementById("gambar").addEventListener("click", function () {
        alert("Ini gambar pemandangan");
    });

    // Custom cursor setup with floating animation
    const cursor = document.getElementById("customCursor");
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const currentX = parseFloat(cursor.style.left || 0);
        const currentY = parseFloat(cursor.style.top || 0);

        const deltaX = (mouseX - currentX) * 0.1;
        const deltaY = (mouseY - currentY) * 0.1;

        cursor.style.left = currentX + deltaX + "px";
        cursor.style.top = currentY + deltaY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover efek pada elemen interaktif
    const hoverTargets = document.querySelectorAll("a, button, h2, img, audio, iframe");

    hoverTargets.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });
    });
});
