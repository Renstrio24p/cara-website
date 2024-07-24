export function generateStars(stars: number) {
  let starsArray = [];
  const maxStars = 5;
  let fullStars = Math.floor(stars);
  let halfStar = stars % 1 >= 0.5 ? 1 : 0;
  let emptyStars = maxStars - fullStars - halfStar;

  for (let i = 0; i < fullStars; i++) {
    starsArray.push( /*html*/ `<i class="ri-star-s-fill"></i>`);
  }

  if (halfStar) {
    starsArray.push( /*html*/ `<i class="ri-star-half-line"></i>`);
  }

  for (let i = 0; i < emptyStars; i++) {
    starsArray.push( /*html*/ `<i class="ri-star-s-line"></i>`);
  }

  return starsArray;
}
