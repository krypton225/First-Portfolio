const navbarItems = [
    {
        idItemLink: "link-home",
        dataName: "home",
        arialLabel: "Home",
        hrefLink: "home",
        iconItem: "home",
    },
    {
        idItemLink: "link-about",
        dataName: "about",
        arialLabel: "About",
        hrefLink: "about",
        iconItem: "info-circled",
    },
    {
        idItemLink: "link-works",
        dataName: "works",
        arialLabel: "Works",
        hrefLink: "works",
        iconItem: "briefcase",
    },
    {
        idItemLink: "link-tools",
        dataName: "tools",
        arialLabel: "Tools",
        hrefLink: "tools",
        iconItem: "wrench",
    },
    {
        idItemLink: "link-testimonials",
        dataName: "testimonials",
        arialLabel: "Testimonials",
        hrefLink: "testimonials",
        iconItem: "chat",
    },
    {
        idItemLink: "link-contact",
        dataName: "contact",
        arialLabel: "Contact",
        hrefLink: "contact",
        iconItem: "mail-alt",
    },
    {
        idItemLink: "link-hire",
        dataName: "hire me",
        arialLabel: "Hire Me",
        hrefLink: "hire",
        iconItem: "coffee",
    },
];

function setNavbarItems() {
    return navbarItems.map(({ idItemLink, dataName, arialLabel, hrefLink, iconItem }) => {
        document.getElementById("menu").innerHTML += `
        <li class="menu-item" data-name="${dataName}">
            <a href="#${hrefLink}" class="menu-link" id="${idItemLink}" aria-label="${arialLabel}">
                <i class="demo-icon icon-${iconItem}"></i>
            </a> <!-- ./menu-link -->
        </li> <!-- ./menu-item -->
        `
    });
}

export default setNavbarItems;