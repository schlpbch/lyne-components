const generateLegsData = (items) => {
  const legsData = {
    legs: []
  };

  items.forEach((item) => {
    legsData.legs.push({
      cancellation: item[0],
      duration: item[1],
      skipped: item[2]
    });
  });

  return legsData;
};

export default {
  stop0: generateLegsData([
    [
      false,
      100,
      false
    ]
  ]),
  stop0Delayed: generateLegsData([
    [
      true,
      100,
      false
    ]
  ]),
  stop0Skipped: generateLegsData([
    [
      false,
      100,
      true
    ]
  ]),
  stop1: generateLegsData([
    [
      false,
      25,
      false
    ],
    [
      false,
      75,
      false
    ]
  ]),
  stop2: generateLegsData([
    [
      false,
      25,
      false
    ],
    [
      false,
      10,
      false
    ],
    [
      false,
      65,
      false
    ]
  ]),
  stop2Skipped: generateLegsData([
    [
      false,
      25,
      false
    ],
    [
      false,
      10,
      true
    ],
    [
      false,
      65,
      false
    ]
  ]),
  stop3: generateLegsData([
    [
      false,
      25,
      false
    ],
    [
      false,
      10,
      false
    ],
    [
      false,
      50,
      false
    ],
    [
      false,
      15,
      false
    ]
  ]),
  stop3Skipped: generateLegsData([
    [
      false,
      25,
      false
    ],
    [
      false,
      10,
      true
    ],
    [
      false,
      50,
      true
    ],
    [
      false,
      15,
      false
    ]
  ]),
  stop4: generateLegsData([
    [
      false,
      25,
      false
    ],
    [
      false,
      10,
      false
    ],
    [
      false,
      8,
      false
    ],
    [
      false,
      15,
      false
    ],
    [
      false,
      42,
      false
    ]
  ]),
  stop9: generateLegsData([
    [
      false,
      10,
      false
    ],
    [
      false,
      5,
      false
    ],
    [
      false,
      5,
      false
    ],
    [
      false,
      10,
      false
    ],
    [
      false,
      10,
      false
    ],
    [
      false,
      5,
      false
    ],
    [
      false,
      5,
      false
    ],
    [
      false,
      10,
      false
    ],
    [
      false,
      15,
      false
    ],
    [
      false,
      25,
      false
    ]
  ])
};
