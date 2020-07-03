export const smoothScroll = (sectionId, eventElementId) => {
  document.getElementById(eventElementId).addEventListener("click", function() {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
};
