export function calculateRating() {
  let rating = document.getElementById("rating").value;
  let ratingText = document.getElementById("ratingText");
  if (rating == 1) {
    ratingText.innerHTML = "Very Bad";
  } else if (rating == 2) {
    ratingText.innerHTML = "Bad";
  } else if (rating == 3) {
    ratingText.innerHTML = "Good";
  } else if (rating == 4) {
    ratingText.innerHTML = "Very Good";
  } else if (rating == 5) {
    ratingText.innerHTML = "Excellent";
  }
}
