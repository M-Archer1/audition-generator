function randomIndex(arr) {
  const length = arr.length;
  const randomIndex = math.Floor(Math.random() * length);
  return randomIndex;
}

export { randomIndex };