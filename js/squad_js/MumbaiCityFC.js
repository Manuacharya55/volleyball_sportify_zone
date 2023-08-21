let player_images = [
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/174402.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36794.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55648.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35200.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63446.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/174266.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/19125.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35318.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/182725.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/21201.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/112690.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33965.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/11386.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/182727.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33997.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69065.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69532.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/26742.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69532.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/162191.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31843.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/27564.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63453.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/162860.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/23842.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/25877.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63450.png?v=6.6'
]

let player_names = [
    'Ahan Prakash ',
    'Bhaskar Roy ',
    'Mohamad Nawaz ',
    'Phurba Lachenpa',
    'Akash Mishra ',
    'Halen Nongtdu ',
    'Tiri ',
    'Mehtab Singh',
    'Nathan Rodrigues',
    'Rahul Bheke',
    'Rostyn Griffiths ',
    'Sanjeev Stalin ',
    'Alberto Noguera',
    'Franklin Nazareth',
    'Lalengmawia Ralte ',
    'Asif Khan ',
    'PC Rohlupuia',
    'Vinit rai',
    'Yoell Van Nieff',
    'Ayush Chhikara ',
    'Bipin Singh ',
    'Greg Stewart ',
    'Gurkirat Singh',
    'Gyamar Nikum ',
    'Jorge Diaz ',
    'Lallianzuala Chhangte',
    'Vikram Sing '

]

let position = [
    'Goalkeeper',
    'Goalkeeper',
    'Goalkeeper',
    'Goalkeeper',
    'Defender',
    'Defender',
    'Defender',
    'Defender',
    'Defender',
    'Defender',
    'Defender',
    'Defender',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'midfielder',
    'forward',
    'forward',
    'Forward',
    'Forward',
    'Forward',
    'Forward',
    'Forward',
    'Forward'
    
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
