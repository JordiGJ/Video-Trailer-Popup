// get elements
const button = document.querySelector("button");
const videoContainer = document.querySelector(".video-container");
const closeIcon = document.querySelector(".fas");
const video = document.querySelector("video");

// functions
const handleClick = (e) => {
  const target = e.target.textContent;
  if (target === "Watch now") {
    videoContainer.classList.remove("active");
  } else {
    videoContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
  }
};

// eventListeners
button.addEventListener("click", handleClick);
closeIcon.addEventListener("click", handleClick);
