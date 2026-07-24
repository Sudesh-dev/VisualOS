/**
 * ==========================================
 * VisualOS Component Loader
 * ==========================================
 */

async function loadComponent(containerId, componentPath) {

    try {

        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(`Cannot load ${componentPath}`);
        }

        const html = await response.text();

        const container = document.getElementById(containerId);

        if (!container) {
            console.error(`Container "${containerId}" not found.`);
            return;
        }

        container.innerHTML = html;

        // Re-render Lucide icons
        if (window.lucide) {
            lucide.createIcons();
        }

    }

    catch (error) {

        console.error(error);

    }

}