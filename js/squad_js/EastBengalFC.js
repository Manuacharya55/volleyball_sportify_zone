let player_images =
[ 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31821.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/21407.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33958.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/174401.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/30978.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10694.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/20942.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163173.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10255.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55646.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163182.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/30980.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35065.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163183.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31780.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36318.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55636.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63582.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69236.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10684.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10659.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69565.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/30192.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33676.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35315.png?v=6.6'  
    

]

let player_names =[
    'Kamaljit Singh',
'Pawan Kumar ',
'Prabhsukhan Gill',
'Athul Unnikrishnan ',
'Gursimrat Gill',
'Harmanjot Khabra ',
'Ivan Gonzalez',
'Lalchungnunga', 
'Mandar Dessai ',
'Mohamad Rakip',
'Nabi Khan ',
'Nishu Kumar ',
'Sarthak Golui ',
'Tuhin Das ',
'Borja Herrera ',
'Edwin Vanspaul',
'Mobashir Rahman ',
'Naorem Singh ',
'Saul crespo',
'Pritam singh',
'Souvik chakrabarti',
'Wahengbam Luwang ',
'Cleiton Silva ',
'Javier Siverio ',
'Nandhakumar Sekar ',
'Suhair Vadakkepeedika '

]

let position = [
    'goalkeeper',
'goalkeeper',
'goalkeeper',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'defender',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'midfielder',
'forward',
'forward',
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


