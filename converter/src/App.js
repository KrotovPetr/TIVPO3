
import './App.css';
import {useState} from "react";
import {getAnswer} from "./answer";
function App() {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(1);

  return (
    <div className="App">
        <h1>Конвертер величин</h1>
        <input type={"text"} placeholder={"Введите количество"} id={"inputValue"} onChange={(e)=>{
            if(!isNaN(+e.target.value)){
                setValue3(+(e.target.value))
            } else {
                setValue1(1)
            }
        }}/>
        <div className={"translators"}>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <h2>Выберите базовую величину:</h2>

                <div>
                    <input type="radio" id="Сантиметр" name="value" value="Сантиметр" onChange={(e)=>{
                        setValue1(1);
                    }}/>
                    <label htmlFor="huey">Сантиметр</label>
                </div>

                <div>
                    <input type="radio" id="Километр" name="value" value="Километр"  onChange={(e)=>{
                        setValue1(100000);
                    }}/>
                    <label htmlFor="Километр">Километр</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="value" value="Аршин"  onChange={(e)=>{
                        setValue1(71.12);
                    }}/>
                    <label htmlFor="louie">Аршин</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Вершина"  onChange={(e)=>{
                        setValue1(4.45);
                    }}/>
                    <label htmlFor="louie">Вершок</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Верста"  onChange={(e)=>{
                        setValue1(106680);
                    }}/>
                    <label htmlFor="louie">Верста</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Миля"  onChange={(e)=>{
                        setValue1(160934.4);
                    }}/>
                    <label htmlFor="louie">Миля</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Фут"  onChange={(e)=>{
                        setValue1(30.48);
                    }}/>
                    <label htmlFor="louie">Фут</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Дюйм"  onChange={(e)=>{
                        setValue1(2.54);
                    }}/>
                    <label htmlFor="louie">Дюйм</label>
                </div>
            </form>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <h2>Выберите искомую величину:</h2>
                <div>
                    <input type="radio" id="Сантиметр" name="value" value="Сантиметр" onChange={(e)=>{
                        setValue2(1);
                    }}/>
                    <label htmlFor="huey">Сантиметр</label>
                </div>

                <div>
                    <input type="radio" id="Километр" name="value" value="Километр"  onChange={(e)=>{
                        setValue2(100000);
                    }}/>
                    <label htmlFor="Километр">Километр</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="value" value="Аршин"  onChange={(e)=>{
                        setValue2(71.12);
                    }}/>
                    <label htmlFor="louie">Аршин</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Вершина"  onChange={(e)=>{
                        setValue2(4.45);
                    }}/>
                    <label htmlFor="louie">Вершок</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Верста"  onChange={(e)=>{
                        setValue2(106680);
                    }}/>
                    <label htmlFor="louie">Верста</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Миля"  onChange={(e)=>{
                        setValue2(160934.4);
                    }}/>
                    <label htmlFor="louie">Миля</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Фут"  onChange={(e)=>{
                        setValue2(30.48);
                    }}/>
                    <label htmlFor="louie">Фут</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Дюйм"  onChange={(e)=>{
                        setValue2(2.54);
                    }}/>
                    <label htmlFor="louie">Дюйм</label>
                </div>

            </form>

        </div>
        <h1>Итог: {getAnswer(value1, value2, value3)}</h1>
    </div>
  );
}

export default App;
