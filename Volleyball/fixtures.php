<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sportify Zone</title>
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../css/fixtures.css">

</head>

<body id="top-navigation">
    <a href="#top-navigation" class="moveup"><i class="fa-solid fa-arrow-turn-up"></i></a>
    <div class="main-container">
        <primary-navbar></primary-navbar>

            <div class="content-holder">
                <secondary-navbar></secondary-navbar>

                    <div class="container">

                        <div class="tab">
                            <button class="tablink active-tab-btn" id="tab1">Season 2</button>
                            <button class="tablink" id="tab2">Season 1</button>
                        </div>

                        <div id="season2" class="tabcontent active-tab">
                            <!-- season2 score cards -->
                            <div class="fixture-holder">
                                <?php
            $servername="localhost";
            $username="root";
            $password="";
            $database="volleyball";

            $connection=new mysqli($servername,$username,$password,$database);
            if($connection->connect_error)
            {
                die("connection failed:".$connection->connect_error);
                
            }

            $sql = "SELECT * FROM `fixtureseason2`";
            $result=$connection->query($sql);
            if(!$result)
            {
                die("Invalid query:".$connection->error);

            }
            while($row=$result->fetch_assoc())
            {
    
            echo '
            <section class = "card">
            <div class="card-header">
                <span class="match-name font">'.$row["match name"].'</span>
                <span class="date font">'.$row["date"].'</span>
            </div>

            <div class="card-body">
            <div class="teams">
                <img  alt="team-logo" class="team-logo '.$row["team1"].'">
                
                <img  alt="team-logo" class="team-logo '.$row["team2"].'">
            </div>

            <div class="scores">
            <span class="sets">'.$row["result"].'</span>
            </div>
            </section>';
            }
            ?>
                            </div>
                        </div>

                        <!-- season1 score cards -->

                        <div id="season1" class="tabcontent">
                            <div class="fixture-holder">
                                <?php
            $servername="localhost";
            $username="root";
            $password="";
            $database="volleyball";

            $connection=new mysqli($servername,$username,$password,$database);
            if($connection->connect_error)
            {
                die("connection failed:".$connection->connect_error);
                
            }

            $sql = "SELECT * FROM `fixtureseason1`";
            $result=$connection->query($sql);
            if(!$result)
            {
                die("Invalid query:".$connection->error);

            }
            while($row=$result->fetch_assoc())
            {
    
        echo '
        <section class = "card">
            <div class="card-header">
                <span class="match-name font">'.$row["match name"].'</span>
                <span class="date font">'.$row["date"].'</span>
            </div>

            <div class="card-body">
            <div class="teams">
                <img  alt="team-logo" class="team-logo '.$row["team1"].'">
                
                <img  alt="team-logo" class="team-logo '.$row["team2"].'">
            </div>

            <div class="scores">
            <span class="sets">'.$row["result"].'</span>
            </div>
            </section>';
        }
        ?>
                            </div>
                        </div>

                        <!-- <script>
                        const tabs = document.querySelectorAll('.tablink');
                        const contents = document.querySelectorAll('.tabcontent');

                        tabs.forEach((element, index) => {
                            element.addEventListener('click', () => {
                                tabs.forEach((element1, index1) => {
                                    element1.classList.remove('active-tab-btn');
                                    contents[index1].classList.remove('active-tab');
                                })
                                element.classList.add('active-tab-btn');
                                contents[index].classList.add('active-tab');
                            })
                        })
                        </script> -->
                        <page-footer></page-footer>
                    </div>
            </div>
    </div>

    <script src="../js/volleyballElements/primarynavbar.js"></script>
    <script src="../js/volleyballElements/secondarynavbar.js"></script>
    <script src="../js/volleyballElements/footer.js"></script>
    <script src="../js/tabbedmenu.js"></script>
    <script src="../js/navbar.js"></script>
    <script src="../js/volleyballElements/teams.js"></script>

    <!-- </script> -->
</body>

</html>