export default function useCurrency(){
    const currencyPipe = (value: string | number) => `$${parseFloat(value.toString()).toFixed(2)}`;
    return {
        currencyPipe
    }

}