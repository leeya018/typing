function checkHand(hand) {
  const count = [];
  const suit = [];
  const rank = [];

  // Initialize count, suit and rank arrays
  for (let i = 0; i < 13; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < 4; i++) {
    suit[i] = false;
  }
  for (let i = 0; i < 9; i++) {
    rank[i] = false;
  }

  // Count the number of cards of each rank
  for (let i = 0; i < 5; i++) {
    count[hand[i].rank]++;
  }

  // Check for flush
  for (let i = 0; i < 5; i++) {
    suit[hand[i].suit] = true;
  }
  let flush = false;
  for (let i = 0; i < 4; i++) {
    if (suit[i]) {
      flush = true;
      break;
    }
  }

  // Check for straight
  let straight = false;
  let r = 0;
  for (let i = 0; i < 13; i++) {
    if (count[i] == 1) {
      r++;
    } else {
      r = 0;
    }
    if (r == 5) {
      straight = true;
      break;
    }
  }

  // Set rank array
  if (flush && straight) {
    rank[8] = true; // Straight Flush
  } else if (count[0] == 4) {
    rank[7] = true; // Four of a Kind
  } else if (count[0] == 3 && count[1] == 2) {
    rank[6] = true; // Full House
  } else if (flush) {
    rank[5] = true; // Flush
  } else if (straight) {
    rank[4] = true; // Straight
  } else if (count[0] == 3) {
    rank[3] = true; // Three of a Kind
  } else if (count[0] == 2 && count[1] == 2) {
    rank[2] = true; // Two Pair
  } else if (count[0] == 2) {
    rank[1] = true; // Pair
  } else {
    rank[0] = true; // High Card
  }

  let res;
  rank.forEach((item, ind) => {
    if (item) {
      res = ind;
      return;
    }
  });
  //   console.log(res);
  return res;
  // Return the highest rank found
}

let hand = [
  {
    rank: 2,
    suit: "H",
  },
  {
    rank: 3,
    suit: "H",
  },
  {
    rank: 4,
    suit: "H",
  },
  {
    rank: 5,
    suit: "H",
  },
  {
    rank: 6,
    suit: "H",
  },
];

let hand1 = [
  {
    rank: 2,
    suit: "H",
  },
  {
    rank: 2,
    suit: "S",
  },
  {
    rank: 2,
    suit: "D",
  },
  {
    rank: 7,
    suit: "H",
  },
  {
    rank: 8,
    suit: "H",
  },
];
const res = checkHand(hand);
const res1 = checkHand(hand1);
console.log(res1);
