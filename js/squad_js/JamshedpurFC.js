let player_images = [
'https://www.indiansuperleague.com/static-resources/images/players/small/0/162921.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157119.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35237.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10682.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/61468.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/112641.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/156103.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/159230.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/26616.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35274.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31787.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55661.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33967.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/33995.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163022.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10625.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/163027.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55661.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/30373.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/61477.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63701.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10689.png?v=6.6'

]

let player_names = [
    'Ayush Jena',
'Mohit Dhami',
'Rakshit Dagar',
'Rehenesh TP',
'Vishal Yadav',
'Dylan Fox',
'Laldinpuia Pachua',
'Muhammed Uvais',
'Pratik Chaudhari',
'Ricky Lallawmawm',
'Germanpreet Singh',
'Imran Khan',
'Jitendra Singh',
'Komal Thatal',
'Phijam Singh',
'Pronay Halder',
'Saphaba Telem',
'Alen Stevanovic',
'Daniel Chukwu',
'Nikhil Barla',
'Ritwik Das',
'Seiminlen Doungel'


]

let position = [
    'goalkeeper',
'goalkeeper',
'goalkeeper',
'goalkeeper',
'goalkeeper',
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
'forward',
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
