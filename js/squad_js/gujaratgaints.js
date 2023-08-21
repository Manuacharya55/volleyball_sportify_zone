let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/36.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/155.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/163.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/326.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/522.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3075.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3128.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4939.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3966.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4952.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4974.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5124.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5019.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5019.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/185.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3084.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/621.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3593.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/248.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4693.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4750.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5050.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5132.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2297.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5122.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5039.png?v=5.49",

]

let player_names = [
    'Chandran Ranjit',
'Prashanth Kumar Rai',
'Mahendra Rajput',
'Rohit Kumar',
'Dong Geon Lee',
'Purna Singh',
' Sonu',
'Pardeep Kumar',
' Rakesh',
' Sohit',
' Sawin',
'Parteek Dahiya',
'Mohammad Ghorbani',
 'Sandeep',
'Vijin Thangadurai',
'Rinku Narwal',
'Baldev Singh',
'Sourav Gulia',
'Sandeep Kandola',
' Manuj',
' Kapil',
'Ujjval Singh',
'Priyank Chandel',
'Arkam Shaikh',
'Rohan Singh',
'Shankar Gadai'
]

let position = [
    'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Defender',
'Defender - Right Cover',
'Defender - Left Corner',
'Defender - Right Corner',
'Defender - Right Cover',
'Defender - Left Corner',
'Defender - Right Corner',
'Defender - Right Cover',
'Defender - Left Cover',
'Defender',
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
