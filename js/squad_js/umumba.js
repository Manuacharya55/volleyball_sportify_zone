let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/3032.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3028.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3027.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4970.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4968.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5002.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5112.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5119.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5117.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5018.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/123.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/784.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3086.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3169.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3138.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4969.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3964.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4032.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4186.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5037.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5032.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5016.png?v=5.49",

]

let player_names = [
    'Guman Singh',
 'Ashish',
 'Ankush',
 'Shivam',
 'Kamlesh',
'Jai Bhagwan',
 'Rupesh',
 'Sachin',
'Pranay Rane',
'Heidarali Ekrami',
'Vishal Mane',
'Vishnu Landge',
'Surinder Singh',
' Satywan',
'Harendra Kumar',
' Prince',
' Rinku',
'Shivansh Thakur',
'Rahul Sethpal',
'Kiran Magar',
' Mohit',
'Gholamabbas Korouki'

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
'Defender',
'Defender',
'Defender - Right Cover',
'Defender - Left Cover',
'Defender - Left Cover',
'Defender - Left Cover',
'Defender - Right Corner',
'Defender - Right Cover',
'Defender - Right Corner',
'Defender - Left Corner',
'Defender - Left Corner',
'All-Rounder'
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
