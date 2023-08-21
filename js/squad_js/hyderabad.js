let player_images = [
    'https://www.primevolleyballleague.com/static-assets/images/players/1063.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1009.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4473.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1060.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/2867.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1007.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4469.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1136.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1002.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4434.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4431.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4432.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1093.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1055.png?v=1.15'
]

let player_names = [
    'arun siby',
    'guru prashanth',
    'aadeeshearan a',
    'lal sujan m v',
    'trent O Dea',
    'anand k',
    'deepu venugopal',
    'a bhagyaraj',
    'john joseph',
    'saurabh maan',
    'carlos zamora',
    'hemanth p',
    'varun',
    'vignesh raj',

]

let position = [
    'universal',
    'universal',
    'setter',
    'setter',
    'middle blocker',
    'libero',
    'libero',
    'blocker',
    'blocker',
    'blocker',
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
