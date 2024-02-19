


if (localStorage.getItem("isSmall") === "yes") {
  
  // @ts-ignore
  sidebarId.classList.add("small-sidebar");
} else {
  // @ts-ignore
  sidebarId.classList.remove("small-sidebar");
}

const toggleSidebar = () => {
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    // @ts-ignore
    sidebarId.classList.remove("small-sidebar");
  } else {
    localStorage.setItem("isSmall", "yes");
    // @ts-ignore
    sidebarId.classList.add("small-sidebar");
  }
};