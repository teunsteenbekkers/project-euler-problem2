class FibonacciSequenceGenerator {
  constructor(first = 1, second = 2, maxValue = null) {
    this.first = first;
    this.second = second;
    this.maxValue = maxValue;
    if (this.maxValue === null) {
      throw "Specify a max value!";
    }
  }

  generate() {
    let first = this.first;
    let second = this.second;
    const terms = [first, second];

    const isLastSequenceValueLowerThanMaxValue = () =>
      terms[terms.length - 1] < this.maxValue;
    while (isLastSequenceValueLowerThanMaxValue()) {
      const result = first + second;
      terms.push(result);

      if (!isLastSequenceValueLowerThanMaxValue()) {
        terms.splice(terms.length - 1, 1);
        break;
      }

      first = second;
      second = result;
    }

    console.log(terms);
    return terms;
  }
}
