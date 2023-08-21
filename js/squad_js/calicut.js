let player_images = [
    'https://www.primevolleyballleague.com/static-assets/images/players/1064.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1062.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4472.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1020.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1033.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4440.png?v=1.15',
' ',
'https://www.primevolleyballleague.com/static-assets/images/players/1142.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4471.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4435.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/4439.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1053.png?v=1.15',
'https://www.primevolleyballleague.com/static-assets/images/players/1507.png?v=1.15',
' ',
'https://www.primevolleyballleague.com/static-assets/images/players/4437.png?v=1.15',

]

let player_names = [
   ' Ansab ansab o',
   ' Vinith jerome',
   ' Arshak shan',
   ' Asham ali',
   ' M Ukkrapandian',
   ' Sushil kumar',
   ' Fallaha al jaradi',
   ' Prabhakaran',
   ' Harsh malik',
   ' Jose sandoval',
   ' Shafeeque rahman',
   ' Abil krishnan',
   ' Chirag yavdav',
   ' M Ashwin raj'
    

]

let position = [
     ' universa',
     ' universal',
     ' setter',
     ' setter',
     ' setter',
     ' setter',
     ' outside hitter',
     ' libero',
     ' blocker',
     ' blocker',
     ' blocker',
     ' attacker',
     ' attacker',
     ' attacker',
     ' attacker',

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
