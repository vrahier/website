export function scrollToDiv(id) {
    let header = document.getElementsByTagName('header')[0];
    let div = document.getElementById(id);
    window.scrollTo({
      top: div.offsetTop ,
      behavior: "smooth"
    });
}
