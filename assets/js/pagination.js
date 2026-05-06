document.addEventListener('DOMContentLoaded', function() {
    const paginateContainers = document.querySelectorAll('.paginate-container');

    paginateContainers.forEach(container => {
        // Find the list inside (could be ol or ul)
        const list = container.querySelector('ol, ul');
        if (!list) return;

        // Apply suave-list class to the list itself
        list.classList.add('suave-list');

        const items = Array.from(list.children);
        const perPage = parseInt(container.getAttribute('data-per-page')) || 5;
        const totalPages = Math.ceil(items.length / perPage);

        if (totalPages <= 1) return; // No pagination needed

        // Create pagination controls container
        const controls = document.createElement('div');
        controls.className = 'pagination-controls';

        let currentPage = 1;

        const renderItems = () => {
            items.forEach((item, index) => {
                item.style.display = 'none'; // Hide all
                if (index >= (currentPage - 1) * perPage && index < currentPage * perPage) {
                    item.style.display = 'list-item'; // Show current page
                    // Add slight animation
                    item.style.opacity = '0';
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease';
                        item.style.opacity = '1';
                    }, 50);
                }
            });
        };

        const renderControls = () => {
            controls.innerHTML = ''; // Clear

            const prevBtn = document.createElement('button');
            prevBtn.innerHTML = '&larr; Previous';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    update();
                }
            });
            controls.appendChild(prevBtn);

            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.innerText = i;
                if (i === currentPage) btn.classList.add('active');
                btn.addEventListener('click', () => {
                    currentPage = i;
                    update();
                });
                controls.appendChild(btn);
            }

            const nextBtn = document.createElement('button');
            nextBtn.innerHTML = 'Next &rarr;';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    update();
                }
            });
            controls.appendChild(nextBtn);
        };

        const update = () => {
            renderItems();
            renderControls();
            // Scroll to top of container smoothly
            const offset = container.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        };

        // Initial setup
        container.appendChild(controls);
        update();
    });
});
