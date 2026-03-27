export const addPoints = (points) => {
  let score = Number(localStorage.getItem("points") || 0);
  score += points;
  localStorage.setItem("points", score);
  return score;
};

export const getPoints = () => {
  return Number(localStorage.getItem("points") || 0);
};
