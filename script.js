const branchNodes = document.querySelectorAll(".branch-node");


branchNodes.forEach((node) => {

    node.addEventListener("click", () => {

        const children =
            node.parentElement.querySelector(".children");

        children.classList.toggle("hidden");

    });

});
