let player_images = [
"https://www.prokabaddi.com/static-assets/images/players/197.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/320.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/647.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4933.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3241.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3472.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3973.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4222.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4971.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5118.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/5121.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/489.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/726.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/579.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3088.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3240.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3239.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/4228.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/142.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/2041.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3189.png?v=5.49",
"https://www.prokabaddi.com/static-assets/images/players/3039.png?v=5.49",
]

const player_names = [
    'Pardeep Narwal',
    'Nitin Tomar',
    'Gulveer Singh',
    'James Kamweti',
    'Surender Gill',
    'Rathan K',
    'Durgesh Kumar',
    'Rohit Tomar',
    ' Aman',
    ' Mahipal',
    'Anil Kumar',
    'Abozar Mighani',
    'Babu M',
    ' Jaideep',
    'Nitesh Kumar',
    'Sumit',
    'Ashu Singh',
    'Shubham Kumar',
    'Sandeep Narwal',
    ' Gurdeep',
    'Nehal Desai',
    'Nitin Panwar'

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
    'Defender - Right Corner',
    'Defender - Left Cover',
    'Defender - Left Corner',
    'Defender - Right Corner',
    'Defender - Left Corner',
    'Defender - Right Cover',
    'Defender - Left Cover',
    'All Rounder',
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

