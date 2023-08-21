let player_images = [
    'https://www.indiansuperleague.com/static-resources/images/players/small/0/13366.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157115.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157117.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63629.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/6079.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10624.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10712.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/154107.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163114.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/58793.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163108.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/46791.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/160847.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63700.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/34002.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163118.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163714.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/160846.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163123.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69529.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163201.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/4126.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163109.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/34007.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/162765.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163105.png?v=6.6' 

]

let player_names = [
    'Karanjit Singh',
'Sachin Suresh ',
'Bijoy Varghese ',
'Huidrom Singh ',
'Marko Leskovic ',
'Prabir Das ',
'Pritam Kotal',
'Ruivah Hormipam',
'Saheef Muhammed',
'S Sandeep Singh',
'Tejas Krishna',
'Adrian Luna ',
'Ayush Adhikari',
'Bryce Miranda ',
'Danish Farooq',
'Jeakson Singh ',
'Mohammed Azhar ',
'Nihal Sudeesh ',
'Saurav Mandal ',
'Vibin Mohanan ',
'Bidyashagar K ',
'Dimitrios Diamantakos',
'Jaushua Sotirio ',
'Mohammed Aimen ',
'Rahul K Praveen ',
'Sagolsem Bikash ',
'Sreekuttan MS '


]

let position = [
    'goalkeeper',
'goalkeeper',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'forward',
'forward',
'forward',
'forward',
'forward',
'forward',
'forward'

    
]

let span;
let player_image;
for (let arr in player_images) {
    player_card = document.createElement('div');
    player_card.classList.add('player-card');

    player = document.createElement('div');
    player.classList.add('player');

    player_image = document.createElement('div');
    player_image.classList.add('player-image');

    span = document.createElement('p');
    span.classList.add('position-text');
    span.innerText = position[arr];

    img = document.createElement('img');
    img.setAttribute('src', player_images[arr]);
    img.setAttribute('alt', 'player image')
    player_image.append(img);
    player_image.append(span);

    player_details = document.createElement('div');
    player_details.classList.add('player-details');


    player_name = document.createElement('p');
    player_name.classList.add('player-name')
    player_name.innerText = player_names[arr];
    player_position = document.createElement('p');
    player_position.classList.add('player-position')
    player_position.innerText = position[arr];



    player_details.append(player_name);
    player_details.append(player_position);

    player.append(player_image);
    player.append(player_details);

    player_card.append(player);

    document.querySelector('.player-holder').appendChild(player_card);

}
