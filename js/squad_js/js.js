let player_card;
let player;
let player_image;
let img;
let player_details;
let player_name;
let player_position;

for(let i = 0 ; i <5; i++)
{
    player_card = document.createElement('div');
player_card.classList.add('player-card');

player = document.createElement('div');
player.classList.add('player');

player_image = document.createElement('div');
player_image.classList.add('player-image');

img = document.createElement('img');
img.setAttribute('src','https://www.primevolleyballleague.com/static-assets/images/players/4424.png?v=1.15');
img.setAttribute('alt','player image')
player_image.append(img);


player_details = document.createElement('div');
player_details.classList.add('player-details');


player_name = document.createElement('p');
player_name.classList.add('player-name')
player_name.innerText = 'Ibin Jose';
player_position = document.createElement('p');
player_position.classList.add('player-position')
player_position.innerText = 'Universal';



player_details.append(player_name);
player_details.append(player_position);

player.append(player_image);
player.append(player_details);

player_card.append(player);

document.querySelector('.player-holder').appendChild(player_card);

}


