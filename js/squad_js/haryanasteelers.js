let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/219.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/204.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/763.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3054.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3175.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3175.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4157.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4179.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4183.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5055.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/194.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4184.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4954.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4977.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5101.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5102.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5103.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5104.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4928.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5054.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3065.png?v=5.49",

]

let player_names = [
    'K Prapanjan',
'Rakesh Narwal',
 'Manjeet',
 'Vinay',
'Mohammad Mahalli',
'Maninder Singh',
'Lovepreet Singh',
' Sushil',
'Meetu Sharma',
'Manish Gulia',
'Joginder Narwal',
'Jaideep Dahiya',
'Mohit Nandal',
' Ankit',
'Monu Hooda',
'Naveen Kundu',
 'Harsh',
'Sunny Sehrawat',
'Amirhossein Bastami',
' Navneet',
'Nitin Rawal'

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
'Defender - Left Corner',
'Defender - Left Cover',
'Defender - Right Cover',
'Defender - Right Corner',
'Defender - Right Corner',
'Defender - Left Corner',
'Defender - Left Cover',
'Defender - Right Cover',
'Defender - Right Corner',
'Defender',
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
