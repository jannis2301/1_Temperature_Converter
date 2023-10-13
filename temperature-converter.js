var n = Object.defineProperty;
var u = (e, t, s) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => (u(e, typeof t != "symbol" ? t + "" : t, s), s);
class r {
  constructor(t) {
    i(this, "el");
    i(this, "celsiusInput");
    i(this, "fahrenheitOutput");
    i(this, "kelvinOutput");
    i(this, "convertCelsiusToFahrenheit", () => {
      this.fahrenheitOutput.textContent = Math.floor(
        parseInt(this.celsiusInput.value) * (9 / 5) + 32
      ).toString(), isNaN(parseInt(this.fahrenheitOutput.textContent)) && (this.fahrenheitOutput.textContent = "");
    });
    this.el = t, this.celsiusInput = this.el.querySelector(
      ".celsius-input"
    ), this.fahrenheitOutput = this.el.querySelector(
      ".fahrenheit-output"
    ), this.kelvinOutput = this.el.querySelector(".kelvin-output"), this.convertCelsiusToKelvin = this.convertCelsiusToKelvin.bind(this), this.convertCelsiusToFahrenheit = this.convertCelsiusToFahrenheit.bind(this), this.initTemperatureConverter();
  }
  convertCelsiusToKelvin() {
    this.kelvinOutput.textContent = Math.floor(
      parseInt(this.celsiusInput.value) + 273.15
    ).toString(), isNaN(parseInt(this.kelvinOutput.textContent)) && (this.kelvinOutput.textContent = "");
  }
  initTemperatureConverter() {
    this.celsiusInput && this.celsiusInput.addEventListener("keyup", () => {
      this.convertCelsiusToKelvin(), this.convertCelsiusToFahrenheit();
    });
  }
  destroy() {
    this.celsiusInput.removeEventListener("keyup", () => {
      this.convertCelsiusToKelvin(), this.convertCelsiusToFahrenheit();
    });
  }
}
const h = () => {
  new r(
    document.querySelector(".temperature-converter")
  );
};
window.addEventListener("load", h);
//# sourceMappingURL=temperature-converter.js.map
