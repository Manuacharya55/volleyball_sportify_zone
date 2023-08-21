let player_images = [
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35236.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33956.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157109.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35212.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/144508.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/162984.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/65446.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/15594.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10641.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/122440.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55653.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31824.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69467.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/158177.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/162983.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157105.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/39346.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/25876.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/26765.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/38813.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/3813.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33962.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/142363.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/161666.png?v=6.6'
    

]

let player_names = [
    'Arshdeep Singh ',
'Dheeraj M',
'Hrithik Tiwari ',
'Aibanbha Dohling ',
'Leander D Cunha',
'Lesly Rebello ',
'M Fares Arnaout',
'Odei Onaindia ',
'Sandesh Jhingan',
'Sanson Pereira',
'Saviour Gama ',
'Seriton Fernandes ',
'Ayush Dev Chhetri ',
'Brandon Fernandes ',
'Brison Fernandes ',
'Lalremruata Pialtu ',
'Muhammed Nemil ',
'Paulo Retre',
'Rowllin Borges ',
'Udanta Singh ',
'Alvaro Vazquez ',
'Boris Singh',
'Carlos Martinez ',
'Devendra M ',
'Noah Wail Sadaoui'


]

let position = [
    'goalkeeper',
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
