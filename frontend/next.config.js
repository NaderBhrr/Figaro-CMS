import path from "path";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  devIndicators: { autoPrerender: false },
  webpack: (config) => {
    // Aliases
    const dir = __dirname;

    config.resolve.alias["@app"] = path.resolve(dir, "./src/app");
    config.resolve.alias["@config"] = path.resolve(dir, "./src/config");
    config.resolve.alias["@lib"] = path.resolve(dir, "./src/shared/lib");
    config.resolve.alias["@pages"] = path.resolve(dir, "./src/pages");
    config.resolve.alias["@shared"] = path.resolve(dir, "./src/shared");
    config.resolve.alias["@contexts"] = path.resolve(dir, "./src/contexts");
    config.resolve.alias["@dashboard"] = path.resolve(
      dir,
      "./src/app/dashboard"
    );
    config.resolve.alias["@graphql"] = path.resolve(dir, "./src/graphql");
    config.resolve.alias["@interfaces"] = path.resolve(dir, "./src/interfaces");
    config.resolve.alias.styles = path.resolve(dir, "./src/shared/styles");

    return config;
  },
};
