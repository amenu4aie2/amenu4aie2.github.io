export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "c++":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      };
    case "java":
      return {
        src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      };
    case "python":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      };
    case "javascript":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      };
    case "react":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      };
    case "visual studio":
      return {
        src: "https://code.visualstudio.com/assets/images/code-stable.png",
      };
    case "git":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      };
    case "big data":
      return {
        src: "https://www.svgrepo.com/show/75983/big-data.svg",
      };
    case "computer networks":
      return {
        src: "https://www.reshot.com/preview-assets/icons/FS72XCKGVR/networking-FS72XCKGVR.svg",
      };
    case "os":
      return {
        src: "https://img.icons8.com/?size=100&id=yhLahGmmkw2c&format=png&color=000000",
      };
    default:
      break;
  }
};
