let player_images = [
'https://www.indiansuperleague.com/static-resources/images/players/small/0/163171.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/35066.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/55664.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/63454.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/154633.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/26611.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/19129.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/63609.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/32552.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/31845.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/162189.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/55670.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/26717.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/31790.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/9795.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/144511.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/31851.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/144506.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/55652.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/55670.png?v=6.6',
'https://www.indiansuperleague.com/static-resources/images/players/small/0/55670.png?v=6.6'  

]

let player_names = [
    'Aman Kumar',
'Anuj Kumar',
'Gurmeet Sing',
'Lalbiakhlua Jongte',
'Abdul Anjukandan',
'Chinglensana Sing',
'Reagan Sing',
'Manoj Mohammad',
'Nikhil Poojary',
'Nim Dorjee',
'Soyal Joshy',
'V Dakshinamurthy',
'Sahil Tavora',
'Hitesh Sharma',
'Joao Victor',
'Mark Zothanpuia',
'Mohammad Yasir',
'Aaren D Silva',
'Bartholomew Ogbeche',
'Jonathan Moy',
'Joe Knowles'


]

let position = [
    'goalkeeper',
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
