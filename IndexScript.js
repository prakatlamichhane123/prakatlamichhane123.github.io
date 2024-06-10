textbox = document.getElementById("my-text");
intro = `Hello, I'm Prakat Lamichhane, an enthusiastic beginner in the world of
technology and creativity. My portfolio features a collection of
projects that highlight my growing skills and passion for learning.
Each project represents a step in my journey, showcasing my dedication
to mastering new technologies and my commitment to continuous
improvement. From initial web development experiments to early
software solutions, my work reflects a foundational understanding of
user experience and a drive to innovate. Explore my projects to see
how I blend my budding technical skills with a creative vision, eager
to make an impact and learn along the way.😎`;

function typing(element, giventext, i = 0) {
  element.innerHTML += giventext[i];

  if (i === giventext.length - 1) {
    return;
  }
  setTimeout(() => typing(element, giventext, i + 1), 15);
}
typing(textbox, intro);
