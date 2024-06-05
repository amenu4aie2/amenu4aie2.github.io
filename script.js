window.addEventListener("scroll", function () {
  var fixme = document.querySelector(".con-con");
  var fixmeTop = 115;
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  console.log(currentScroll, fixme.scrollTop);
  if (currentScroll >= fixmeTop) {
    fixme.style.position = "fixed";
    fixme.style.right = "0";
    fixme.style.top = "0";
    fixme.style.marginTop = "30px";
    fixme.style.padding;
  } else {
    fixme.style.position = "";
    fixme.style.marginTop = "-50px";
  }
});
function scrollToElement(selector) {
  var element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
setTimeout(function () {
  scrollToElement("#home");
}, 100);

svgList = {
  readmore:
    "data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDIxLjUzNGM1LjUxOCAwIDkuOTk4LTQuNDggOS45OTgtOS45OThzLTQuNDgtOS45OTctOS45OTgtOS45OTdjLTUuNTE3IDAtOS45OTcgNC40NzktOS45OTcgOS45OTdzNC40OCA5Ljk5OCA5Ljk5NyA5Ljk5OHptMC0xLjVjLTQuNjkgMC04LjQ5Ny0zLjgwOC04LjQ5Ny04LjQ5OHMzLjgwNy04LjQ5NyA4LjQ5Ny04LjQ5NyA4LjQ5OCAzLjgwNyA4LjQ5OCA4LjQ5Ny0zLjgwOCA4LjQ5OC04LjQ5OCA4LjQ5OHptMC02LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di01LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2NS41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXptLS4wMDIgM2MuNTUyIDAgMS0uNDQ4IDEtMXMtLjQ0OC0xLTEtMS0xIC40NDgtMSAxIC40NDggMSAxIDF6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=",
};

var myWorks = [
  {
    title: "Scafolding Simulator",
    content:
      "Build a 3D Scaffolding Simulator using Unity3D. The simulator allows users to create and customize scaffolding structures in a virtual environment. Users can select different types of scaffolding components, adjust their dimensions, and assemble them to create complex structures. The simulator provides a realistic 3D",
    source: "https://youtu.be/lRIUYbEzFmU?si=uNZcjlEfXHwP9QKX",
    extracontent:"environment with physics-based interactions, allowing users to test the stability and safety of their designs."
  },
  {
    title: "Dyslexia Detection Tool in School Going Children",
    content:
      "Our team's approach integrates a decision tree classifier with computer vision to identify dyslexia in school children. Through handwriting analysis, pronunciation assessment, and listening exercises, you evaluate writing, speaking, and listening abilities, crucial for diagnosing learning disorders.This comprehensive",
    source: "https://google.com",
    extracontent:
      "method, examining spelling, grammar, context, and phonetics accuracy, offers a thorough evaluation. It presents a promising solution for efficiently identifying dyslexia and potentially other learning disorders in school-aged children.",
  },
  {
    title: "Data Structure Visualizer",
    content:
      "The Data Structure Visualizer is an interactive web application built using React. This tool is designed to help users understand and visualize various data structures and algorithms, including Arrays, Linked Lists, Stacks, Queues, Binary Trees, and Sorting Algorithms. Each data structure has its own dedicated module within the application,",
    source: "https://google.com",
    extracontent:
      "providing an intuitive and interactive way to learn and explore.",
  },
  {
    title: "Course Management System",
    content:
      "A course Management System Build on java where students can enroll in courses, view their grades, and submit assignments. Instructors can create courses, grade assignments, and view student grades. The system also includes an admin panel for managing users, courses, and assignments. The system is built using Java, Spring Boot, and MySQL.",
    source: "https://google.com",
    extracontent: "",
  },
];

function createDiv(className) {
  var div = document.createElement("div");
  div.className = className;
  return div;
}

function createDiv(className, fontSize) {
  var div = document.createElement("div");
  div.className = className;
  div.style.fontSize = fontSize;
  return div;
}
function createCard() {
  var card = createDiv("card");
  // card.style.height = "300px";
  return card;
}
function extracontent(extra) {
  var ex = document.createElement("div");
  ex.className = "extracontent" + i;
  ex.innerHTML = extra;

  ex.style.display = "none";
  return ex;
}
function createImg(src, className) {
  var img = document.createElement("img");
  img.src = src;
  img.className = className;

  return img;
}
function createButton(id) {
  var button = document.createElement("button");
  button.id = id;
  button.innerHTML ="...";
  button.style.backgroundColor = "#000000";
  button.style.color = "#ffffff";
  button.style.border = "none";
  button.style.padding = "0px";
  button.style.margin = "0px";
  button.style.fontSize = "1rem";
  button.style.cursor = "pointer";



  // onclick
  button.setAttribute("onclick", `showextraContent(${id})`);
  return button;
}
function showextraContent(id) {
  console.log(id);
  var extracontent = document.querySelector(".extracontent" + id);
  var button = document.getElementById(id);
  button.style.display = "none";
  extracontent.style.color = "#ffffffa1";
  extracontent.style.fontSize = "1rem";
  extracontent.style.padding = "10px";
  extracontent.style.paddingTop = "0px";
  
  extracontent.style.display = "block";

}

var cards = document.querySelector(".cards");
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function test() {
  for (i = 0; i < myWorks.length; i++) {

    var card = createCard("card");
    var extra = extracontent(myWorks[i]["extracontent"]);
    if(myWorks[i]["extracontent"] != ""){
    var showbutton = createButton(i);
    }
    var contents = createDiv("contents");
    var title = createDiv("title");
    var readmore = createDiv("readmore");
    var content = createDiv("content", "1rem");

    readmore.setAttribute("onclick", `window.open('${myWorks[i]["source"]}')`);
    var readMoreImg = createImg(svgList["readmore"], "readmoreimg");
    readmore.appendChild(readMoreImg);
    title.innerHTML = myWorks[i]["title"];
    title.appendChild(readmore);
    content.innerHTML = myWorks[i]["content"];
    contents.appendChild(title);
    contents.appendChild(content);
    // contents.appendChild(extra);
    // contents.appendChild(showbutton);
    card.appendChild(contents);
    card.appendChild(extra);
    if(myWorks[i]["extracontent"] != ""){

      card.appendChild(showbutton);
    }
    cards.appendChild(card);
    // await timer(500)
  }
}
test();

/* <div class="card">

<div class="contents">
    <div class="title">
        News REST API <span class="readmore">
            <img
                src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDIxLjUzNGM1LjUxOCAwIDkuOTk4LTQuNDggOS45OTgtOS45OThzLTQuNDgtOS45OTctOS45OTgtOS45OTdjLTUuNTE3IDAtOS45OTcgNC40NzktOS45OTcgOS45OTdzNC40OCA5Ljk5OCA5Ljk5NyA5Ljk5OHptMC0xLjVjLTQuNjkgMC04LjQ5Ny0zLjgwOC04LjQ5Ny04LjQ5OHMzLjgwNy04LjQ5NyA4LjQ5Ny04LjQ5NyA4LjQ5OCAzLjgwNyA4LjQ5OCA4LjQ5Ny0zLjgwOCA4LjQ5OC04LjQ5OCA4LjQ5OHptMC02LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di01LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2NS41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXptLS4wMDIgM2MuNTUyIDAgMS0uNDQ4IDEtMXMtLjQ0OC0xLTEtMS0xIC40NDgtMSAxIC40NDggMSAxIDF6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=">
        </span>
    </div>
    <div class="content">
        Lorem Ipsum is simply and scrambled it unchanged. in the 1960s with the release of Lorem
        Ipsum passages, and more recently with desktop publis
    </div>

    <div class="tags">
    </div>
</div>
</div> */
