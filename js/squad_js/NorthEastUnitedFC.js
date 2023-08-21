let player_images = [
    'https://www.indiansuperleague.com/static-resources/images/players/small/0/163023.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35313.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/144515.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/32246.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36317.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/156378.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69478.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/32246.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36348.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/144499.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/159250.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36520.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69563.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35286.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/68875.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/68809.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/71040.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/32246.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/61097.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163619.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10688.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/38543.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/19383.png?v=6.6' 
    
]

let player_names = [
    'Khoirom Singh ',
    'Mirshad Michu ',
    'Nikhil Deka',
    'Buanthanglun Samte ',
    'Gaurav Bora ',
    'Hira Mondal ',
    'Joe Zoherliana ',
    'Michel Zabaco',
    'Tondonba Singh',
    'Emanuel L ',
    'Emil Benny ',
    'Gani Nigam ',
    'Konsam Singh',
    'Mohamed Irshad ',
    'Pragyan Gogoi ',
    'Alfred Lalroutsang ',
    'Dipu Mirdha ',
    'Ibson ',
    'Jithin M.S',
    'Prathib Gogoi ',
    'Redeem Tlang',
    'Rochharzela',
    'Romain Philippoteaux'
    

]

let position = [
    'Goalkeeper',
    'Goalkeeper',
    'Goalkeeper',
    'defender',
    'Defender',
    'defender',
    'Defender',
    'Defender',
    'Defender',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Midfielder',
    'Forward',
    'Forward',
    'Forward',
    'Forward',
    'Forward',
    'Forward',
    'forward',
    'forward'
    
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
