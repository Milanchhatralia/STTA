import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Map } from './Map';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    <Map height="500" />
    <Contact />
    <Footer />
  </div>
);

export { Base };
