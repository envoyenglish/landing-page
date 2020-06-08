
import React, {Component} from 'react';
import "./../App.css";
import Slider from "react-slick";
import {StudentQuote} from '../styles/ui-components';

class Reviews extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (

        <Slider {...settings} style={{width: '100%', margin: '0 auto'}}>
          <StudentQuote>
            "My favorite part of the class was knowing that there were multiple solutions to the problems that were occurring. I liked that they are real life situations. I've had a couple of similar experiences on a recent trip in real life." <p>-Alejandra</p>
          </StudentQuote>

          <StudentQuote>
            "The whole mission was actually very fun. Since the first "problem" our team had, I understood the idea of the mission, and I just started playing the role, which was very easy with the structure of the game. The hour-long class finished before I noticed." <p>-Casandra</p>
          </StudentQuote>

          <StudentQuote>
            "La planeación del evento, porque pude compartir mis ideas con mi equipo y escuchar las suyas, además de que considero que nos pudimos comunicar bien porque si tenemos el mismo nivel de dominio de inglés." <p>- Pamela</p>
          </StudentQuote>

          <StudentQuote>
          "I liked that we practised a lot of things from real-life situations. I think this will help me in coming interviews." <p>- Gaston</p>
          </StudentQuote>

          <StudentQuote>
          "The confidence the class is giving me for the fact that I cannot remember or find the appropriate word,  I can always describe it! I loved that idea."<p>- Christina</p>
          </StudentQuote>

          <StudentQuote>
          "Toda la misión me gustó.  El formato de las misiones son muy divertidas y se practica mucho el speaking."<p>- Paola</p>
          </StudentQuote>

          <StudentQuote>
            "This type of situation actually happens. So I like that now after the class, I think I have more tools to face this kind of situation." <p>- Pam</p>
          </StudentQuote>

        </Slider>
    );
  }
}

export default Reviews;