module.exports = {
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "tsx",
    "ts"
  ],
  modulePaths: [
    "<rootDir>/libs"
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/"
  ],
  testURL: "http://localhost"
}