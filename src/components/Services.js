import React from 'react'
import {} from './Services.css'



function Services() {
  return (
                <div className='services-container' id='idservices' >
                        <h2>Nasze usługi</h2>
                        <div className='services'>

                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Renowacja tapicerki skórzanej
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/leather2.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Proces przywracania oryginalnego wyglądu skóry za pomocą fabrycznych technologii oraz materiałów najwyższej jakości. 
                                Naprawa skóry to nie tylko dogłębne czyszczenie i ponowne malowanie pistoletem lakierniczym.  
                                W skład naszej formuły wchodzą także  etapy takie jak wyciąganie wchłoniętego tłuszczu z wnętrza tapicerki za pomocą dedykowanych absorberów, gruntowanie skóry, wypełnianie ubytków, rys, pęknięć płynną skórą oraz zabezpieczenie lakierem top coat. 
                                To wszystko sprawia, że trwałość oraz wygląd naprawionej powierzchni porównywalny jest do fabrycznej tapicerki !
                                </div>
                        </div>
                        
                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Korekta lakieru / polerka + aplikacja powłok ochronnych
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/car.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Zabieg usuwania rys z lakieru, którego celem jest wydobycie blasku karoserii.
                                Jednoetapowa ( one step ) - likwidacja licznych, ale płytkich mikrorys. 
                                Dwuetapowa - likwidacja rys średniej oraz małej głębokości. 
                                Trzyetapowa - pełna korekta lakieru. 
                                Aplikacja powłok ochronnych po wykonanej renowacji lakieru. 
                                </div>
                        </div>

                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Renowacja plastików 
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/plastic2.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Częstą bolączką starszych samochodów są łuszczące oraz klejące się plastiki.. 
                                Farby do tapicerki skórzanej przy odpowiednim wymieszaniu proporcji z utwardzaczem, fenomenalnie spisują się jako produkt do renowacji plastików. 
                                Proces naprawy obejmuje całkowite zniesienie starej farby oraz położenie nowego podkładu, lakieru bazowego i top coat. 
                                </div>
                        </div>

                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Pranie tapicerki materiałowej
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/wool.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Brudna wykładzina samochodowa to nie tylko zły efekt wizualny, ale także  idealne miejsce dla rozwoju bakterii oraz grzybów. Ponadto jest najczęstszym powodem brzydkiego zapachu w samochodzie. 
                                Używamy najmocniejszych detergentów dostępnych na rynku, które dogłębnie rozpuszczają brud, przy jednoczesnym zachowaniu właściwości tapicerki. 
                                </div>
                        </div>

                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Wyciszenie samochodu
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/audio.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Oklejanie maski, nadkoli, blachy drzwi od strony wewnętrznej matami bitumicznymi oraz piankami akustycznymi. Znacząco poprawia komfort jazdy, ponadto tworzy efekt pudła rezonansowego, co ogromnie poprawia jakość gry głośników. Dźwięk staje się soczysty oraz wyraźny. 
                                Jednym z najczęstszych błędów popełnianych przy budowie CAR AUDIO jest brak odpowiedniego wyciszenia samochodu, przez co nawet najlepsze głośniki nie spełniają oczekiwań właściciela.
                                </div>
                        </div>

                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Naprawa podsufitki
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/headliner.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Istnieje tylko jeden sposób, aby wyglądało to estetycznie i było trwałe.
                                Usuwamy stary materiał i zastępujemy go nowym, ponieważ  jest on
                                pod spodem laminowany gąbką, która zostaje utleniona i dlatego materiał obwisa. 
                                Nie ma możliwości ponownego klejenia uszkodzonego materiału.
                                </div>
                        </div>

                        <div className='services-card'>
                                <div className='services-card-title'>
                                        Naprawa mebli skórzanych
                                </div>
                                <div className='services-card-img'>
                                        <img src="/images/forniture.png" alt="Logo" />
                                </div>
                                <div className='services-card-info'>
                                Jeśli nie chcesz pozbywać się swoich mebli, ale ich czas świetności minął,
                                również mamy na to sposób. Niektóre z napraw wykonujemy z dojazdem do klienta,
                                a w ciężkich przypadkach transportujemy meble do naszego warsztatu.
                                </div>
                        </div>


                        </div>
                </div>
  )
  
};

export default Services;
