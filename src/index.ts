import { TemperatureConverter } from './TemperatureConverter'

const bootstrapper = (): void => {
  new TemperatureConverter(
    document.querySelector('.temperature-converter') as HTMLElement
  )
}

window.addEventListener('load', bootstrapper)
