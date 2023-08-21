let player_images = [
    'https://www.primevolleyballleague.com/static-assets/images/players/1090.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1086.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1005.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1087.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4423.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1030.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4415.png?v=1.15',
    '',
    'https://www.primevolleyballleague.com/static-assets/images/players/1143.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1082.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1010.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1078.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1012.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4419.png?v=1.15',
    ''
]

let player_names = [
    'vinit kumar',
    'janshad',
    'v hariharan',
    'hari prasad',
    'kushal munshi',
    'abhilash chaudary',
    'jose verdi',
    'praful s',
    'aush',
    'ashwal rai',
    'cody caldwell',
    'rahul',
    'raison benet',
    'suryansh tomar'

]

let position = [
    'universal',
    'setter',
    'setter',
    'libero',
    'libero',
    'blocker',
    'blocker',
    'blocker',
    'attacker',
    'attacker',
    'attacker',
    'attacker',
    'attacker',
    'attacker'
]

let span;
let player_image;
for(let arr in player_images)
{
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
img.setAttribute('src',player_images[arr]);
img.setAttribute('alt','player image')
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
