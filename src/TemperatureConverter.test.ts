import { TemperatureConverter } from './TemperatureConverter'
import { it, describe, expect, beforeEach, afterEach } from 'vitest'
import './style.css'

describe('TemperatureConverter', () => {
  let converter: TemperatureConverter

  // Mock HTMLElement and setup beforeEach
  beforeEach(() => {
    const mockElement = document.createElement('div')
    mockElement.innerHTML = `
      <input type="text" class="celsius-input" />
      <div class="fahrenheit-output"></div>
      <div class="kelvin-output"></div>
    `

    document.body.appendChild(mockElement)
    converter = new TemperatureConverter(mockElement)
  })

  // Cleanup after each test
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should throw an error for an invalid selector', () => {
    const invalidSelector = '.noElement'
    expect(() => converter.throw(invalidSelector)).toThrowError(
      `Element with selector ${invalidSelector} is missing`
    )
  })

  it('should convert Celsius to Kelvin', () => {
    const celsiusInput = converter.getCelsiusInput()
    const kelvinOutput = converter.getKelvinOutput()

    celsiusInput.value = '25'
    celsiusInput.dispatchEvent(new Event('keyup'))

    expect(kelvinOutput.textContent).to.equal('298')
  })

  it('should convert Celsius to Fahrenheit', () => {
    const celsiusInput = converter.getCelsiusInput()
    const fahrenheitOutput = converter.getFahrenheitOutput()

    celsiusInput.value = '25'
    celsiusInput.dispatchEvent(new Event('keyup'))

    expect(fahrenheitOutput.textContent).to.equal('77')
  })

  it('should handle invalid input', () => {
    const celsiusInput = converter.getCelsiusInput()
    const kelvinOutput = converter.getKelvinOutput()
    const fahrenheitOutput = converter.getFahrenheitOutput()

    celsiusInput.value = 'invalid' // Invalid input
    celsiusInput.dispatchEvent(new Event('keyup'))

    expect(kelvinOutput.textContent).to.equal('')
    expect(fahrenheitOutput.textContent).to.equal('')
  })
})
