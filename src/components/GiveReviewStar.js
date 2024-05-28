import { useEffect, useState } from "react";
import WriteReview from "./WriteReview";

export default function GiveReviewStar() {
  const [starGiven, setStarGiven] = useState(0);
  useEffect(() => {
    let stars = document.querySelectorAll(".ratings-star>.fa-star");
    stars.forEach((star) => {
      star.addEventListener("mouseenter", (e) => {
        let currentStar = e.target;
        let previousStar = currentStar.previousElementSibling;
        currentStar.classList.add("active");

        while (previousStar) {
          previousStar.classList.add("active");
          previousStar = previousStar.previousElementSibling;
        }
        currentStar.classList.add("star-hover");
      });

      star.addEventListener("mouseleave", (e) => {
        let currentStar = e.target;
        let previousStar = currentStar.previousElementSibling;
        while (previousStar) {
          currentStar.classList.remove("active");
          previousStar.classList.remove("active");
          previousStar = previousStar.previousElementSibling;
        }
        currentStar.classList.remove("active");
      });

      star.addEventListener("click", (e) => {
        stars.forEach((star) => {
          star.classList.remove("star-activated");
        });

        let currentStar = e.target;
        let previousStar = currentStar.previousElementSibling;
        let starvalue = 1;
        while (previousStar) {
          starvalue++;
          previousStar.classList.add("star-activated");
          previousStar = previousStar.previousElementSibling;
        }
        setStarGiven(starvalue);
        currentStar.classList.add("star-activated");
      });
    });
  }, []);

  return (
    <>
      <div class=" flex justify-center flex-row  md:m-auto md:ml-4">
        <picture>
          <source
            type="image/webp"
            srcset="https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots.webp 1x, https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots@2x.webp 2x"
          />
          <source
            type="image/png"
            srcset="https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots.png 1x, https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots@2x.png 2x"
          />
          <img
            style={{ scale: "0.7" }}
            loading="lazy"
            class="mt-5 z-0"
            src="https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots.png"
            alt="Decorative shape"
          />
        </picture>
        <div className="flex flex-col items-center mt-4">
          <b>Write your review</b>
          <div className="ratings-star my-5 flex flex-row">
            <i class="fa-solid fa-star rounded border p-1"></i>
            <i class="fa-solid fa-star rounded border p-1"></i>
            <i class="fa-solid fa-star rounded border p-1"></i>
            <i class="fa-solid fa-star rounded border p-1"></i>
            <i class="fa-solid fa-star rounded border p-1"></i>
          </div>
        </div>
        <picture>
          <source
            type="image/webp"
            srcset="https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots.webp 1x, https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots@2x.webp 2x"
          />
          <source
            type="image/png"
            srcset="https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots.png 1x, https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots@2x.png 2x"
          />
          <img
            loading="lazy"
            style={{ rotate: "180deg", scale: "0.7" }}
            class="mb-5 z-0"
            src="https://assets.reviews.io/img/all-global-assets/pages/business-solutions/shape__bottomlhs-corner--dots.png"
            alt="Decorative shape"
          />
        </picture>
      </div>
      {starGiven > 0 && <WriteReview />}
    </>
  );
}
