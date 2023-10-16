export class TemperatureConverter {
  private el: HTMLElement
  private celsiusInput: HTMLInputElement
  private fahrenheitOutput: HTMLElement
  private kelvinOutput: HTMLElement

  constructor(el: HTMLElement) {
    this.el = el
    this.celsiusInput = this.getCelsiusInput()
    this.fahrenheitOutput = this.getFahrenheitOutput()
    this.kelvinOutput = this.getKelvinOutput()
    this.convertCelsiusToKelvin = this.convertCelsiusToKelvin.bind(this)
    this.convertCelsiusToFahrenheit = this.convertCelsiusToFahrenheit.bind(this)
    this.initTemperatureConverter()
  }

  public throw(selector: string): never {
    throw new Error(`Element with selector ${selector} is missing`)
  }

  public getCelsiusInput() {
    return (
      this.el.querySelector<HTMLInputElement>('.celsius-input') ??
      this.throw('.celsius-input')
    )
  }

  public getFahrenheitOutput() {
    return (
      this.el.querySelector<HTMLElement>('.fahrenheit-output') ??
      this.throw('.fahrenheit-output')
    )
  }
  public getKelvinOutput() {
    return (
      this.el.querySelector<HTMLElement>('.kelvin-output') ??
      this.throw('.kelvin-output')
    )
  }

  private convertCelsiusToKelvin(): void {
    this.kelvinOutput.textContent = Math.floor(
      parseInt(this.celsiusInput.value) + 273.15
    ).toString()
    if (isNaN(parseInt(this.kelvinOutput.textContent))) {
      this.kelvinOutput.textContent = ''
    }
  }

  private convertCelsiusToFahrenheit = (): void => {
    this.fahrenheitOutput.textContent = Math.floor(
      parseInt(this.celsiusInput.value) * (9 / 5) + 32
    ).toString()
    if (isNaN(parseInt(this.fahrenheitOutput.textContent))) {
      this.fahrenheitOutput.textContent = ''
    }
  }

  private initTemperatureConverter(): void {
    this.celsiusInput.addEventListener('keyup', () => {
      this.convertCelsiusToKelvin()
      this.convertCelsiusToFahrenheit()
    })
  }
}
