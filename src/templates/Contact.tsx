import Link from 'next/link';

import { Section } from '../layout/Section';

const Contact = () => {
  return (
    <Section for="contactus">
      <div className="mt-20 flex flex-wrap items-center text-center">
        <div className="w-full sm:w-1/2 sm:px-6 mb-16 sm:m-0">
          <h3 className="text-3xl text-gray-900 font-semibold">CONTACT US</h3>
          <span className="inline-block w-10 h-1 bg-amber-700"></span>
          <div className="mt-6 text-xl leading-9">
            <Link href={'tel:+91 9016445799'}>@ 9016445799</Link>
            <br />
            <Link href={'tel:+91 7984044850'}>@ 7984044850</Link>
          </div>
        </div>

        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="text-3xl text-gray-900 font-semibold">VISIT US</h3>
          <span className="inline-block w-10 h-1 bg-indigo-700"></span>
          <div className="mt-6 text-xl leading-9">
            Fitness Arena, Saarathi Hospital, Anand Sojitra Road, Anand
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Contact };
