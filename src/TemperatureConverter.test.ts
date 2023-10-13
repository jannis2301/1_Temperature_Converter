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
    converter.destroy()
    document.body.innerHTML = ''
  })

  it('should convert Celsius to Kelvin', () => {
    const celsiusInput = converter['celsiusInput']
    const kelvinOutput = converter['kelvinOutput']

    celsiusInput.value = '25'
    celsiusInput.dispatchEvent(new Event('keyup'))

    expect(kelvinOutput.textContent).to.equal('298')
  })

  it('should convert Celsius to Fahrenheit', () => {
    const celsiusInput = converter['celsiusInput']
    const fahrenheitOutput = converter['fahrenheitOutput']

    celsiusInput.value = '25'
    celsiusInput.dispatchEvent(new Event('keyup'))

    expect(fahrenheitOutput.textContent).to.equal('77')
  })

  it('should handle invalid input', () => {
    const celsiusInput = converter['celsiusInput']
    const kelvinOutput = converter['kelvinOutput']
    const fahrenheitOutput = converter['fahrenheitOutput']

    celsiusInput.value = 'invalid' // Invalid input
    celsiusInput.dispatchEvent(new Event('keyup'))

    expect(kelvinOutput.textContent).to.equal('')
    expect(fahrenheitOutput.textContent).to.equal('')
  })
})
