<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Zone</title>
    <link rel="stylesheet" href="../css/standings.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>
    <div class="main-container">
        <primary-navbar></primary-navbar>

        <div class="content-holder">
            <secondary-navbar></secondary-navbar>

            <div class="container">
            <div class="tabbed-menu-holder">
                <div class="tab">
                    <button class="tablink active-tab-btn" id="tab1">Season 2</button>
                    <button class="tablink" id="tab2">Season 1</button>
                </div>

                <div id="season2" class="tabcontent active-tab">
                    <main class="table">
                        <section class="table__header">
                            <h1>Volleyball standings 2023</h1>
                        </section>
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Team</th>
                                        <th>Played</th>
                                        <th>Won</th>
                                        <th>Draw</th>
                                        <th>Lost</th>
                                        <th>Sets Won</th>
                                        <th>Sets Lost</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
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

                                        $sql = "SELECT * FROM `2023table`;";
                                        $result=$connection->query($sql);
                                        if(!$result)
                                        {
                                            die("Invalid query:".$connection->error);

                                        }
                                        while($row=$result->fetch_assoc())
                                        {
                                            echo "<tr>
                                            <td>".$row["Rank"]."</td>
                                            <td>".$row["Team"]."</td>
                                            <td>".$row["Played"]."</td>
                                            <td>".$row["Won"]."</td>
                                            <td>".$row["Draw"]."</td>
                                            <td>".$row["Lost"]."</td>
                                            <td>".$row["Sets Won"]."</td>
                                            <td>".$row["Sets Lost"]."</td>
                                            <td>".$row["Points"]."</td>
                                            
                                            </tr>";

                                        }
                                        ?>
                                </tbody>
                            </table>
                        </section>
                    </main>
                </div>

                <!-- season1 standings -->

                <div id="season1" class="tabcontent">
                    <main class="table">
                        <section class="table__header">
                            <h1>Volleyball standings 2022</h1>
                        </section>
                        <section class="table__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Team</th>
                                        <th>Played</th>
                                        <th>Won</th>
                                        <th>Draw</th>
                                        <th>Lost</th>
                                        <th>Sets Won</th>
                                        <th>Sets Lost</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
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

                                        $sql = "SELECT * FROM `2022table`;";
                                        $result=$connection->query($sql);
                                        if(!$result)
                                        {
                                            die("Invalid query:".$connection->error);

                                        }
                                        while($row=$result->fetch_assoc())
                                        {
                                            echo "<tr>
                                            <td>".$row["Rank"]."</td>
                                            <td>".$row["Team"]."</td>
                                            <td>".$row["Played"]."</td>
                                            <td>".$row["Won"]."</td>
                                            <td>".$row["Draw"]."</td>
                                            <td>".$row["Lost"]."</td>
                                            <td>".$row["Sets Won"]."</td>
                                            <td>".$row["Sets Lost"]."</td>
                                            <td>".$row["Points"]."</td>
                                            
                                            </tr>";

                                        }
                                        ?>
                                </tbody>
                            </table>
                        </section>
                    </main>
                </div>
        </div>
        </div>
            <page-footer></page-footer>
        </div>
    </div>
    <script src="../js/volleyballElements/primarynavbar.js"></script>
    <script src="../js/volleyballElements/secondarynavbar.js"></script>
    <script src="../js/volleyballElements/footer.js"></script>
    <script src="../js/navbar.js"></script>
    <script src="../js/tabbedmenu.js"></script>

</body>

</html>