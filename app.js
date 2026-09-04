/**
 * Application Core - SEA2 Campus
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar estado de progreso de manera segura
    let userProgress = getStoredProgress();
    let currentActiveFilter = 'all';
    let activeLessonId = null;

    // Elementos del DOM
    const grid = document.getElementById('lessons-grid');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('lesson-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const markCompleteBtn = document.getElementById('mark-complete-btn');

    // Inicialización del tema
    const savedTheme = localStorage.getItem('sea2_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    // Cargar lecciones
    renderLessons();
    updateProgressUI();

    // Event Listener: Alternar Tema
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('sea2_theme', newTheme);
        themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Event Listener: Filtros de Lecciones
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentActiveFilter = e.target.getAttribute('data-filter');
            renderLessons();
        });
    });

    // Event Listener: Cerrar Modal
    document.addEventListener('click', (e) => {
        if (e.target.dataset.close) {
            closeModal();
        }
    });

    // Event Listener: Marcar Lección como Completada
    markCompleteBtn.addEventListener('click', () => {
        if (activeLessonId) {
            userProgress[activeLessonId] = true;
            saveProgress(userProgress);
            updateProgressUI();
            renderLessons();
            closeModal();
        }
    });

    /**
     * Renderiza las tarjetas de lecciones en la retícula según los datos de lessons.js
     */
    function renderLessons() {
        if (typeof lessons === 'undefined' || !Array.isArray(lessons)) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No se encontraron lecciones disponibles.</p>';
            return;
        }

        grid.innerHTML = '';

        const filtered = lessons.filter(lesson => {
            const isCompleted = !!userProgress[lesson.id];
            if (currentActiveFilter === 'completed') return isCompleted;
            if (currentActiveFilter === 'pending') return !isCompleted;
            return true;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No hay lecciones en esta categoría.</p>';
            return;
        }

        filtered.forEach(lesson => {
            const isCompleted = !!userProgress[lesson.id];
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <div>
                    <h3 class="card-title">${escapeHTML(lesson.title)}</h3>
                    <p class="card-desc">${escapeHTML(lesson.description || '')}</p>
                </div>
                <div class="card-footer">
                    <span class="badge ${isCompleted ? 'badge-completed' : 'badge-pending'}">
                        ${isCompleted ? 'Completada' : 'Pendiente'}
                    </span>
                    <button class="btn btn-primary open-lesson-btn" data-id="${lesson.id}">Ver Lección</button>
                </div>
            `;
            grid.appendChild(card);
        });

        // Registrar eventos en los botones creados
        document.querySelectorAll('.open-lesson-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openLessonModal(id);
            });
        });
    }

    /**
     * Abre el modal de detalle para una lección específica
     */
    function openLessonModal(id) {
        const lesson = lessons.find(l => l.id == id);
        if (!lesson) return;

        activeLessonId = lesson.id;
        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.content || '<p>Contenido no disponible.</p>';

        const isCompleted = !!userProgress[lesson.id];
        markCompleteBtn.textContent = isCompleted ? 'Completada' : 'Marcar como Completada';
        markCompleteBtn.style.opacity = isCompleted ? '0.7' : '1';

        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        activeLessonId = null;
    }

    /**
     * Actualiza la barra e indicador de progreso general
     */
    function updateProgressUI() {
        if (typeof lessons === 'undefined' || lessons.length === 0) return;

        const total = lessons.length;
        const completedCount = Object.keys(userProgress).filter(id => userProgress[id]).length;
        const percentage = Math.round((completedCount / total) * 100);

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado (${completedCount}/${total})`;
    }

    /**
     * Recupera el progreso guardado en localStorage de forma segura
     */
    function getStoredProgress() {
        try {
            const data = localStorage.getItem('sea2_progress');
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error('Error al leer el progreso de localStorage', e);
            return {};
        }
    }

    /**
     * Guarda el progreso en localStorage de forma segura
     */
    function saveProgress(progressObj) {
        try {
            localStorage.setItem('sea2_progress', JSON.stringify(progressObj));
        } catch (e) {
            console.error('Error al guardar el progreso en localStorage', e);
        }
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});
