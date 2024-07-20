"use strict";

/**
 * `landing-page-populate` middleware
 */

const query = {
  meta: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["alternativeText", "url"],
      },
    },
  },
  blocks: {
    populate: {
      link: true,

      image: {
        fields: ["name", "alternativeText", "url"],
      },

      items: {
        populate: {
          icon: {
            fields: ["name", "alternativeText", "url"],
          },
        },
      },
      plan_tarifs: {
        populate: {
          button_link: true,
          services: true,
        },
      },
      form: {
        populate: {
          input: true,
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.

  return async (ctx, next) => {
    ctx.query = { populate: query, ...ctx.query };
    await next();
  };
};
