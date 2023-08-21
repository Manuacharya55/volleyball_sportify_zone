let player_images = [
    'https://www.primevolleyballleague.com/static-assets/images/players/1133.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4475.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4450.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1006.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4474.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1021.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1017.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1018.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4446.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4441.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/4448.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1014.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/1000.png?v=1.15',
    'https://www.primevolleyballleague.com/static-assets/images/players/998.png?v=1.15'
]

let player_names = [
    'jibin sebastian',
    'shubham chaudary',
    'pavan ramesh',
    'vipul kumar',
    'prem singh',
    'venu chikkanna',
    'abhinav bs',
    'dushyanth g n',
    'fayis n k',
    'walter neto',
    ' aswin rag vt',
    'erin varghese',
    'george antony',
    'rohit kumar'

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
