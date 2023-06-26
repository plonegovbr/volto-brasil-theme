const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    // Exemplos de Redes sociais
    socialNetworks: [
      {
        id: 'twitter',
        href: 'https://twitter.com/ploneorgbr',
      },
      {
        id: 'mastodon',
        href: 'https://plone.social/plonebr',
      },
      {
        id: 'instagram',
        href: 'https://www.instagram.com/plonebr/',
      },
      {
        id: 'youtube',
        href: 'http://youtube.com/@ploneCMS',
      },
    ]
  };
  return config;
};

export default applyConfig;
