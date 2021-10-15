/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Boost your sales',
    title: 'Boost your sales',
    text:
      'Unlock the full potential of your business by using Facebook ads to drive more leads and deliver your message to your customers.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'We believe in you',
    title: 'We believe in you',
    text:
      'The first step of a good marketing is your product, that\'s why we only work with partners that we believe their products offer real benefits to their clients.',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'We keep iterating',
    title: 'We keep iterating',
    text:
      'We believe that one magic formula to make you sell more is a massive lie! that\'s why we keep iterating & testing to find your magic wokring formula to drive more revenue.',
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Complete refund',
    title: 'Complete refund',
    text:
      'It\'s simple, you win we win, you loose we loose even more ! If we don\'t deliver you the desired results we refund you completely.',
  },
];

export default function KeyFeature() {
  return (
   <section id='feature' sx={{ variant: 'section.keyFeature'}}>
    <Container>
      <SectionHeader 
        slogan= 'Why working with us'
        title= 'By wokring we us we promise you to'
      />

      <Grid sx={styles.grid}>
        { data.map((item) =>(
          <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text= {item.text}
          />
        )) }
      </Grid>
    </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
