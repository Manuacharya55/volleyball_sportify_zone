class secondarynavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="secondary-navbar-holder">
            <nav class="secondary-navbar">
                <i class="fa-solid fa-bars"></i>

                <div class="websitelogo">
                    <img src="./logo.png" alt="">
                    <h3 id="logo-name">Sportify Zone</h3>
                </div>

                <ul>
                    <li class="secondary-links"><a href="./index.html" class="nav-links">home</a></li>
                    <li class="secondary-links"><a href="./news.html" class="nav-links">News</a></li>
                    <li class="secondary-links"><a href="./cricketlivescore.html" class="nav-links">Live Scores</a></li>
                    <li class="secondary-links"><a href="./cricketscoretracking/loginsystem/login.php" class="nav-links">Score Tracking</a></li>
                    <li class="secondary-links"><a href="./aboutus.html" class="nav-links">About us</a></li>
            </ul>
        </nav>
    </div>`
    }
}

customElements.define('secondary-navbar',secondarynavbar);
