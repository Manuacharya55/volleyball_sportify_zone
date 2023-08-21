let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/4022.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4959.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5116.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/259.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3000.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3011.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3234.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4141.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4192.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5108.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5052.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5053.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5078.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5128.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3176.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4917.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4960.png?v=5.49",

    
    
]

let player_names =[
    'Pankaj Mohite',
'Mohit Goyat',
'Akash Shinde',
'Aditya Shinde',
'Fazel Atrachali',
' Sombir',
'Balasaheb Jadhav',
'Sanket Sawant',
'D MahindraPrasad',
'Abinesh Nadarajan',
'Badal Singh',
'Alankar Patil',
'Rakesh Ram',
'Harsh Lad',
'Gaurav Khatri',
'Mohammad Nabibakhsh',
'Govind Gurjar',
'Aslam Inamdar',

]

let position = [
    'Raider',
    'Raider',
    'Raider',
    'Raider',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'Defender - Right Cover',
    'Defender - Left Cover',
    'Defender - Left Corner',
    'Defender - Right Cover',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'Defender - Right Cover',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'All-Rounder',
    'All-Rounder',
    'All-rounder',
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
