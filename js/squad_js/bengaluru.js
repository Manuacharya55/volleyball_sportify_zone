let player_images = [
    'https://www.primevolleyballleague.com/static-assets/images/players/4424.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1101.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1102.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1003.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1058.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1099.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1001.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4420.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4425.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1095.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1013.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1074.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4467.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4468.png?v=1.15'
]

let player_names = [
    ' ibin jose',
    'vinayak rokhade',
    'midhun b',
    'jishnu p v',
    'mujeeb m c',
    'srajan shetty',
    'sudheer shetty',
    'alireza abalooch',
    'nisam muhammed',
    'pankaj sharma',
    'sethu t r',
    'tharun gowda',
    'tsvetelin tsvetanov',
    'vyshak renjith',
]

let position = [
    'universal',
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
