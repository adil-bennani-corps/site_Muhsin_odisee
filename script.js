// ===== MODAL MANAGEMENT =====
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const boatWrappers = document.querySelectorAll('.boat-item');

// Open modal
boatWrappers.forEach(boat => {
    boat.addEventListener('click', () => {
        const sectionNumber = boat.getAttribute('data-section');
        openSection(sectionNumber);
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    closeSection();
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeSection();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeSection();
    }
});

function openSection(sectionNumber) {
    const content = getSectionContent(sectionNumber);
    modalBody.innerHTML = content;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize lightbox if section 2
    if (sectionNumber === '2') {
        initLightbox();
    }
}

function closeSection() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== SECTION CONTENT =====
function getSectionContent(sectionNumber) {
    const sections = {
        '1': `
            <h2 class="modal-title">Haven 1 - Wat heb ik geleerd in mijn opleiding?</h2>
            <div class="modal-logos">
                <img src="images/Adobe-Logo.png" alt="Adobe Logo" class="modal-logo-img">
                <img src="images/canva icon.png" alt="Canva Logo" class="modal-logo-img">
                <img src="images/Mailchimp yellow -Symbol.jpg" alt="Mailchimp Logo" class="modal-logo-img">
            </div>
            <div class="modal-text">
                <ul class="modal-list">
                    <li>Werken met tools zoals Canva, Adobe, Mailchimp, SEO, Word, Excel en PowerPoint</li>
                    <li>Zelfstandig werken en professioneel presenteren</li>
                    <li>Theorie toepassen in digitale marketing en evenementenorganisatie</li>
                    <li>Doelgroepen analyseren en nadenken over imago en merkidentiteit</li>
                    <li>Meewerken als volwaardig lid van een marketingteam</li>
                </ul>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '2': `
            <h2 class="modal-title">Haven 2 - Op welke verwezenlijkingen ben ik het meest trots?</h2>
            <div class="modal-text">
                <p>Mijn opleiding en stages afgelegd in mijn eigen tempo met focus. In beide stages een echte meerwaarde kunnen zijn. Gegroeid in creativiteit, veerkracht en zelfvertrouwen. Mijn visualsportfolio: grafische ontwerpen in Adobe (social media visuals, flyers, banners).</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item" data-image="images/WhatsApp Image 2026-01-19 at 19.00.42.jpeg">
                    <img src="images/WhatsApp Image 2026-01-19 at 19.00.42.jpeg" alt="Futuristic Cars - Muhsin Ozdilek">
                </div>
                <div class="gallery-item" data-image="images/WhatsApp Image 2026-01-19 at 19.00.41 (2).jpeg">
                    <img src="images/WhatsApp Image 2026-01-19 at 19.00.41 (2).jpeg" alt="Netflix N-Can Banner/Post">
                </div>
                <div class="gallery-item" data-image="images/WhatsApp Image 2026-01-19 at 19.00.41 (1).jpeg">
                    <img src="images/WhatsApp Image 2026-01-19 at 19.00.41 (1).jpeg" alt="Netflix N-Can A4">
                </div>
                <div class="gallery-item" data-image="images/WhatsApp Image 2026-01-19 at 19.00.41.jpeg">
                    <img src="images/WhatsApp Image 2026-01-19 at 19.00.41.jpeg" alt="Sparked logo">
                </div>
            </div>
            <div class="lightbox" id="lightbox">
                <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
                <img id="lightbox-img" src="" alt="">
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '3': `
            <h2 class="modal-title">Haven 3 - Waar heb ik werkplekleren gedaan?</h2>
            <div class="stages-container">
                <div class="stage-card">
                    <img src="images/syntra brussel logo.jpg" alt="Syntra Brussel" class="stage-logo">
                    <h3 class="stage-title">Stage 1: Syntra Brussel</h3>
                    <p class="stage-subtitle">Tour & Taxis</p>
                    <div class="modal-text">
                        <p><strong>Taken:</strong> PowerPoint-presentaties voor Duaal Leren, communicatie en ondersteunende taken</p>
                        <p><strong>Ervaring:</strong> leerrijk en positief</p>
                        <p><strong>Groei:</strong> open samenwerken, kwaliteitsvol werken en snel nieuwe taken opnemen</p>
                    </div>
                </div>
                <div class="stage-card">
                    <img src="images/logo_Info Group Global_black (1).png" alt="Info Group Global" class="stage-logo">
                    <h3 class="stage-title">Stage 2: Info Group Global</h3>
                    <p class="stage-subtitle">Zaventem</p>
                    <div class="modal-text">
                        <p>Belgisch textielbedrijf actief in meer dan 60 landen</p>
                        <p><strong>Taken:</strong> visuele communicatie, webdesign-voorbereiding, website-structuur, planning in Monday, presentaties en bezoekersonthaal</p>
                        <p><strong>Groei:</strong> van voorzichtig naar zelfstandig en initiatief durven nemen</p>
                        <p><strong>Evaluatie:</strong> positief, met groei in professionaliteit, communicatie en verantwoordelijkheid</p>
                    </div>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '4': `
            <h2 class="modal-title">Haven 4 - Wat zijn mijn sterke punten?</h2>
            <div class="strengths-grid">
                <div class="strength-item">
                    <div class="strength-icon">⚓</div>
                    <h3>Betrouwbaarheid</h3>
                    <p>en nauwkeurigheid</p>
                </div>
                <div class="strength-item">
                    <div class="strength-icon">🎯</div>
                    <h3>Professionele houding</h3>
                    <p>tegenover opdrachten</p>
                </div>
                <div class="strength-item">
                    <div class="strength-icon">🎨</div>
                    <h3>Visuele structuur</h3>
                    <p>en lay-out</p>
                </div>
                <div class="strength-item">
                    <div class="strength-icon">💻</div>
                    <h3>Ervaring</h3>
                    <p>met websites, menu's, pagina-indelingen en Canva</p>
                </div>
                <div class="strength-item">
                    <div class="strength-icon">🌍</div>
                    <h3>Meertalig</h3>
                    <p>en vlot in communicatie</p>
                </div>
                <div class="strength-item">
                    <div class="strength-icon">👥</div>
                    <h3>Teamwork</h3>
                    <p>goed functioneren binnen een marketingteam</p>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '5': `
            <h2 class="modal-title">Haven 5 - Wat zijn mijn werkpunten?</h2>
            <div class="work-points">
                <div class="work-point-item">
                    <div>
                        <strong>Soms te snel reageren</strong>
                    </div>
                    <div class="arrow">→</div>
                    <div>
                        Ik leer eerst luisteren en dan antwoorden
                    </div>
                </div>
                <div class="work-point-item">
                    <div>
                        <strong>Twijfel aan mezelf</strong>
                    </div>
                    <div class="arrow">→</div>
                    <div>
                        Ik wil sneller vertrouwen hebben in mijn beslissingen
                    </div>
                </div>
                <div class="work-point-item">
                    <div>
                        <strong>Toekomst</strong>
                    </div>
                    <div class="arrow">→</div>
                    <div>
                        Eerst zelf proberen, daarna feedback vragen
                    </div>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '6': `
            <h2 class="modal-title">Haven 6 - Zelfanalyse – Kernkwadrant van Ofman</h2>
            <div class="kernkwadrant">
                <div class="kw-item kw-kernkwaliteit">
                    <h3>Kernkwaliteit</h3>
                    <p>Betrouwbaarheid en nauwkeurigheid</p>
                </div>
                <div class="kw-item kw-valkuil">
                    <h3>Valkuil</h3>
                    <p>Perfectionisme en te voorzichtig zijn</p>
                </div>
                <div class="kw-item kw-uitdaging">
                    <h3>Uitdaging</h3>
                    <p>Sneller keuzes maken en meer zelfvertrouwen</p>
                </div>
                <div class="kw-item kw-allergie">
                    <h3>Allergie</h3>
                    <p>Slordigheid en onduidelijkheid</p>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '7': `
            <h2 class="modal-title">Haven 7 - Wat wil ik op korte termijn?</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h3>Werken in marketing of communicatie</h3>
                    <p>Een ondersteunende functie waar ik kan groeien</p>
                </div>
                <div class="timeline-item">
                    <h3>Verder groeien</h3>
                    <p>In visuele communicatie en webdesign-voorbereiding</p>
                </div>
                <div class="timeline-item">
                    <h3>Later meewerken</h3>
                    <p>In het bedrijf van mijn vader en dit verder uitbouwen</p>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '8': `
            <h2 class="modal-title">Haven 8 - Welke stappen onderneem ik om een job te zoeken?</h2>
            <div class="checklist">
                <div class="checklist-item">
                    <div class="checklist-icon">📄</div>
                    <div>
                        <strong>CV en LinkedIn updaten</strong>
                        <p>Mijn profiel actueel houden met mijn nieuwste ervaringen</p>
                    </div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-icon">🎨</div>
                    <div>
                        <strong>Portfolio versterken</strong>
                        <p>Met werk van Info Group Global</p>
                    </div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-icon">🎯</div>
                    <div>
                        <strong>Gericht solliciteren</strong>
                        <p>Naar B2B- en internationale bedrijven</p>
                    </div>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '9': `
            <h2 class="modal-title">Haven 9 - Mijn ideale functie</h2>
            <div class="job-card">
                <h3>Ondersteunende marketingfunctie</h3>
                <div class="modal-text">
                    <p><strong>Visuals maken:</strong> Social media content, flyers, banners en andere grafische ontwerpen</p>
                    <p><strong>Websites voorbereiden:</strong> Structuur, planning en voorbereiding van webdesign-projecten</p>
                    <p><strong>Content structureren:</strong> Organiseren en structureren van marketingcontent</p>
                    <p><strong>Meedenken én uitvoeren:</strong> Binnen een marketingteam actief bijdragen aan strategie en uitvoering</p>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '10': `
            <h2 class="modal-title">Haven 10 - In welk type bedrijf wil ik terechtkomen?</h2>
            <div class="company-cards">
                <div class="company-card">
                    <div class="company-icon">🏢</div>
                    <h3>Professionele omgeving</h3>
                    <p>Respectvolle werkomgeving waar ik kan groeien</p>
                </div>
                <div class="company-card">
                    <div class="company-icon">🌍</div>
                    <h3>Internationale context</h3>
                    <p>Bedrijven met internationale activiteiten en uitdagingen</p>
                </div>
                <div class="company-card">
                    <div class="company-icon">🚀</div>
                    <h3>KMO of rebranding</h3>
                    <p>Bedrijven in rebranding of online imago-opbouw</p>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '11': `
            <h2 class="modal-title">Haven 11 - Wat wil ik verder studeren?</h2>
            <div class="study-path">
                <div class="path-step">
                    <h3>Nu</h3>
                    <p>Eerst werkervaring opdoen</p>
                    <p>Praktijk leren in een marketingteam</p>
                </div>
                <div class="path-arrow">→</div>
                <div class="path-step">
                    <h3>Later</h3>
                    <p>Eventueel bijstuderen in:</p>
                    <ul style="text-align: left; margin-top: 1rem;">
                        <li>Grafische vormgeving</li>
                        <li>Webdesign</li>
                        <li>Digitale marketing</li>
                    </ul>
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `,
        '12': `
            <h2 class="modal-title">Haven 12 - Waar heb ik spijt van?</h2>
            <div class="conclusion">
                <div class="modal-text">
                    <p><strong>Dat ik soms te weinig vertrouwen had in mezelf</strong></p>
                    <p>Ik heb geleerd dat feedback een hulpmiddel is, geen kritiek. Het helpt me groeien en verbeteren.</p>
                    <p><strong>In de toekomst wil ik:</strong></p>
                    <ul style="text-align: left; margin-top: 1rem;">
                        <li>Sneller initiatief nemen</li>
                        <li>Duidelijker communiceren</li>
                        <li>Meer vertrouwen hebben in mijn capaciteiten</li>
                    </ul>
                </div>
                <div class="conclusion-quote">
                    "Elke reis begint met een eerste stap. Ik ben klaar voor de volgende etappe."
                </div>
            </div>
            <button class="back-button" onclick="closeSection()">⚓ Terug naar de kaart</button>
        `
    };
    
    return sections[sectionNumber] || '<p>Section niet gevonden</p>';
}

// ===== LIGHTBOX FUNCTIONALITY =====
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-image');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        });
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Close lightbox on click outside or Escape
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    }
});
