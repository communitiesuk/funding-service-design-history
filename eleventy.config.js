module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    brandColour: '#012169',
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      organisationName: 'DLUHC',
      productName: 'Funding Service Design',
      search: {
        label: 'Search',
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      meta: {
        items: [
          {
            href: "/admin/",
            text: "Add/edit content via CMS"
          },
          {
            href: "https://fsd-pre-award.herokuapp.com/",
            text: "Access Funding Prototype History"
          }
        ]
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

// date filter
    eleventyConfig.addFilter('customDateFormat', function (date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Intl.DateTimeFormat('en-UK', options).format(new Date(date));
    });
  // Config

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
