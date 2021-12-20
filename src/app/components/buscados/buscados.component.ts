import { Component, OnInit } from '@angular/core';
import { SenderService } from '../../sender.service';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css'],
})
export class BuscadosComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Simpsons Movie',
      descripcion:
        'Homero en un descuido termina poniendo a todo springfield en peligro',
      portada: 'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: 'https://www.youtube.com/embed/CxPwGkR0490 | safe',
    },
    {
      titulo: 'Pretty Woman',
      descripcion:
        'Durante un viaje de negocios a Los Ángeles, Edward, un ejecutivo que compra y vende empresas, encuentra a la prostituta Vivian. Después de pasar una primera noche con ella, se enamora.',
      portada: 'https://pics.filmaffinity.com/Pretty_Woman-629528349-large.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Venom 2',
      descripcion:
        'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage',
      portada:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1TWGNcLoyxF51JIQUk9-_ub69rTAVZsQF4YrDpdykAdnyIeU3',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Space Jam 2',
      descripcion:
        'Atrapado en el espacio digital, la superestrella del baloncesto LeBron James se une a la banda de los Looney Tunes para derrotar al Goon Squad en un juego de baloncesto y salvar a su hijo.',
      portada:
        'https://pics.filmaffinity.com/Space_Jam_Nuevas_leyendas-128088476-large.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'El conjuro 3',
      descripcion:
        'Los investigadores de fenómenos paranormales Ed y Lorraine Warren se enfrentan a un nuevo caso: el de un hombre acusado de un terrible asesinato, que asegura haber sido poseído por un demonio.',
      portada:
        'https://www.cinevistablog.com/wp-content/uploads/2013/11/dvd-blu-ray-el-conjuro.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Spongebob Squarepants',
      descripcion: 'bob',
      portada:
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a80f8fb941042016cb0a82700542c0d105fe9c741ebcddd1d413bc92a9990273._RI_V_TTW_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Lilo & Stitch',
      descripcion: 'bob',
      portada:
        'https://lumiere-a.akamaihd.net/v1/images/p_liloandstitch_19755_0ba5c55e.jpeg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Toy Story',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/81Uyu1+diXL._AC_SY679_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Shrek',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/71HPEO8IJTL._AC_SY679_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Your name',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/713l9tM0sKL._AC_SY606_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Ernest & Celestine',
      descripcion: 'bob',
      portada:
        'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm656-ermes-and-celestine-movie-film-posteri-1000x1000.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Song of the Sea',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51ufg9+4-8L._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'IT',
      descripcion: 'bob',
      portada:
        'https://i5.walmartimages.com/asr/8dfecc7f-aa5a-4517-8c60-e2921f4b500e.c843d9ced81cad64830458a0722dfe90.jpeg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Saw',
      descripcion: 'bob',
      portada:
        'https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Shining',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51ZssO+m8vL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Us',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Mortal Kombat',
      descripcion: 'bob',
      portada:
        'https://fanaticosdelhardware.com/wp-content/uploads/2021/02/Mortal-Kombat-Poster-Oficial-1-1.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Monster Hunter',
      descripcion: 'bob',
      portada:
        'https://i0.wp.com/pcmrace.s3.amazonaws.com/2020/11/EkSwo9WXYAAqEqB-scaled-1.jpg?ssl=1',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'El otro guardaespaldas 2',
      descripcion: 'bob',
      portada:
        'https://www.diariodevenusville.com/wp-content/uploads/2021/06/EL-OTRO-GUARDAESPALDAS-2-personaje-1.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Snake Eyes: El origen',
      descripcion: 'bob',
      portada:
        'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/07/snake-eyes-Poster-2.jpg?resize=800%2C1185&ssl=1',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Metrópolis',
      descripcion: 'bob',
      portada:
        'https://images.fineartamerica.com/images-medium-large-5/poster-from-the-film-metropolis-1927-anonymous.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Solaris ',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51zSAPm85jL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Blade Runner',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/I/71NPmBOdq7L._AC_SL1333_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'La cosa',
      descripcion: 'bob',
      portada:
        'https://i.blogs.es/f65390/the-thing-teaser-poster-2011/450_1000.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Psicosis',
      descripcion: 'bob',
      portada:
        'https://es.web.img3.acsta.net/r_1280_720/pictures/bzp/03/1603.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Origen',
      descripcion: 'bob',
      portada: 'https://www.cineycine.com/archivos/2013/11/origen-poster.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Los Otros',
      descripcion: 'bob',
      portada:
        'https://es.web.img2.acsta.net/r_1280_720/pictures/16/02/08/16/49/422992.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Argo',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51pDMATaK2L._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Hangover',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51-EPh6VZ8L._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Ted',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/61I7LUN5jXL._AC_SY679_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Rush Hour',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/I/61hn3gcwBvL._AC_SL1333_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Superbad',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/517Ro9vnOML._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Me Before You',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51yVixqZzML._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'A Star is Born ',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'About Time',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'La La Land',
      portada:
        'https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SL1500_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'El imperio contraataca',
      descripcion: 'bob',
      portada:
        'https://static.wikia.nocookie.net/cine/images/4/41/Star-Wars-Episode-V-The-Empire-Strikes-Back-1980.jpg/revision/latest/top-crop/width/360/height/450?cb=20120929152704',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Regreso al futuro',
      descripcion: 'bob',
      portada:
        'https://es.web.img3.acsta.net/pictures/14/03/11/10/30/351336.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Aliens',
      descripcion: 'bob',
      portada: 'https://pics.filmaffinity.com/aliens-989223912-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Amadeus',
      descripcion: 'bob',
      portada: 'https://pics.filmaffinity.com/Amadeus-718368517-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Mi vecino Totoro',
      descripcion: 'bob',
      portada:
        'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/17/15687205415802.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Terminator',
      descripcion: 'bob',
      portada:
        'https://static.wikia.nocookie.net/terminator/images/d/d0/Terminator_Cartel.jpg/revision/latest?cb=20150714111825&path-prefix=es',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Elretorno del jedi',
      descripcion: 'bob',
      portada:
        'https://static.wikia.nocookie.net/esstarwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest?cb=20200623214315',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Cinema Paradiso',
      descripcion: 'bob',
      portada:
        'https://pics.filmaffinity.com/Cinema_Paradiso-225068665-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Sunset Boulevard',
      descripcion: 'bob',
      portada:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sunset_Boulevard_%281950_poster%29.jpg/399px-Sunset_Boulevard_%281950_poster%29.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: "Singin' In The rain",
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/71ezA8BPTzL._AC_UY445_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'High Noon',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/M/MV5BOWIzZGUxZmItOThkMS00Y2QxLTg0MTYtMDdhMjRlNTNlYTI3L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Stalag 17',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51H+YXpgmTL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Toy Story 3',
      descripcion: 'bob',
      portada: 'https://pics.filmaffinity.com/Toy_Story_3-148898222-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Drive',
      descripcion: 'bob',
      portada:
        'https://image.posterlounge.com/img/products/640000/631103/631103_poster_l.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Avengers',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/71xZtfOsHdL._AC_SY679_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Kaze tachinu',
      descripcion: 'bob',
      portada:
        'https://images-ext-1.discordapp.net/external/X2BH4VwOwVTslzzZGg_hi4J43ziqnBQIqmN24pFp2wI/http/koi-nya.net/img/subidos_posts/2013/06/Kaze-Tachinu-6%25C2%25BA-p%25C3%25B3ster.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Candyman',
      descripcion: 'bob',
      portada:
        'https://i2.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/06/Candyman-poster.jpg?resize=800%2C1000&ssl=1',
    },
    {
      titulo: 'Spyder-Man No way home',
      descripcion: 'bob',
      portada:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38c6eebb-1bdf-4079-b4ff-00ed23c053e2/deqspgg-05ac4e54-eb14-4e76-909d-49236a63fc19.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YzZlZWJiLTFiZGYtNDA3OS1iNGZmLTAwZWQyM2MwNTNlMlwvZGVxc3BnZy0wNWFjNGU1NC1lYjE0LTRlNzYtOTA5ZC00OTIzNmE2M2ZjMTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CvZon2ZZgIVn-fq5ocGw5PPRzug39JeysbHLSDaqn-M',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Soul',
      descripcion: 'bob',
      portada:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d850d113733033.602da4f659b8f.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Free Guy',
      descripcion: 'bob',
      portada:
        'https://cdn.shopify.com/s/files/1/0513/0613/5747/products/FreeGuy7_530x@2x.jpg?v=1627482061',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Pulp fiction',
      descripcion: 'bob',
      portada: 'https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Professional',
      descripcion: 'bob',
      portada:
        'https://pics.filmaffinity.com/El_profesional_L_on-557321821-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'La lista de Schindler',
      descripcion: 'bob',
      portada:
        'https://pics.filmaffinity.com/La_lista_de_Schindler-473662617-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'La vida es bella',
      descripcion: 'bob',
      portada:
        'https://es.web.img3.acsta.net/medias/nmedia/18/67/61/66/20098979.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'SHERK 2',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51h73qlasJL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The lord of rings: the two towers',
      descripcion: 'bob',
      portada:
        'https://pics.filmaffinity.com/El_se_or_de_los_anillos_Las_dos_torres-465612238-large.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'FANTASTIC MR FOX',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/I/81QQk5dgNML._AC_SL1500_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'KUNG FU SION',
      descripcion: 'bob',
      portada:
        'https://fanart.tv/api/download.php?type=download&image=306580&section=3',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'To Kill a Mockingbird',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51biQ1EK1hL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'West Side Story',
      descripcion: 'bob',
      portada:
        'https://cdn.shopify.com/s/files/1/1755/9909/products/WestSideStoryokdisplay2_1024x1024.jpg?v=1608988010',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Umbrellas of Cherbourg',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/5100hpM0y-L._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Mary Poppins',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51rJLvRdSoL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'The Godfather',
      portada:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Apocalypse Now',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Star Wars',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/I/81dzcTzB1PL._AC_SL1500_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Alien',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/41ltBoq45nL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Rocky',
      descripcion: 'bob',
      portada:
        'https://m.media-amazon.com/images/I/61SZsZYtwcL._AC_SL1001_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Taxi Driver',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/81oapdOFgVL._AC_SY741_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Clockwork Orange',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/71TUj3olRXL._AC_SY741_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
    {
      titulo: 'Chinatown',
      descripcion: 'bob',
      portada: 'https://m.media-amazon.com/images/I/51TYOt-qGqL._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/_wnS_RCDdtI',
    },
  ];
  constructor(private service: SenderService) {}

  ngOnInit() {}
}
