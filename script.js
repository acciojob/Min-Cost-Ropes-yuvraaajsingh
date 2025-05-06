

function mincost(arr) {
	let totalCost = 0;

  // Repeat until only one rope remains
  while (arr.length > 1) {
    // Sort the array to get the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take the two smallest lengths
    let first = arr.shift();
    let second = arr.shift();

    // Cost to connect them
    let cost = first + second;
    totalCost += cost;

    // Add the new rope back to the array
    arr.push(cost);
  }

  return totalCost;
}


module.exports=mincost;
