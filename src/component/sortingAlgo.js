// Insertion sort algorithm
export const insertionSort = (randomNumbers) => {
  const sortedNumbers = [...randomNumbers];
  const len = sortedNumbers.length;

  for (let i = 1; i < len; i++) {
    let currentElement = sortedNumbers[i];
    let j = i - 1;

    while (j >= 0 && sortedNumbers[j] > currentElement) {
      sortedNumbers[j + 1] = sortedNumbers[j];
      j--;
    }

    sortedNumbers[j + 1] = currentElement;
  }

  return sortedNumbers;
};

// Selection sort algorithm
export const selectionSort = (randomNumbers) => {
  const sortedNumbers = [...randomNumbers];
  const n = sortedNumbers.length;

  for (let i = 0; i < n - 1; i++) {
    // Fix the loop condition here
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (sortedNumbers[j] < sortedNumbers[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap elements
      [sortedNumbers[i], sortedNumbers[minIndex]] = [
        sortedNumbers[minIndex],
        sortedNumbers[i],
      ];
    }
  }

  return sortedNumbers;
};


// Bubble sort algorithm
export const bubbleSort = (randomNumbers) => {
  const sortedNumbers = [...randomNumbers];

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    for (let j = 0; j < sortedNumbers.length - 1 - i; j++) {
      if (sortedNumbers[j] > sortedNumbers[j + 1]) {
        // Swap elements
        const temp = sortedNumbers[j];
        sortedNumbers[j] = sortedNumbers[j + 1];
        sortedNumbers[j + 1] = temp;
      }
    }
  }

  return sortedNumbers;
};


// Quick sort algorithm
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
};

export const performQuickSort = (randomNumbers) => {
  const sortedNumbers = quickSort(randomNumbers);
  return sortedNumbers;
};



// Merge sort algorithm
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

export const performMergeSort = (randomNumbers) => {
  const sortedNumbers = mergeSort(randomNumbers);
  return sortedNumbers;
};


// Shell sort algorithm
const shellSort = (arr) => {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const currentElement = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > currentElement) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = currentElement;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
};

export const performShellSort = (randomNumbers) => {
  const sortedNumbers = shellSort([...randomNumbers]);
  return sortedNumbers;
};
