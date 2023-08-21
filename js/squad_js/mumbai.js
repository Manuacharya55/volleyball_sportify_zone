let player_images = [
    'https://www.primevolleyballleague.com/static-assets/images/players/1023.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4470.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1084.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1059.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1022.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4429.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1072.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1016.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1096.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1138.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/999.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4427.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1038.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4428.png?v=1.15',

]

let player_names = [
    'abdul raheem',
    'dogra omkar',
    'aravindha',
    'jithin neelathaz',
    'darshan gowda',
    'ratheesh c k',
    'anu james',
    'karthik madhu',
    'rohith',
    'shameemudheen a',
    'amit gulla',
    'brandon greenway',
    'hardeep singh',
    'hiroshi centelles'

]

let position = [
    'universal',
    'universal',
    'setter',
    'setter',
    'libero',
    'libero',
    'blocker',
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
