let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/388.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2322.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2290.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2028.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2026.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5095.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/322.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3083.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/357.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/768.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3095.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3227.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3969.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4966.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4967.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5109.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5110.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5111.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/567.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3208.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4795.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4923.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5074.png?v=5.49",

]

let player_names =[
    'Monu Goyat',
'Ankit Beniwal',
 'Rajnish',
'Abhishek Singh',

    'Siddharth Desai',
 'Vinay',
'Surjeet Singh',
'Vishal Bhardwaj',
'Parvesh Bhainswal',
'Vijay Kumar',
'Adarsh T',
' Ankit',
'Prince D',
'Muhammed Shihas',
'Palla Ramakrishna',
'Mohit Pahal',
' Mohit',
 'Nitin',
'Mohsen Maghsoudlou',
' Ravinder',
'K Hanumanthu',
'Hamid Nader',
 'Sumit',

]

let position =[
    'Raider',
    'Raider',
    'Raider',
    'Raider',
    'Raider',
    'Raider',
    'Defender - Right Cover',
    'Defender - Left Corner',
    'Defender - Left Cover',
    'Defender - Right Corner',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'Defender - Right Cover',
    'Defender - Left Corner',
    'Defender - Left Cover',
    'Defender - Left Corner',
    'Defender - Left Cover',
    'Defender - Right Cover',
    'All-Rounder',
    'All-Rounder',
    'All-rounder',
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
