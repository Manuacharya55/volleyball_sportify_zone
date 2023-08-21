class PrimaryNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="primary-navbar-holder">
        <nav class="navigation">
            <ul>
                <li><a class="nav-links"><i class="fa-solid fa-circle-xmark"></i>
                </li>

                <li class="links"><a href="./index.html" class="nav-links"><i class="fa-solid fa-house"></i>
                    <span class="tooltiptext">Home</span></a></li>

                <li class="links"><a href="http://localhost/refactoring%20sportifyzone/Football/index.html" class="nav-links"><i class="fa-sharp fa-regular fa-futbol"></i>
                    <span class="tooltiptext">Football</span></a></li>

                <li class="links"><a href="./Volleyball/index.html" class="nav-links"><i class="fa-solid fa-volleyball"></i>
                        <span class="tooltiptext">Volleyball</span></a></a></li>

                <li class="links"><a href="http://localhost/refactoring%20sportifyzone/Football/index.html" class="nav-links"><i class="fa-solid fa-baseball"></i><span
                            class="tooltiptext">Cricket</span></a></li>

                <li class="links"><a href="http://localhost/refactoring%20sportifyzone/Football/index.html" class="nav-links"><i class="fa-solid fa-person-walking"></i><span
                            class="tooltiptext">Kabaddi</span>
                    </a></li>
            </ul>
        </nav>
    </div>
        `
    }
}

customElements.define('primary-navbar',PrimaryNavbar);
