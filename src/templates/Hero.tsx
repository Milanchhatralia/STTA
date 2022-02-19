import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import styles from '../styles/components/Hero.module.scss';
import { Logo } from './Logo';

const Hero = () => {
  // const router = useRouter();

  // const bgStyle: CSSProperties = {
  //   backgroundImage: `${router.basePath}/assests/images/bg-1.jpg`,
  // };

  return (
    <Background color="bg-gray-100" classes={styles.heroBackground}>
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />}>
          <li className="pr-4">
            <Link href="#aboutus">
              <a>About</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Start\n'}
              <span className="text-primary-500">
                <Typewriter
                  options={{
                    strings: ['Coaching', 'Training'],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                  }}
                />
              </span>
              {'Today\n'}
            </>
          }
          description="Spinner Table Tennis Academy"
          button={
            <Link href="#contactus">
              <a>
                <Button xl>Contact Us</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
