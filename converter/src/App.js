
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Конвертер величин</h1>
        <div className={"translators"}>
            <fieldset>
                <legend>Выберите базовую величину:</legend>

                <div>
                    <input type="radio" id="Сантиметр" name="value" value="Сантиметр"/>
                    <label htmlFor="huey">Сантиметр</label>
                </div>

                <div>
                    <input type="radio" id="Километр" name="value" value="Километр"/>
                    <label htmlFor="Километр">Километр</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Аршин</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Вершина</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Верста</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Миля</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Фут</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Дюйм</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Выберите искомую величину:</legend>

                <div>
                    <input type="radio" id="huey" name="drone" value="huey"/>
                    <label htmlFor="huey">Сантиметр</label>
                </div>

                <div>
                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                    <label htmlFor="dewey">Километр</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Аршин</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Вершина</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Верста</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Миля</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Фут</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Дюйм</label>
                </div>
            </fieldset>

        </div>

    </div>
  );
}

export default App;
