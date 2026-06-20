function navigateTo(pageId) {
    const urls = {
        home: 'index.html',
        services: 'expertise.html',
        aibi: 'aibi.html',
        industries: 'industries.html',
        products: 'products.html',
        about: 'agency.html',
        contact: 'contact.html'
    };
    if (urls[pageId]) {
        window.location.href = urls[pageId];
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (theme === 'dark') {
        icon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" stroke-width="2.5"></path></svg>`;
    } else {
        icon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-width="2.5"></path></svg>`;
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
}

function openModal() {
    const modal = document.getElementById('talent-modal');
    const container = document.getElementById('modal-container');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (container) container.classList.remove('translate-y-10');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('talent-modal');
    const container = document.getElementById('modal-container');
    if (!modal) return;
    modal.classList.add('opacity-0');
    if (container) container.classList.add('translate-y-10');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('talent-form')?.reset();
        const fileLabel = document.getElementById('file-name');
        if (fileLabel) fileLabel.innerText = 'Upload CV (PDF/DOCX)';
        document.getElementById('modal-form-content')?.classList.remove('hidden');
        document.getElementById('talent-success')?.classList.add('hidden');
    }, 500);
    document.body.style.overflow = 'auto';
}

function validateFile(input) {
    const file = input.files[0];
    const nameEl = document.getElementById('file-name');
    if (file && nameEl) {
        const ext = file.name.split('.').pop().toLowerCase();
        if (!['pdf', 'docx'].includes(ext)) {
            alert('Use PDF or DOCX.');
            input.value = '';
            return;
        }
        nameEl.innerText = file.name;
    }
}

function handleTalentSubmit(e) {
    e.preventDefault();
    document.getElementById('modal-form-content')?.classList.add('hidden');
    document.getElementById('talent-success')?.classList.remove('hidden');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progress = document.getElementById("scroll-progress");
    if (progress) progress.style.width = scrolled + "%";
    
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 40) {
            nav.classList.add('!py-3', 'shadow-2xl', 'shadow-slate-900/5');
        } else {
            nav.classList.remove('!py-3', 'shadow-2xl', 'shadow-slate-900/5');
        }
    }
};

// Theme initialization to avoid glitch - only handles UI elements
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const icon = document.getElementById('theme-icon');
    if (icon) {
        if (savedTheme === 'dark') {
            icon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" stroke-width="2.5"></path></svg>`;
        } else {
            icon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-width="2.5"></path></svg>`;
        }
    }
});
