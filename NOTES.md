Что одинаково
Критерий / Способ                              Функция-конструктор                                 Класс
Выделение памяти                                Через оператор new                         Через оператор new
Связывание прототипа                      Записывает методы в User.prototype            Записывает методы в User.prototype
Контекст this                             Ссылается на создаваемый объект               Ссылается на создаваемый объект
Тип данных под капотом                Является функцией (typeof User === 'function')  Является функцией (typeof User === 'function')

Что различается
Критерий / Способ                              Функция-конструктор                                 Класс
Синтаксис объявления             function User(name) { this.name = name; }    class User { constructor(name) { this.name = name; } }
Добавление методов              Вручную: User.prototype.sayHi = function(){}                Внутри тела класса: sayHi() {}
Вызов без new                   Ошибки нет (вернет undefined или сломает this)       Вызовет ошибку: TypeError: Class constructor...
Наследование                 Сложное, через Object.create и замену constructor         Простое, через ключевые слова extends и super