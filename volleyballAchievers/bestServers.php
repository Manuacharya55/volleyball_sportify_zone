<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Zone</title>
    <link rel="stylesheet" href="../css/table.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>

    <div class="navigate-back">
        <a href="../Volleyball/achievers.html" id="backward"><i class="fa-solid fa-arrow-left"></i></a>
    </div>

    <main class="table">
        <section class="table__header">
            <h1>Best Servers</h1>
        </section>
        <section class="table__body">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Shirt</th>
                        <th>Team</th>
                        <th>Serve points</th>
                        <th>Errors</th>
                        <th>Attemps</th>
                        <th>Average</th>
                        <th>Success</th>
                        <th>Total</th>

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

            $sql = "SELECT * FROM `best_servers`;";
            $result=$connection->query($sql);
            if(!$result)
            {
                die("Invalid query:".$connection->error);

            }
            while($row=$result->fetch_assoc())
            {
                echo "<tr>
                <td>".$row["Player Name"]."</td>
                <td>".$row["Shirt"]."</td>
                <td>".$row["TeamTeam"]."</td>
                <td>".$row["serve-points"]."</td>
                <td>".$row["Errors"]."</td>
                <td>".$row["Attemps"]."</td>
                <td>".$row["Average"]."</td>
                <td>".$row["Success"]."</td>
                <td>".$row["Total"]."</td>
                
                </tr>";

            }
            ?>
                </tbody>
            </table>
            <section>
    </main>
</body>

</html>