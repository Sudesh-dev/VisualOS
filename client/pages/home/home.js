document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "navbar",
        "../../components/navbar/index.html"
    );

    await loadComponent(
        "hero",
        "../../components/hero/index.html"
    );

    await loadComponent(
        "features",
        "../../components/features/index.html"
    );

});