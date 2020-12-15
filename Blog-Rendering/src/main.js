import { blogs } from "./data.js";
import { blogImage } from "./components/blog-image.js";
import { blogContent } from "./components/blog-content.js";
import { relatedLinks } from "./components/related-links.js";

window.onload = () => {
    const blogDiv =  document.getElementById("root");
    const blogImageDiv = blogImage(blogs[0].imageUrl);
    blogDiv.appendChild(blogImageDiv);
    blogDiv.appendChild(blogContent(blogs[0].title , blogs[0].content));

    const asideDiv = document.getElementById("related-links");
    asideDiv.appendChild(relatedLinks(blogs[0].links));

}