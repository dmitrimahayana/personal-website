import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '312f43a0a9964a4baf3d647f4035686e',
  // rootNotionPageId: '7875426197cf461698809def95960ebf',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Data with Dmitri',
  domain: 'datadmitri.it',
  // domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Dmitri Yanno Mahayana',

  // open graph metadata (optional)
  description: 'Personal website for Dmitri as a Data Engineering',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'dmitrimahayana',
  linkedin: 'dmitri-yanno-mahayana-922639b8',
  youtube: 'channel/UCaTbxO6JUdL2RFAPyjWfLHw', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  newsletter: 'https://medium.com/@dmitri.mahayana',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
