let player_images = ['https://www.primevolleyballleague.com/static-assets/images/players/4413.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1049.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1048.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/4416.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1045.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/4418.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/4414.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1044.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1140.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/4417.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/4466.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1134.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1041.png?v=1.15',

    'https://www.primevolleyballleague.com/static-assets/images/players/1040.png?v=1.15']

let player_names = [
    'Adrew James',
    'a rangaswamy',
    'harsh chaudhary',
    'ashwath pandiyaraj',
    'A muthuswamy ',
    't srikanth',
    'danial moatazedi',
    'lm manoj',
    'muhhmad iqbal',
    'parth patel',
    's nandhagopal',
    'ragul t',
    's santosh',
    'shon john'

]

let position = [
    'universal',
    'universal',
    'universal',
    'setter',
    'setter',
    'libero',
    'blocker',
    'blocker',
    'blocker',
    'blocker',
    'attacker',
    'attacker',
    'attacker',
    'attacker',
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
