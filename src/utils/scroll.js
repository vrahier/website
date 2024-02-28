export function scrollToDiv(id) {
  let div = document.getElementById(id);
  window.scrollTo({
    top: div.offsetTop,
    behavior: 'smooth'
  });
}
