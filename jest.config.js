module.exports = {
  verbose: true,
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  modulePaths: [
    "/libs"
  ],
  transform: {
    "^.+\\.[jt]s$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testURL: "http://localhost"
}