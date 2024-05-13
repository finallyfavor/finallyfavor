import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import transform_images from "lume/plugins/transform_images.ts";
import sitemap from "lume/plugins/sitemap.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume();

site.copy("logo.svg");
site.copy("logo.mp4");

site.use(nav());
site.use(picture());
site.use(transform_images());
site.use(sitemap());
site.use(svgo());

export default site;
