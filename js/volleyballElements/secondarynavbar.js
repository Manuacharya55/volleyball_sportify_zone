class secondarynavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="secondary-navbar-holder">
            <nav class="secondary-navbar">
                <i class="fa-solid fa-bars"></i>

                <div class="websitelogo">
                    <img src="../logo.png" alt="">
                    <h3 id="logo-name">Sportify Zone</h3>
                </div>

                <ul>
                    <li class="secondary-links"><a href="./index.html" class="nav-links">home</a></li>
                    <li class="secondary-links"><a href="./fixtures.php" class="nav-links">fixtures</a></li>
                    <li class="secondary-links"><a href="./team.html" class="nav-links">squad</a></li>
                    <li class="secondary-links"><a href="./achievers.html" class="nav-links">achievers</a></li>
                    <li class="secondary-links"><a href="./standings.php" class="nav-links">standings</a></li>
                    <li class="secondary-links"><a href="./highlights.html" class="nav-links">highlights</a></li>
            </ul>
        </nav>
    </div>`
    }
}

customElements.define('secondary-navbar',secondarynavbar);
