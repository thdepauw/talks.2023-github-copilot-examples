export function generateChristmasTree(height) {
  let tree = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += "*";
    }
    tree += row + "\n";
  }
  tree += "*\n";
  return tree;
}
