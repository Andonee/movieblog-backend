"use strict";

/**
 * movie controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::movie.movie", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entry = await strapi.db.query("api::movie.movie").findOne({
      where: { slug: id },
      populate: ["*"],
    });

    return entry;
  },
}));
