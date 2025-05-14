module.exports = {
  presets: [
    ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
    // Using the "automatic" runtime eliminates the need to import React in every file.
    ["@babel/preset-react", { runtime: "automatic" }]
  ]
};