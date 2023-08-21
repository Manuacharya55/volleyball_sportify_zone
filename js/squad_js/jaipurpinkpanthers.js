let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/81.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/660.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2024.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3053.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3238.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3152.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5106.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5106.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3574.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4036.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4769.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4956.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5042.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5105.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5113.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5023.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5022.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5126.png?v=5.49",

]

let player_names = [
    'Rahul Chaudhari',
'Bhavani Rajput',
'Arjun Deshwal',
'V Ajith Kumar',
' Navneet',
'Nitin Panwar',
' Devank',
'Sunil Kumar',
 'Ankush',
'Nitin Chandel',
'Sahul Kumar',
'Deepak Singh',
'Lucky Sharma',
 'Ashish',
'Abhishek KS',
'Woosan Ko',
'Reza Mirbagheri',
'Marimuthu Kamaraj'

]

let position =[
    'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Raider',
'Defender - Left Cover',
'Defender - Left Corner',
'Defender - Right Corner',
'Defender - Right Corner',
'Defender - Right Cover',
'Defender - Right Corner',
'Defender - Left Corner',
'Defender - Left Cover',
'Defender - Left Cover',
'Defender - Right Cover',
'Defender - Left Cover'

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
