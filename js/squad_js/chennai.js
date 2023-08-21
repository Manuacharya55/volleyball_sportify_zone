let player_images = [
'https://www.primevolleyballleague.com/static-assets/images/players/4452.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1037.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1034.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1046.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4451.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1061.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1031.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4447.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4449.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4444.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1075.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1024.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4445.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4442.png?v=1.15',

]

let player_names = [
'Abdul Chisti',
'jobin varghese',
'pinamma prashant',
'prasanna raja',
'aswin sekar',
'ramkumar r',
'akhin GS',
'tushar laware',
'vijay yejeria',
'kevin moyo',
'm riyazudeen',
'naveen raja',
'raman kumar',
'renato mendes'

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
