import { renderNewBlog } from "../helper/renderNewBlog.js";

export const relatedLinks = (links) => {
    const ul = document.createElement("ul");
    ul.innerHTML = "Related Links:";
    links.forEach((link) => {
        let li = document.createElement("li");
        li.innerHTML = link.title;
        li.id = link.id;

        li.addEventListener("click", () => {
            renderNewBlog(link.id);
        })
        
        ul.appendChild(li);
    });
    return ul;
}

{/* <div id="related-links">
            <ul>
                <li>Related Link</li>
                <li>Related Link</li>
                <li>Related Link</li>
                <li>Related Link</li>
            </ul>
        </div> */}