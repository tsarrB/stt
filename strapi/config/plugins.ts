export default ({ env }) => ({
  'duplicate-button': true,

  'redirects' : {
    enabled: true,
  },

  // https://market.strapi.io/plugins/@retikolo-drag-drop-content-types
  'drag-drop-content-types': {
    enabled: true
  },

  // https://market.strapi.io/plugins/@strapi-plugin-seo
  'seo': {
    enabled: true,
  },

  // https://market.strapi.io/plugins/strapi-plugin-populate-deep
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },

  // https://market.strapi.io/plugins/strapi-plugin-placeholder
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },

  // https://github.com/ComfortablyCoding/strapi-plugin-slugify
  'slugify': {
    enabled: true,
    config: {
      contentTypes: {
        'static-page': {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },

  // https://market.strapi.io/plugins/strapi-plugin-transformer
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms : {
        wrapBodyWithDataKey: true
      },
      hooks: {
        // preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
        // postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
      },
      contentTypeFilter: {
        mode: 'allow',
        uids: {
          'api::static-page.static-page': true,
          'api::category.category': {
            'GET':true,
          }
        }
      },
      plugins: {
        ids: {
          'slugify': true,
        }
      }
    }
  },

  // https://market.strapi.io/plugins/strapi-plugin-translate
  // 'translate': {
  //   enabled: true,
  //   config: {
  //     provider: 'deepl', // https://www.npmjs.com/package/strapi-provider-translate-deepl

  //     providerOptions: {
  //       // your API key - required and wil cause errors if not provided
  //       apiKey: 'key',
  //       // use custom api url - optional
  //       apiUrl: 'https://api-free.deepl.com',
  //       // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
  //       localeMap: {
  //         // use uppercase here!
  //         EN: 'EN-US',
  //       },
  //       apiOptions: {
  //         // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
  //         // note that tagHandling Mode cannot be set this way.
  //         // use with caution, as non-default values may break translation of markdown
  //         formality: 'default',
  //         // ...
  //       }
  //     },
  //     // Which field types are translated (default string, text, richtext, components and dynamiczones)
  //     // Either string or object with type and format
  //     // Possible formats: plain, markdown, html (default plain)
  //     translatedFieldTypes: [
  //       'string',
  //       { type: 'text', format: 'plain' },
  //       { type: 'richtext', format: 'markdown' },
  //       'component',
  //       'dynamiczone',
  //     ],
  //     // If relations should be translated (default true)
  //     translateRelations: true,
  //   },
  // },
});
