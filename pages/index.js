import Head from 'next/head'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../components/ui'

export default function Home() {
  return (
    <>
      <Head>
        <title>AMF</title>
        <meta name="title" content="AMF" />
        <meta property="og:site_name" content="AMF" key="og_fp_site_name" />
        <meta name="description" content="AMF" />
        <meta name="keywords" content="Architecture, Urbanism, Housing, Labor, Design, Graphic Design, Print" />
        <meta property="og:title" content="AMF" key="og_fp_site_title" />
        <meta property="og:description" content="AMF" key="og_fp_site_description" />
      </Head>

      <PageContainer>
        <MaxWidth>
          <Grid container>
            <Grid item>
              <Text>AMF</Text>
            </Grid>
          </Grid>
        </MaxWidth>
      </PageContainer>

    </>
  )
}
