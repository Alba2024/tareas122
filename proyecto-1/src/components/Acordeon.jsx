import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">quienes somoms</AccordionHeader>
          <AccordionBody accordionId="1">
            la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
             este es un siotio donde tu puedes crear uno  sueños realidad crea niños de verdad como pinocho como barby 
            tu puedes ser lo que quieres ser 
            la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
             la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">iniciativa</AccordionHeader>
          <AccordionBody accordionId="2">
            este es un siotio donde tu puedes crear uno  sueños realidad crea niños de verdad como pinocho como barby 
            tu puedes ser lo que quieres ser 
            la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
             la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
             este es un siotio donde tu puedes crear uno  sueños realidad crea niños de verdad como pinocho como barby 
            tu puedes ser lo que quieres ser 
            la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
             la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">aprendisaje</AccordionHeader>
          <AccordionBody accordionId="3">
            los siguientera una copia de los demas adios ya es tarde la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
            odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
            este es un siotio donde tu puedes crear uno  sueños realidad crea niños de verdad como pinocho como barby 
            tu puedes ser lo que quieres ser 
            este es un siotio donde tu puedes crear uno  sueños realidad crea niños de verdad como pinocho como barby 
            tu puedes ser lo que quieres ser 
            este es un siotio donde tu puedes crear uno  sueños realidad crea niños de verdad como pinocho como barby 
            tu puedes ser lo que quieres ser 
            la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
             la iiniciativa biene de los años 1254 desde entonces esperamosq uqe todo les valla vioen  y etengan un a buena experiencia dcon nosootros y tqambien aaaaaaa se me duerme las manos
             odeohoen underwoers `yo wquiero agrade cerle  AU PAPA LPOR crear algo tan bonito`
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;