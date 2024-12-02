export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "python":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      };
    case "javascript":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      };
    case "java":
      return {
        src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      };
    case "c#":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      };
    case "sql":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      };
    case "react":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      };
    case "node.js":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      };
    case "html":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      };
    case "css":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      };
    case "firebase":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      };
    case "unity":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
      };
    case "azure":
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      };
    default:
      return {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      };
  }
};
