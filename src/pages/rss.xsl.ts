export const get = async () => ({
  // headers: {
  //   'Content-Type': 'text/xsl',
  // },
  body: await fetch(
    'https://raw.githubusercontent.com/genmon/aboutfeeds/main/tools/pretty-feed-v3.xsl'
  ).then((res) => res.text()),
})
