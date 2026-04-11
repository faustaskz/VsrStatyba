/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiceSection from './components/ServiceSection';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VGStatybaChatbot from './VGStatybaChatbot';

const statybaServices = [
  { title: 'Bendrieji statybos darbai', description: 'Kompleksiniai statybos darbai nuo žemės kasimo iki stogo uždengimo pagal visus statybos normatyvus.' },
  { title: 'Betono konstrukcijų darbai', description: 'Monolitinių ir surenkamų betono konstrukcijų įrengimas, pamatų betonavimas.' },
  { title: 'Generalinė ranga', description: 'Viso statybos projekto valdymas ir koordinavimas — nuo projekto iki perdavimo.' },
  { title: 'Medžio konstrukcijų darbai', description: 'Medinių karkasų, perdangų, stogo konstrukcijų gamyba ir montavimas.' },
  { title: 'Statybos valdymas', description: 'Statybos proceso priežiūra, kokybės kontrolė ir dokumentacijos tvarkymas.' },
  { title: 'Statinių statybos techninė priežiūra', description: 'Nepriklausoma statybos techninė priežiūra užsakovo interesams atstovauti.' },
  { title: 'Fasadų šiltinimas ir apdaila', description: 'Pastatų fasadų šiltinimas moderniomis medžiagomis, apdaila ir dažymas.' },
  { title: 'Stogų dengimas', description: 'Šlaitinių ir plokščių stogų dengimas, hidroizoliacija ir šiltinimas.' },
];

const apdailosServices = [
  { title: 'Gipso kartono montavimas', description: 'Pertvarų, lubų ir nišų įrengimas iš gipso kartono plokščių pagal projektinius sprendinius.' },
  { title: 'Dažymas, glaistymas', description: 'Sienų ir lubų glaistimas, šlifavimas ir dažymas kokybiškomis dažų sistemomis.' },
  { title: 'Grindų įrengimas', description: 'Laminato, parketo, plytelių ir betoninių grindų klojimas bei niveliacijos darbai.' },
  { title: 'Plytelių klijavimas', description: 'Keraminių, porcelianinių ir akmens masės plytelių klijavimas vonios kambariuose, virtuvėse ir kitose patalpose.' },
  { title: 'Elektros instaliacija', description: 'Elektros tinklų montavimas, jungiklių, lizdų ir apšvietimo sistemų įrengimas.' },
  { title: 'Pakabinami lubų montavimas', description: 'Gipso kartono ir metalinių pakabinamos lubų sistemų montavimas.' },
  { title: 'Santechnikos darbai', description: 'Vandentiekio, kanalizacijos ir šildymo vamzdynų montavimas ir prijungimas.' },
  { title: 'Sienų tinkavimas', description: 'Mechaninis ir rankinis sienų tinkavimas cementiniais ir gipsiniais mišiniais.' },
];

const konsultavimasServices = [
  { title: 'Ekspertizė', description: 'Statinių techninės būklės įvertinimas, defektų nustatymas ir rekomendacijų teikimas.' },
  { title: 'Konsultavimas', description: 'Statybos ir renovacijos projektų konsultacijos, medžiagų parinkimas ir sąmatų sudarymas.' },
  { title: 'Pastatų energinio naudingumo sertifikavimas', description: 'Pastatų energetinio efektyvumo vertinimas ir sertifikatų išdavimas pagal LR reikalavimus.' },
  { title: 'Techninė priežiūra', description: 'Statybos darbų techninė priežiūra užsakovo vardu — kokybės kontrolė ir dokumentavimas.' },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      <ServiceSection
        id="statyba"
        title="Statyba"
        subtitle="Profesionali naujų objektų statyba nuo pamatų iki stogo."
        description="Vykdome gyvenamųjų ir komercinių pastatų statybą, užtikrindami aukščiausią kokybę kiekviename etape. Dirbame tiek su privačiais, tiek su verslo užsakovais."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1931"
        services={statybaServices}
        imagePosition="right"
      />

      <ServiceSection
        id="apdailos-darbai"
        title="Apdailos darbai"
        subtitle="Kokybiška vidaus apdaila — jūsų namų pabaiga."
        description="Atliekame visų tipų vidaus apdailos darbus gyvenamosios ir komercinės paskirties objektuose. Naudojame tik aukštos kokybės medžiagas ir modernius apdailos sprendimus."
        image="/apdaila.jpg"
        services={apdailosServices}
        imagePosition="left"
        dark={false}
      />

      <ServiceSection
        id="konsultavimas"
        title="Konsultavimas"
        subtitle="Profesionali ekspertizė ir techninė priežiūra."
        description="Teikiame profesionalias statybos konsultacijas, ekspertizės ir techninės priežiūros paslaugas. Mūsų specialistai padės išvengti klaidų ir užtikrins projekto sėkmę."
        image="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&q=80&w=1931"
        services={konsultavimasServices}
        imagePosition="right"
        dark={true}
      />

      <Certificates />
      <Contact />
      <Footer />
      <VGStatybaChatbot />
    </div>
  );
}

