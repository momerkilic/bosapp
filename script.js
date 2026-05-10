document.addEventListener('DOMContentLoaded', () => {
    const timelineList = document.getElementById('timeline-list');
    const eventDisplay = document.getElementById('event-display');

    // Initialize Sidebar
    function initSidebar() {
        romanEvents.forEach((event, index) => {
            const li = document.createElement('li');
            li.className = 'timeline-item';
            li.dataset.id = event.id;
            
            li.innerHTML = `
                <span class="timeline-year">${event.year}</span>
                <span class="timeline-title">${event.title}</span>
            `;

            li.addEventListener('click', () => {
                // Remove active class from all
                document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
                // Add active class to clicked
                li.classList.add('active');
                
                // Display event
                renderEvent(event);
            });

            timelineList.appendChild(li);

            // Auto-select first event
            if (index === 0) {
                li.click();
            }
        });
    }

    // Render selected event in main display
    function renderEvent(event) {
        // Clear previous content to re-trigger animations
        eventDisplay.innerHTML = '';
        
        // Stop any ongoing TTS when switching events
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        
        const card = document.createElement('div');
        card.className = 'event-card';
        
        card.innerHTML = `
            <div class="event-image-container">
                <img src="${event.image}" alt="${event.title}" class="event-image" loading="lazy">
            </div>
            <div class="event-details">
                <div class="event-meta">
                    <span class="tag-year">${event.year}</span>
                    <span class="tag-era">${event.era}</span>
                    <span class="tag-type">${event.type}</span>
                </div>
                <div class="title-avatar-wrapper">
                    <h2 class="event-title">${event.title}</h2>
                    <img src="images/avatars.jpeg" alt="Sesli Oku" class="tts-avatar" title="İçeriği Sesli Oku" id="tts-avatar-btn">
                </div>
                <p class="event-description">${event.description}</p>
                <a href="${event.youtubeLink}" target="_blank" class="youtube-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418C3.326,4.648,2.648,5.326,2.418,6.186C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>
                    Bu Olayın Belgeselini İzle
                </a>
            </div>
        `;

        eventDisplay.appendChild(card);

        // TTS Logic
        const ttsAvatarBtn = card.querySelector('#tts-avatar-btn');
        if (ttsAvatarBtn) {
            ttsAvatarBtn.addEventListener('click', () => {
                if (!window.speechSynthesis) {
                    alert('Tarayıcınız sesli okuma özelliğini desteklemiyor.');
                    return;
                }

                // If currently speaking, cancel it (toggle effect)
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                    ttsAvatarBtn.classList.remove('speaking');
                    return;
                }
                
                const textToRead = event.title + ". " + event.description;
                const utterance = new SpeechSynthesisUtterance(textToRead);
                utterance.lang = 'tr-TR';
                utterance.rate = 0.85; // Hız biraz daha yavaşlatıldı
                utterance.volume = 1.0; // Ses şiddeti maksimuma (1.0) ayarlandı
                
                ttsAvatarBtn.classList.add('speaking');
                
                utterance.onend = () => {
                    ttsAvatarBtn.classList.remove('speaking');
                };
                utterance.onerror = () => {
                    ttsAvatarBtn.classList.remove('speaking');
                };

                window.speechSynthesis.speak(utterance);
            });
        }
    }

    initSidebar();

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Sun icon path
    const sunIcon = "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM6.166 18.894a.75.75 0 001.06 1.06l1.59-1.591a.75.75 0 10-1.06-1.061l-1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 5.106a.75.75 0 00-1.06 1.06l1.591 1.59a.75.75 0 101.06-1.061l-1.59-1.59z";
    // Moon icon path
    const moonIcon = "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z";

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            themeIcon.querySelector('path').setAttribute('d', moonIcon);
        } else {
            themeIcon.querySelector('path').setAttribute('d', sunIcon);
        }
    });

    // Roman Eagle TTS Logic
    const headerEagle = document.getElementById('header-eagle');
    if (headerEagle) {
        headerEagle.addEventListener('click', () => {
            if (!window.speechSynthesis) return;

            window.speechSynthesis.cancel(); // Stop any ongoing speech
            
            const utterance = new SpeechSynthesisUtterance("Selam sana roma vatandaşı");
            utterance.lang = 'tr-TR';
            utterance.rate = 0.9;
            utterance.volume = 1.0;
            
            window.speechSynthesis.speak(utterance);
        });
    }

    // Page Visibility API - Tab Title Change
    const originalTitle = document.title;
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') {
            document.title = "Roma seni bekliyor!";
        } else {
            document.title = originalTitle;
        }
    });

});
