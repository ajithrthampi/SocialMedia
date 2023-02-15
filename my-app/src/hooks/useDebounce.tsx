import { time } from "console";
import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay:number) {
   const [debouncedValue, setDebounceValue] = useState<T>(value)

    useEffect(() => {
       const timer = setTimeout(() => {
        setDebounceValue(value);

        return () =>{
            clearTimeout(timer)
        }
       },delay || 1000)
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;