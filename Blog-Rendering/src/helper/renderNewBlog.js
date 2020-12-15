import { findBlogById } from "./findBlogById.js";
import { blogImage } from "../components/blog-image.js";
import { blogContent } from "../components/blog-content.js"
import { relatedLinks } from "../components/related-links.js";

export const renderNewBlog = (blogId) => {
    const blogObject = findBlogById(blogId);

    const rootDiv = document.getElementById("root");
    rootDiv.innerHTML = "";
    rootDiv.appendChild(blogImage(blogObject[0].imageUrl));
    rootDiv.appendChild(blogContent(blogObject[0].title, blogObject[0].content));

    const asideDiv = document.getElementById("related-links");
    asideDiv.innerHTML = "";
    asideDiv.appendChild(relatedLinks(blogObject[0].links));
}