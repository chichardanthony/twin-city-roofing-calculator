module.exports = {
  packagerConfig: {
    name: "Twin City Roofing Calculator",
    executableName: "twin-city-roofing-calculator",
    icon: "./assets/icon" // Add your icon path
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "twin_city_roofing_calculator"
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "win32"]
    },
    {
      name: "@electron-forge/maker-deb",
      config: {}
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {}
    }
  ]
};
