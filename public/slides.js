var slides = [

  {
    feature: true,
    content: "<h1>An Introduction<br/>to <em>Node</em></h1>"
  },
  {
    feature: true,
    content: "<h2><em>Thesis:</em> JavaScript is a (fortunate!) accident of history.</h2>"
  },
  {
    title: "JavaScript, the first 10 years",
    ul: [
      "1995: Invention of <em>LiveScript</em> (by one guy, in nine days)",
      "1995: Some dude in marketing renames it <em>JavaScript</em>",
      "1997: Standardized as <em>ECMAScript</em>",
      "1999: ECMAScript <em>version 3</em> specification finalized",
      "2000: Adobe releases <em>ActionScript</em> as part of Flash"
    ]
  },
  {
    feature: true,
    content: "<h2>Developing for browsers sucked <br/>(and so no one took JS seriously)</h2>"
  },
  {
    title: "JavaScript, the next 10 years",
    ul: [
      "2005: <em>Acid2</em> browser standards test released",
      "2006: Initial release of <em>jQuery</em>",
      "2008: Publication of <em>JavaScript: The Good Parts</em>",
      "2009: ECMAScript <em>version 5</em> specification finalized",
      "2010: Initial release of <em>Backbone</em> (leading to <em>Angular</em>, <em>Ember</em>, <em>React</em> etc)",
      "2015: ECMAScript <em>version 6</em> specification finalized",
    ]
  },
  {
    feature: true,
    content: "<h2>JS is now a respected programming language <br/>and <em>the most popular language in the world</em></h2>"
  },
  {
    title: "JavaScript: the sneaky awesome parts",
    ul: [
      "Functions are first-class objects -> functional programming",
      "Asynchronous and event-based",
      "Basic data structures are elegant and flexible",
      "Non-compiled, verbose commands, and familiar syntax",
      "Language, and all code ever written, is free and open source",
      "Prominent language with a fantastic community",
      "Ubiquitous runtime environments"
    ]
  },
  {
    feature: true,
    content: "<h2><em>Node.js</em> is just JavaScript without the browser</h2>"
  },
  {
    title: "What is Node?",
    ul: [
      "Node is a JavaScript (and C++) executable",
      "Runs the code at a single point of entry (with arguments)",
      "Lives most anywhere - Mac, Linux, Windows, Arduino...",
      "Invented by 2009 by Ryan Dahl at Joyent",
      "Under control of community foundation in 2015"
    ]
  },
  {
    title: "So.. what can Node do?",
    ul: [
      "Node.js can be used as a web server",
      "Node.js can be used as a wrapper around a data store",
      "Node.js can be used as a data store",
      "Node.js can be used as a short utility script",
      "Node.js can be used as a single, simple node in a large collection",
      "Node.js can be used as a fully-realized web application",
      "Node.js can be used to easily parse massive datasets"
    ]
  },
  {
    title: "Why is Node popular?",
    ul: [
      "Single-threaded but highly concurrent",
      "Simple tasks are really quick",
      "Non-blocking asynchronicity",
      "Dead simple third party code with <em>npm</em>"
    ]
  },
  {
    title: "Node modules",
    ul: [
      "Node works with a pattern called <em>require.js</em> (also called <em>CommonJS</em>)",
      "Code in separate files (called modules) will explicitly export a value",
      "Can load third-party modules or from your own files",
      "Use closures to encapsulate private variables/functions"
    ]
  },
  {
    title: "Understanding npm",
    ul: [
      "Used to stand for <em>node package manager</em>",
      "Tightly linked with node.js",
      "Free repository for third-party modules (like <em>express</em> or <em>lodash</em>)",
      "<em>npm install packagename</em> from command line"
    ]
  },
  {
    title: "Writing code to use <em>require</em>",
    code: [
      "// increment.js",
      "",
      "var counter = 0",
      "var increment = function() {",
      "  counter += 1",
      "  return counter",
      "}",
      "",
      "module.exports = increment"
    ]
  },
]