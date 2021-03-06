import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };
    return (
        <>
            {count}
            <p>
                <button type="button" onClick={() => setCount(count + 1)}>
                    Add 1
                </button>
            </p>
            <p>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </>
    );
}
