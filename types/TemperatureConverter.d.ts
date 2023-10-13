export declare class TemperatureConverter {
    private el;
    private celsiusInput;
    private fahrenheitOutput;
    private kelvinOutput;
    constructor(el: HTMLElement);
    private convertCelsiusToKelvin;
    private convertCelsiusToFahrenheit;
    private initTemperatureConverter;
    destroy(): void;
}
