const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "media.dev.to",
      "upload.wikimedia.org",
      "code.visualstudio.com",
      "upload.wikimedia.org",
      "img.icons8.com",
      "www.reshot.com",
    ],
  },
};
