import imgone from "../../../img/Cars-Stack.png"
import imgtwo from "../../../img/LAND-Stack.png"
import imgthree from "../../../img/GFD-Stack.png"
import imgfour from "../../../img/SKhazendar_P1_magazine.jpg"
import { Link } from "react-router-dom"
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={imgone} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cars</h5>
              <p class="card-text">This is one of my earlier personal pieces, created to improve my photography and
                editing skills. The top image is the original, while the bottom is my edited version. I
                applied some basic manipulations, like bringing the cars closer together and adjusting
                the leaf colors to create a fall atmosphere. I also removed distracting elements, such as
                the stop sign on the left and the person on the right. To enhance focus on the cars, I
                adjusted the brightness and contrast for a more focal effect, as well as adjusted the
                optics and focus in post. This was purely a practice run rather than a commission or an
                assignment, and I enjoyed working on it.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={imgtwo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">LAND</h5>
              <p class="card-text">photo manipulation. The goal was to combine at least three images and include the
                text “LAND”. I aimed for a warm, vibrant colors and chose a dusk/dawn theme to
                achieve this. The poster merges separate images, a mountain range, sky, and a figure
                holding a camera through various effects, color correction, and camera raw filter
                adjustments. This piece was automatically entered into a contest for best poster.
                Although I did not win, I enjoyed the creative process and was pleased with the final
                results.This poster, created in photoshop during college, was part of an assignment focused on
                .</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={imgthree} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">GFD</h5>
              <p class="card-text">I designed these mockups and logo as a practice project for a family member, 
                using Adobe Illustrator and Photoshop. The logo features a typeface called "Fromage", 
                which I chose to work with the customer's vision for her business "Glamorous Fabulous Decor". 
                The typeface added a modern touch with a hint of luxury, which works with the aimed theme. To make the GFD stand out,
                 I merged the three letters in to its own form. After the completion of the logo, I put together the mockups in Photoshop to showcase 
                 the brand.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={imgfour} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">magazine </h5>
              <p class="card-text">This magazine cover design was completed during college. The objective was to design
                a magazine cover with precise proportions and include essential elements like the
                images credits, quotes, and sources. I personalized it by incorporating my own photos
                I have taken onto the design. We were allowed to use a pre written article for the body,
                so long as we organize it to the required proportions. I aimed to achieve a simple look
                towards the design, rather than anything complex while maintaining all of the
                assignment’s requirements. The thumbnail on the left was a quick edit to a photo I have
                taken, and the text relates to the vehicle, as well as the font, as it is the authentic font
                to the car brand. While I see opportunities to improve within this, like refining the
                quote design, i’m satisfied with the overall results..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
