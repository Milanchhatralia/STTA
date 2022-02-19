import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="About Us"
    description="Spinners Table tennis academy takes pride in offering professonal table tennis training under the guidance of national faculties with International standard and TTFI approved equipment, synthetic flooring and all essential utilities."
    for="aboutus"
  >
    <VerticalFeatureRow
      title="Our Mission"
      description="To provide a state of art facility for TableTennis playing to all, including Persons with Disability (PWD) in Anand District; So as to give an opportunity to children and adults of the society to experience fun in the sport of TableTennis. To provide a state of art facility for TableTennis playing to all, including Persons with Disability (PWD) in Anand District; so as to give an opportunity to children and adults of the society to experience fun in the sport of TableTennis."
      image="/assets/images/mission.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Our Vision"
      description="To uplift the games of players and students to next level; to create platform for competitions, matches and tournaments, to nurture physical & mental health of society via sportsman spirit, fitness and healthy lifestyle."
      image="/assets/images/vision.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
