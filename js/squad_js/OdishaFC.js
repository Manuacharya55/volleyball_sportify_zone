let player_images = [
'https://www.indiansuperleague.com/static-resources/images/players/small/0/3997.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/19126.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/64474.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31791.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/5171.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157113.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35224.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63444.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/162820.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36521.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/55658.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/32054.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/31844.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/69491.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/10708.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/35210.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36832.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63457.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/157112.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/34004.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/176251.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/68810.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/128631.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/63486.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/25878.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/13633.png?v=6.6',
 'https://www.indiansuperleague.com/static-resources/images/players/small/0/36328.png?v=6.6'

]

let player_names = [
  'Amrinder Singh',
  'Lalthuammawia R',
  'Niraj Kumar',
  'Amey Ranawade',
  'Carlos Delgado',
  'Deven Sawhney',
  'Laldinliana Renthlei',
  'Narender Gahlot',
  'Rishabh Dobriyal',
  'Sahil Panwar',
  'Mourtada Fall',
  'Shubham Sarangi',
  'Ahmed Jahouh',
  'Isaac Chhakchhuak',
  'Lalliansanga Renthlei',
  'Lenny Rodrigues',
  'Paul Ramfangzauva',
  'Princeton Rebello',
  'Thoiba Singh',
  'Akshunna Tyagi',
  'Aniket Jadhav',
  'Ashangbam A Singh',
  'CVL Remtluanga',
  'Diego Mauricio',
  'Isak Vanlalruatfela',
  'Jerry M',
  'Roy Krishna',
  'Soosai Michealadimai'

]

let position = [
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
  'Defender',
  'Midfielder',
  'Midfielder',
  'Midfielder',
  'Midfielder',
  'Midfielder',
  'Midfielder',
  'Midfielder',
  'forward',
  'forward',
  'Forward',
  'Forward',
  'Forward',
  'Forward',
  'Forward',
  'Forward',
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
