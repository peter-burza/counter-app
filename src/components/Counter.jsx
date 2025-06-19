import { useState } from "react"

export default function Counter() {
    const [result, setResult] = useState(0)
    const iconData = [
        {"style": "fa-plus duration-250 group-hover:rotate-90", "onClick": handlePlus},
        {"style": "fa-minus duration-300 group-hover:rotate-180", "onClick": handleMinus},
        {"style": "fa-rotate-right duration-400 group-hover:rotate-360", "onClick": handleReset},
    ]

    function handlePlus() {
        setResult(result + 1)
    }

    function handleMinus() {
        setResult(result - 1)
    }

    function handleReset() {
        setResult(0)
    }

    return (
        <div className="flex flex-col gap-15 items-center">
            <h1 className="font-light text-5xl">CounterPal</h1>
            <p className="text-3xl">{result}</p>
            <div className="flex gap-10">
                {iconData.map((icon, iconStyleIndex) => {
                    return (
                        <button onClick={icon.onClick} key={iconStyleIndex} className="group">
                            <i className={`fa-solid ${icon.style} text-xl`}></i>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}