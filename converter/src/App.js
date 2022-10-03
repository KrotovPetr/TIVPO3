
import './App.css';
import {useState} from "react";
function App() {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(1);
    const clicker = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
    }
  return (
    <div className="App">
        <h1>Конвертер величин</h1>
        <input type={"text"} placeholder={"Введите количество"} id={"inputValue"}/>
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
                <button onSubmit={(e)=>{
                }}>Выбрать</button>
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
                    <input type="radio" id="Километр" name="value" value="Километр" onChange={(e)=>{
                        setValue2(1 / 100000 );
                    }}/>
                    <label htmlFor="Километр">Километр</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="value" value="Аршин" onChange={(e)=>{
                        setValue2( 0.014061);
                    }}/>
                    <label htmlFor="louie">Аршин</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Вершина" onChange={(e)=>{
                        setValue2( 0.224972);
                    }}/>
                    <label htmlFor="louie">Вершок</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Верста" onChange={(e)=>{
                        setValue2(0.0000094);
                    }}/>
                    <label htmlFor="louie">Верста</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Миля" onChange={(e)=>{
                        setValue2( 0.0000062);
                    }}/>
                    <label htmlFor="louie">Миля</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Фут" onChange={(e)=>{
                        setValue2( 0.032808);
                    }}/>
                    <label htmlFor="louie">Фут</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="value" value="Дюйм" onChange={(e)=>{
                        setValue2( 0.3937);
                    }}/>
                    <label htmlFor="louie">Дюйм</label>
                </div>
                <button onSubmit={(e)=>{
                    console.log(2)
                }}>Выбрать</button>
            </form>

        </div>
        <h1>{value2}</h1>
    </div>
  );
}

export default App;
