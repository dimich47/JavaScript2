class Validator {
    // приватные свойства (свойства недоступны все класса)
    // #prop_name = "Prop value";
    // свойства
    _rules = null;
    _messages = null;
    _successHandler = null;
    _errorHandler = null;
    constructor(form){
        this._form = form;
        this._form.addEventListener("submit", this.validate.bind(this));
    }

    get form(){
        return this._form;
    }
    set form(form){
        this._form = form;
    }
    get rules(){
        return this._rules;
    }
    set rules(value){
        this._rules = value;
    }
    get messages(){
        return this._messages;
    }
    set messages(value){
        this._messages = value;
    }
    get successHandler(){
        return this._successHandler;
    }
    set successHandler(func) {
        this._successHandler = func;
    }
    get errorHandler(){
        return this._errorHandler;
    }
    set errorHandler(func) {
        this._errorHandler = func;
    }


    init(settings){
        rules = settings.rules;
        messages = settings.messages;
        successHandler = settings.successHandler;
        errorHandler = settings.errorHandler;
    }

    minLength(elemValue, ruleValue){
        console.log("метод minLength: ",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        return elemValue.length >= ruleValue;
    }
    maxLength(elemValue, ruleValue) {
        console.log("метод maxLength:",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        return elemValue.length <= ruleValue;
    }
    required(elemValue){
        console.log("метод required:",
            "пользователь ввел: " + elemValue);
        return elemValue.length > 0;
    }
    reg_match(elemValue, ruleValue) {
        console.log("метод reg_match:",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        return ruleValue.test(elemValue);
    }

    validate(event){
        event.preventDefault();

        let elements = form.elements;
        let errs = [];
        for (let elem of elements){
            elem.removeAttribute("style");
            //   console.log(elem.dataset.validate);
            //         // login
            //         // password
            //         // name
            //         // comment
            //         // undefined
            if (elem.dataset.validate){
                let rulesValues = rules[elem.dataset.validate];
                //  console.log(rulesValues);
                //             // {
                //             //     minLength: 4,
                //             //     maxLength: 18
                //             // } и тд
                for (let rule in rulesValues){
                    //     console.log(rule);
                    //                 // minLength
                    //                 // maxLength и тд
                    if(!this[rule](elem.value, rulesValues[rule])){
                        //console.log(this[rule])
                        //                     // this["minLength"](val, rule);
                        //                     // this.minLength(val, rule);
                        //                     // TODO: вместо errorHandler и return
                        //                     //  выводить сообщение об ошибке
                        //                     //  и обновлять счетчик ошибок (счетчик может быть переменной,
                        //                     //  массивом, объектов)
                        //                    errorHandler(form);
                        //                     return;
                        console.log("Ошибка в поле "+elem.dataset.validate);
                        for(let mess in messages[elem.dataset.validate])                     // поиск сообщения у правила
                        {
                            if (mess === rule)                   // если у правила есть сообщение
                            {
                                errs.push("Поле '" + elem.dataset.validate + "' " + messages[elem.dataset.validate][mess]);                 // сохранить сообщение для ошибки
                                elem.setAttribute("style","background: red");

                            }
                        }
                    }

                }
            }
        }
        //     // TODO: проверять счетчик ошибок,
        //     //  если ошибок, нет вызывать successHandler(form);
        //     //  если есть errorHandler(form);
        //     successHandler(form);
        if(errs.length!==0)
        {
            errorHandler(errs);

        }
        else{
            successHandler(form);
        }
    }
}

let form = document.forms.validate;

let validator = new Validator(form);

let rules = {
    login: {
        minLength: 4,
        maxLength: 18
    },
    password: {
        minLength: 8
    },
    name: {
        required: true
    },
    comment: {
        reg_match: /comment/

    }
};

let messages = {
    login: {
        maxLength: "Максимум 18 символов",
        minLength: "Минимум 4 символа"
    },

    password: {
        minLength: "Минимум 8 символов"
    },
    name: {
        required: "обязательно для заполнения"
    },
    comment: {
        reg_match: "должно содержать comment"

    }

};

let successHandler = (form) => {
    console.log("Действие " +
        "в случае успешного заполнения формы");
    p.innerText="Все поля заполнены верно";
    p.setAttribute("style","color: green");
};

let errorHandler = (errs) => {
    console.log("Действие" +
        " в случае ошибок в заполнении формы");
    console.log(errs);

    p.innerText=errs.join();
    p.setAttribute("style","color: red");
    form.append(p);

};

validator.init({
    rules: rules,
    messages: messages,
    successHandler: successHandler,
    errorHandler: errorHandler
});
let p = document.createElement("p");    //создание текстового поля  для отображения ошибок

