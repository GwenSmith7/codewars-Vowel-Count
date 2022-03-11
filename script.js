'use strict';

function getCount(str) {
  // changed var to let here
  let vowelsCount = 0;

  // I just added in this consonantCount variable for testing
  let consonantCount = 0;
  for (let i = 0; i < str.length; i++)
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      vowelsCount++;
    } else {
      consonantCount++;
    }
  console.log(vowelsCount);
  console.log(consonantCount);
  return vowelsCount;
}

// This could be refactored but the goal was to get this working first
