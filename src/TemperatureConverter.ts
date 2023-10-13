export class TemperatureConverter {
  private el: HTMLElement
  private celsiusInput: HTMLInputElement
  private fahrenheitOutput: HTMLElement
  private kelvinOutput: HTMLElement

  constructor(el: HTMLElement) {
    this.el = el
    this.celsiusInput = this.el.querySelector(
      '.celsius-input'
    ) as HTMLInputElement
    this.fahrenheitOutput = this.el.querySelector(
      '.fahrenheit-output'
    ) as HTMLElement
    this.kelvinOutput = this.el.querySelector('.kelvin-output') as HTMLElement
    this.convertCelsiusToKelvin = this.convertCelsiusToKelvin.bind(this)
    this.convertCelsiusToFahrenheit = this.convertCelsiusToFahrenheit.bind(this)
    this.initTemperatureConverter()
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
    if (!this.celsiusInput) return

    this.celsiusInput.addEventListener('keyup', () => {
      this.convertCelsiusToKelvin()
      this.convertCelsiusToFahrenheit()
    })
  }

  public destroy(): void {
    this.celsiusInput.removeEventListener('keyup', () => {
      this.convertCelsiusToKelvin()
      this.convertCelsiusToFahrenheit()
    })
  }
}
