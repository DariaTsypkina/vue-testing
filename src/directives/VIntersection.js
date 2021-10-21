export default {
    mounted(el, binding) {

    // наблюдатель за всей страницей, наблюдаем за пересечением какого-то элемента
    const options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
          binding.value();
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    },
    name: 'intersection'
}