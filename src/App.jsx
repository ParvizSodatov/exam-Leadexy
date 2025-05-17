import "./App.css";
import logo from "./assets/logo.png";
import dokhod from "./assets/dokhod.png";
import robot from "./assets/robot.png";
import robot2 from "./assets/robot2.png";
import robot3 from "./assets/robot3.png";
import sekunja from "./assets/sekunja.png";
import ks1 from "./assets/ks1.png";
import ks2 from "./assets/ks2.png";
import f1 from "./assets/f1.png";
import f2 from "./assets/f2.png";
import f3 from "./assets/f3.png";
import f4 from "./assets/f4.png";
import q1 from "./assets/q1.png";
import q2 from "./assets/q2.png";
import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.png";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";

import Frame47 from "./assets/Frame47.png";
import vector from './assets/vector.png'; 
import vector2 from "./assets/vector2.png";
import { ButtonLogin } from "./components/buttons/button";
import { Article1 } from "./components/buttons/article1/article1";
import { Article2 } from "./components/articles2/articles2";
import { Article3 } from "./components/article3/artickle3";
import { Article4 } from "./components/article4/article4";
import { Article5 } from "./components/article5/article5";
import { Conteiner } from "./components/conteiner/conteiner";
export default function App() {
  return (
    <>
      <nav>
        <div className="logoAndList">
          <img src={logo} alt="" />
          <ul>
            <li className="none">Як це працює</li>
            <li>Переваги</li>
            <li className="none">Пропозиції</li>
            <li className="none">Можливості</li>
          </ul>
        </div>
        <div className="navButtons">
          <button className="butVkhid">Вхід</button>
          <ButtonLogin></ButtonLogin>
        </div>
      </nav>
      <section className="section_1">
        <img className="vector" src={vector} alt="" />
        <aside className="aside_1">
          <h1>Голосовий робот для дзвінків від 1,7 ₴ за хвилину розмови</h1>
          <p>
            У декілька разів дешевше за оператора і може обдзвонити 1000
            клієнтів за пару хвилин
          </p>
          <button className="Спробувати">Спробувати</button>
        </aside>
        <aside className="aside_2">
          {/* <img className='sekunja' src={sekunja} alt="" /> */}
          <img className="robot" src={robot} alt="" />
          <img className="dokhod" src={dokhod} alt="" />
          <img className="ks1" src={ks1} alt="" />
          <img className="ks2" src={ks2} alt="" />
        </aside>
      </section>
      <section className="section_2">
        <Article1>
          <img src={f1} alt="" />
          <h1>Холодні продажі</h1>

          <p>
            Голосовий робот рекламує послугу або товар за допомогою телефонних
            переговорів{" "}
          </p>
        </Article1>
        <Article1>
          <img src={f2} alt="" />
          <h1>Опитування</h1>

          <p>
            Відстежуйте рівень задоволеності клієнтів продукцією без залучення
            операторів колл-центру
          </p>
        </Article1>
        <Article1>
          <img src={f3} alt="" />
          <h1>Прийом даних</h1>

          <p>
            Голосовий робот рекламує послугу або товар за допомогою телефонних
            переговорів{" "}
          </p>
        </Article1>
        <Article1>
          <img src={f2} alt="" />
          <h1>Сповіщення</h1>

          <p>
            Голосовий робот рекламує послугу або товар за допомогою телефонних
            переговорів{" "}
          </p>
        </Article1>
      </section>

      <section className="section_3">
        <aside>
          <h1>Дешевше, ніж оператор в кілька разів </h1>
          <p>
            Веде спілкування по заданому скрипту: може завершити розмову,
            з’єднати з менеджером або розсилати прості смс
          </p>
        </aside>

        <img className="robot2" src={robot2} alt="" />
      </section>
      <section className="section_4">
     

     <Article2>
       
          <h1 className="h1Article">
            Обдзвонює базу номерів або приймає дзвінки
          </h1>
          <img   src={q1} alt="" />
     </Article2>
     <Article2>
          <h1 className="h1Article">
  Штучний інтелект розпізнає мову і записує всі відповіді
          </h1>
          <img className="vector2" src={vector2} alt="" />
     </Article2>
     <Article2>
          <h1 className="h1Article">
           Реагує на слова
за заданим алгоритмом:
          </h1>
          <img src={q2} alt="" />
     </Article2>
      </section>
      <section className="section_5">
        <aside>
<h1>Перші 10 дзвінків - за наш рахунок</h1>
<p>Даруємо безкоштовні дзвінки після реєстрації.
Спробуйте робота, не витрачаючи ні копійки</p>
        </aside>
<p className="spp">Спробувати </p>
      </section>

     <section className="section_6">
      <Article3>
<img src={g1} alt="" />
<h1>від 2 ₴</h1>
<p>за хвилину розмови.
Одноразовий платіж від 0 ₴. </p>
      </Article3>

          <Article3>
<img src={g2} alt="" />
<h1>від 2 ₴</h1>
<p>за хвилину розмови.
Одноразовий платіж від 0 ₴. </p>
      </Article3>
          <Article3>
<img src={g3} alt="" />
<h1>від 2 ₴</h1>
<p>за хвилину розмови.
Одноразовий платіж від 0 ₴. </p>
      </Article3>
     </section>

     <img className="Frame47" src={Frame47} alt="" />
<section className="section_7">

  <aside>
    <h1>Здійснюйте 300 000
дзвінків за годину</h1>
<p>Швидкість можна налаштовувати індивідуально під себе.</p>
<button>Запустити голосову розсилку</button>
  </aside>

  <img className="robot3" src={robot3} alt="" />

</section>
<section className="section_8">
<h1 className="integ">Інтеграція з відкритого API</h1>
<div className="divarticle">
<Article4>
<img src={c1} alt="" />
<p>Зателефонує клієнту після потрапляння його картки в CRM на певному етапі угоди.</p>
</Article4>
<Article4>
<img src={c2} alt="" />
<p>Зателефонує клієнту після потрапляння його картки в CRM на певному етапі угоди.</p>
</Article4>
<Article4>
<img src={c3} alt="" />
<p>Зателефонує клієнту після потрапляння його картки в CRM на певному етапі угоди.</p>
</Article4>
<Article4>
<img src={c4} alt="" />
<p>Зателефонує клієнту після потрапляння його картки в CRM на певному етапі угоди.</p>
</Article4>

</div>
</section>
<section className="section_9">
  <h1>Відгуки</h1>
<div className="div_9">
<Article5>
  <p>⭐⭐⭐⭐⭐</p>
  <h2>Я у захоплені!</h2>
  <p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>
</Article5>
<Article5>
  <p>⭐⭐⭐⭐⭐</p>
  <h2>Я у захоплені!</h2>
  <p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>
</Article5>
<Article5>
  <p>⭐⭐⭐⭐⭐</p>
  <h2>Я у захоплені!</h2>
  <p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>
</Article5>
</div>
</section>
<section className="section_9">
<h1>Відповіді на популярні за питання</h1>

</section>
<section className="section10">
<Conteiner>
<h1>Скільки коштує дзвінок за допомогою Zvonobot?</h1>
<p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>

</Conteiner>
<Conteiner>
<h1>З якою швидкістю Zvonobot обдзвонює базу?</h1>
<p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>

</Conteiner>
<Conteiner>
<h1>Який відсоток клієнтів здогадується, що дзвонить робот?</h1>
<p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>

</Conteiner>
<Conteiner>
<h1>Скільки часу займає налаштування розсилки і запуск?</h1>
<p>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>

</Conteiner>

</section>
<footer>
  <div className="foot-1">
    <img src={logo} alt="" />
    <ul>
      <li>Як це працює</li>
      <li>Переваги</li>
      <li>Пропозиції</li>
      <li>Можливості</li>
    </ul>
  </div>
  <button>
    Запустити голосову розсилку
  </button>
</footer>

    </>
  );
}
