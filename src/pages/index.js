import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Sunny Agency - Your Facebook ads partner" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
        </Layout>
    </ThemeProvider>
  );
}
