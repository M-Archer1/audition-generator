function randomIndex(arr) {
  const length = arr.length;
  const randomIndex = Math.floor(Math.random() * length);
  return randomIndex;
}

export { randomIndex };