
class VolleyballFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
                <div class="footerContainer">

                    <div class="socialIcons">
                        <a href=" "> <i class="fa-brands fa-facebook"></i></a>
                        <a href=" "> <i class="fa-brands fa-twitter"></i></a>
                        <a href=" "> <i class="fa-brands fa-instagram"></i></a>
                        <a href=" "><i class="fa-solid fa-envelope"></i></a>
                        <a href=" "> <i class="fa-brands fa-discord"></i></a>
                    </div>

                    <div class="footerNav">
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./fixtures.php">Fixtures</a></li>
                            <li><a href="./team.html">Squads</a></li>
                            <li><a href="./standings.php">standings</a></li>
                            <li><a href="./achievers.html">Achievers</a></li>
                            <li><a href="./highlights.html">Highlights</a></li>

                        </ul>
                    </div>

                </div>

                <div class="footerBottom">
                    <p>copyright &copy;2023; designed by<span class="designer">Sportify Zone</span></p>
                </div>
            </footer>
        `
    }
}

customElements.define('page-footer',VolleyballFooter);