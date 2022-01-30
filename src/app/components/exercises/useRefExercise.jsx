import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const divRef = useRef();

    const handleClick = () => {
        divRef.current.style.width = "80px";
        divRef.current.style.height = "150px";
        divRef.current.textContent = "text";
    };
    return (

        <CollapseWrapper title="Упражнение">
            <div className="text-test" ref={divRef} >
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
        </div>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small onClick={handleClick}>
                    Блок
                </small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
