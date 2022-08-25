import Head from "next/head";

import { PageContainer, MaxWidth, Text, Grid } from "../components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Allowing Many Forms</title>
        <meta name="title" content="Allowing Many Forms" />
        <meta
          property="og:site_name"
          content="Allowing Many Forms"
          key="og_amf_site_name"
        />
        <meta name="description" content="Allowing Many Forms" />
        <meta
          name="keywords"
          content="Art, Art Books, Books, Publishing, Artist Books, Design, Graphic Design, Printing"
        />
        <meta
          property="og:title"
          content="Allowing Many Forms"
          key="og_amf_site_title"
        />
        <meta
          property="og:description"
          content="Allowing Many Forms"
          key="og_amf_site_description"
        />
      </Head>

      <PageContainer>
        <MaxWidth>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Text>Allowing Many Forms</Text>
            </Grid>
          </Grid>
        </MaxWidth>
      </PageContainer>
    </>
  );
}
