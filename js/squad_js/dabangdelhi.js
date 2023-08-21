let player_images = [
    "https://www.prokabaddi.com/static-assets/images/players/2296.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/3965.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4947.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/5100.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/5123.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/240.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/290.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/212.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/3159.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4950.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4020.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4948.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4949.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4950.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/5096.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/5004.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/5059.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/3081.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/4106.png?v=5.49",
    "https://www.prokabaddi.com/static-assets/images/players/5021.png?v=5.49",
    
]

let player_names = [
    'Naveen Kumar',
 'Manjeet',
'Ashu Malik',
'Ashish Narwal',
'Suraj Panwar',
'Ravi Kumar',
'Sandeep Dhull',
'Amit Hooda',
' Vishal',
'Anil Kumar',
' Monu',
' Dipak',
 'Krishan',
'Vinay Kumar',
'Vijay Kumar',
'Md.Liton Ali',
' Aakash',
'Vijay Malik',
'Tejas Patil',
'Reza Katoulinezhad'

]

let position = [
    'Raider',
    'Raider',
    'Raider',
    'Raider',
    'Raider',
    'Defender - Right Cover',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'Defender - Left Cover',
    'Defender - Left Cover',
    'Defender - Right Corner',
    'Defender',
    'Defender - Right Corner',
    'Defender',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'Defender',
    'All-Rounder',
    'All-Rounder',
    'All-Rounder'

]

let span;
let player_image;
for (let arr in player_images) {
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
    img.setAttribute('src', player_images[arr]);
    img.setAttribute('alt', 'player image')
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
