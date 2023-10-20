import React from 'react'
import style from './Services.css'

export default function Services() {
  return (
    <div className='services-container'>
        <div className='services'>asa
        <div className='services-card'>
                <div className='services-card-title'>
                        Renowacja tapicerki skórzanej
                </div>
                <div className='services-card-img'>
                        <img src="/images/leather.png" alt="Logo" />
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
                        Renowacja plastików 
                </div>
                <div className='services-card-img'>
                        <img src="/images/plastic.png" alt="Logo" />
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
                        Renowacja lakieru
                </div>
                <div className='services-card-img'>
                        <img src="/images/car.png" alt="Logo" />
                </div>
                <div className='services-card-info'>
                Brudna wykładzina samochodowa to nie tylko zły efekt wizualny, ale także  idealne miejsce dla rozwoju bakterii oraz grzybów. Ponadto jest najczęstszym powodem brzydkiego zapachu w samochodzie. 
                Używamy najmocniejszych detergentów dostępnych na rynku, które dogłębnie rozpuszczają brud, przy jednoczesnym zachowaniu właściwości tapicerki. 
                </div>
            </div>

        </div>
    </div>
  )
}
