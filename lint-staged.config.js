module.exports = {
  "src/**/*.(ts|tsx)": () => ["yarn tsc --noEmit", "yarn lint"]
};
