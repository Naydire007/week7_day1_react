import React, { useState }from 'react';
import FilmList from '../components/FilmList';




const FilmBox = () => {
    const [films,setFilms] = useState (
        [
            {
              id: 1,
              name: "Gekijouban Jujutsu Kaisen 0",
              url: "https://www.imdb.com/title/tt14331144/?ref_=fn_al_tt_1"
            },
            {
              id: 2,
              name: "Boku no Hero Academia the Movie 3: World Heroes’ Mission",
              url: "https://www.imdb.com/title/tt13544716/?ref_=fn_al_tt_1"
            },
            {
              id: 3,
              name: "Evangelion 3.0 + 1.0 Thrice Upon A Time",
              url: "https://www.imdb.com/title/tt2458948/?ref_=nv_sr_srsg_0"
            },
            {
              id: 4,
              name: "Yuri!!! on Ice The Movie: Ice Adolescence", 
              url: "https://www.imdb.com/title/tt8646060/?ref_=nv_sr_srsg_3"
            },
            {
              id: 5,
              name: "Sword Art Online Progressive Hoshi naki yoru no Aria",
              url: "https://www.imdb.com/title/tt13424422/?ref_=nv_sr_srsg_0"
            }
          ])

          return (
            <div className = 'film-box'>
                <h1>Anime Releases</h1>
                <FilmList films = {films}/>
                <hr></hr>
                <a id= 'button' href='https://myanimelist.net/topanime.php?type=movie'>More Movies</a>
               
            </div>

          )
        }  

        

          

export default FilmBox;


// onClick(){
//     window.location.href="http://url.com";
// }
// render(){
//     return (
//         <button id="bt" onClick={this.onClick}>Click</button>
//     )
// }
// }
// <Link to='https://www.imdb.com/calendar/?region=gb'>
// <button type="button" className="btn btn-info">More Movies</button>
// </Link>