    let isPlaying = false;
    const music = document.getElementById('bgMusic');
    const musicIcon = document.getElementById('musicIcon');

    function toggleMusic() {
        if (isPlaying) {
            music.pause();
            musicIcon.innerHTML = '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>';
        } else {
            music.play();
            musicIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        }
        isPlaying = !isPlaying;
    }

    function showPage(pageNum) {
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById('page' + pageNum).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollToReasons() {
        document.getElementById('reasonsSection').scrollIntoView({ behavior: 'smooth' });
    }