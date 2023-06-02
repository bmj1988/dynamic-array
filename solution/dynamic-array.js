class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0
    this.capacity = defaultSize
    this.data = new Array(defaultSize)

  }

  read(index) {

    return this.data[index]
  }

  unshift(val) {

    this.length++
    for (let i = this.data.length - 1; i >= 0; i--) {
      if (this.data[i - 1] !== undefined) {
        this.data[i] = this.data[i - 1]
      }
    }
    this.data[0] = val
  }

}


module.exports = DynamicArray;
