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
            <Grid item xs={12} sm={6}>
              <Text>Allowing Many Forms</Text>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Text>
                Allowing Many Forms is a Los Angeles based design and publishing
                practice interested in working in close collaboration with
                artists, designers, and creative organizations to create unique
                physical works that communicate, define, and present ideas,
                stories, and values.
              </Text>
            </Grid> */}
          </Grid>
        </MaxWidth>
      </PageContainer>
    </>
  );
}
