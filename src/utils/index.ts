class NumberTransformRoman {
  state: { roman: string }
  valueSplit: (v: any) => any
  transformN: (n: any) => void
  constructor() {
    this.state = {
      roman: '',
    }

    this.valueSplit = (v) => {
      const str = v.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
      return str.split(',')
    }

    this.transformN = (n) => {
      n = n.length === 3 ? n : n.padStart(3, null)
      for (let i = 0; i < n.length; i++) {
        switch (i) {
          case 0: this.setRoman(n[i], 'C', 'D', 'M'); break
          case 1: this.setRoman(n[i], 'X', 'L', 'C'); break
          case 2: this.setRoman(n[i], 'I', 'V', 'X'); break
        }
      }
    }

    this.setRoman = (toRoman, a, b, c) => {
      this.state.roman += this.check(toRoman, a, b, c)
    }

    this.check = (toRoman, a, b, c) => {
      const frequency = parseInt(toRoman)
      if (frequency === 9)
        return `${a + c}`
      else if (frequency === 0)
        return '#'
      else if (frequency === 4)
        return `${a + b}`
      else if (frequency === 5)
        return `${b}`
      else if (frequency > 5)
        return `${b + a.repeat(frequency - 5)}`
      else return a.repeat(frequency)
    }
  }

  check(_toRoman: any, _a: string, _b: string, _c: string) {
    throw new Error('Method not implemented.')
  }

  setRoman(_arg0: any, _arg1: string, _arg2: string, _arg3: string) {
    throw new Error('Method not implemented.')
  }

  calculation = (callback: () => any) => {
    if (callback) {
      const value = callback()
      return this.transformRoman(value)
    }
  }

  transformRoman = (value: any) => {
    const nSplit = this.valueSplit(value)
    nSplit.forEach((n: any, idx: number) => {
      this.transformN(n)
      if (idx !== nSplit.length - 1)
        this.state.roman += ','
    })
    return this.state.roman
  }
}

module.exports = NumberTransformRoman
