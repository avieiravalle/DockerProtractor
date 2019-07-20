module.exports = providedConfig => {
    const defaultConfig = {
      seleniumAddress: "http://localhost:4444/wd/hub",
      specs: ["./e2e/*.js"]
    };
  
    return Object.assign({}, defaultConfig, providedConfig);
  };
  