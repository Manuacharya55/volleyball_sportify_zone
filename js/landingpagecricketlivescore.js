
// const liveurl = "https://api.cricapi.com/v1/currentMatches?apikey=a5a9beba-c0a7-44ba-9373-f21eb47b7d41";


const liveurl = "https://api.cricapi.com/v1/currentMatches?apikey=54d2f2db-49ec-40f3-b07e-db5fbc12280c";
const request = new Request(liveurl);

fetch(request)
    .then(response => response.json())
    .then(data => {
        if (data.status !== "success") {
            alert("Failed");
            return;
            // const request = new Request(liveurl);
        }

        const matches = data.data;
        // console.log(matches);


        for (let i=0; i<6; i++) {

            const card = document.createElement('div');
            card.classList.add('live-card');

            // code for code header
            const matchname = document.createElement('div');
            matchname.classList.add('match-name');

            const name = document.createElement('span');
            name.classList.add('name');
            // const date = document.createElement('span');
            // name.classList.add('date');


            // code for card body
            const cardbody = document.createElement('div');
            cardbody.classList.add('card-body');

            const team1status = document.createElement('div');
            team1status.classList.add('team1-status');

            const team1 = document.createElement('div');
            team1.classList.add('team');
            const img1 = document.createElement('img');
            img1.setAttribute('src', '');
            const team1score = document.createElement('span');
            team1score.classList.add('team1-score');



            const team2status = document.createElement('div');
            team2status.classList.add('team2-status');
            const team2 = document.createElement('div');
            team2.classList.add('team');
            const img2 = document.createElement('img');

            const team2score = document.createElement('span');
            team2score.classList.add('team1-score');

            const result = document.createElement('div');
            result.classList.add('result');

            const finalresult = document.createElement('span');
            finalresult.classList.add('final-result');



            name.innerText = matches[i].name;
            // date.innerText = match.date;
            matchname.append(name);
            // matchname.append(date);

            // card body
            img1.setAttribute('src', matches[i].teamInfo[0].img)
            img2.setAttribute('src', matches[i].teamInfo[1].img)

            try {
                team1score.innerText = `(${matches[i].score[0].o} ovr)  ${matches[i].score[0].r}/${matches[i].score[0].w}`;
                team2score.innerText = `(${matches[i].score[1].o} ovr)  ${matches[i].score[1].r}/${matches[i].score[1].w}`;
            }
            catch (error) {
                team1score.innerText = "yet to play";
                team2score.innerText = "yet to play";
            }

            team1.append(img1);
            team1status.append(team1);
            team1status.append(team1score);

            team2.append(img2);
            team2status.append(team2);
            team2status.append(team2score);


            finalresult.innerText = matches[i].status;
            result.append(finalresult)

            cardbody.append(team1status);
            cardbody.append(team2status);
            cardbody.append(result);

            card.append(matchname);
            card.append(cardbody);


            document.querySelector(".card-wrapper").appendChild(card);
        }
    })
    .catch(error => console.log(error));


