let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/3097.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3970.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4963.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5093.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5130.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3099.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5130.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3014.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3161.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3236.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4224.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4962.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4964.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4965.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5003.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4198.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5046.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5012.png?v=5.49",

]

let player_names =
[ 'Ajinkya Pawar',
'Himanshu Narwal',
'Himanshu Singh',
 'Narender',
 'Sachin',
 'Ankit' ,
 'Sahil',
'M. Abishek',
 'Himanshu',
' Sagar',
'Arpit Saroha',
' Aashish',
' Mohit',
'Sahil Gulia',
'Md. Arif Rabbani',
'K. Abhimanyu',
'Visvanath V',
'Thanushan Laxmamohan',
]

let position =[
    'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Defender',
'Defender',
'Defender - Right Cover',
'Defender - Left Corner',
'Defender - Right Corner',
'Defender - Right Corner',
'Defender - Left Cover',
'Defender - Left Cover',
'Defender - Left Corner',
'Defender - Left Corner',
'All-Rounder',
'All-Rounder',
'All-Rounder',

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
