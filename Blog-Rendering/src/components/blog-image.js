/* <div class="blog-image">
    <img src="" alt="" />
</div> */

export const blogImage = (imageUrl) => {
    const div = document.createElement("div");
    div.classList.add("blog-image");
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Some alternate description";
    div.appendChild(img);

    return div;
}