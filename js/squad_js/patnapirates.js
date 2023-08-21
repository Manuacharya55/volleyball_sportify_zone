let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/757.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3082.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/644.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4757.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4958.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5091.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5107.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5057.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3107.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3106.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5092.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4957.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5033.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5090.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3023.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3343.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4058.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4798.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4925.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3174.png?v=5.49",

]

let player_names = [
    'Sachin ',
'Monu ',
'Tomar Anand',
'S Vishwas',
'Rohit ',
'Naik Ranjit',
'Kumar Anuj',
'Bodake Akshay Jaywant',
'Kumar Neeraj',
'Sunil ',
'Yuvaraj Thiyagarajan',
'Manish ',
'Chaudhary Shivam',
'Sharma Naveen',
'Gulia Rohit',
'C Sajin',
'Kumar Sager',
'Insamam Abdul',
'Chiyaneh Mohammadreza',
'Odhiambo Daniel',

]

let position =[
    'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Defender - Right Cover',
'Defender - Right Corner',
'Defender',
'Defender',
'Defender - Right Cover',
'Defender',
'All-Rounder',
'All-Rounder',
'All-rounder',
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
