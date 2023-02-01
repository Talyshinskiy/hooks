import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const smallRef = useRef();

    const handleChangeSize = () => {
        console.log(blockRef.current);
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
        blockRef.current.text = "150px";
        smallRef.current.innerText = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={blockRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={smallRef}>Блок</small>
            </div>
            <button className="btn btn-danger" onClick={handleChangeSize}>
                Button for change text and size
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
