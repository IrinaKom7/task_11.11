const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Степан",
            "id_6": "Владимир",
            "id_7": "Вадим",
            "id_8": "Данил",
            "id_9": "Егор",
            "id_10": "Владислав"
        }
    }`,

    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Надежда",
            "id_2": "Мария",
            "id_3": "Анна",
            "id_4": "Анастасия",
            "id_5": "Наталья",
            "id_6": "Юлия",
            "id_7": "Виктория",
            "id_8": "Любовь",
            "id_9": "Елена",
            "id_10": "Вера"
        }
    }`,

    WorkMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Инженер",
            "id_2": "Юрист",
            "id_3": "Слесарь",
            "id_4": "Шахтер",
            "id_5": "Военнослужащий",
            "id_6": "Повар",
            "id_7": "Моряк",
            "id_8": "Менеджер",
            "id_9": "Летчик",
            "id_10": "Столяр"
        }
    }`,

    WorkFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Секретарь",
            "id_2": "Учитель",
            "id_3": "Повар",
            "id_4": "Юрист",
            "id_5": "Менеджер",
            "id_6": "Врач",
            "id_7": "Воспитатель",
            "id_8": "Художник",
            "id_9": "Администратор",
            "id_10": "Диспетчер"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function () {
        return (this.randomIntNumber() === 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);

        } else {

            return this.randomValue(this.firstNameFeMaleJson) ;
        }

    },


    randomSurname: function () {

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);

        } else {

            return this.randomValue(this.surnameJson) + 'а';
        }


    },

    randomMiddleName: function () {

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson) + 'ович';

        } else {

            return this.randomValue(this.firstNameMaleJson) + 'овна';
        }

    },

    randomWork: function () {

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.WorkMaleJson);

        } else {

            return this.randomValue(this.WorkFeMaleJson) ;
        }

    },

    
    randomBirthDate: function () {
        let year = this.randomIntNumber(1990, 1970);
        let month = this.randomIntNumber(12, 1);
        let date;
        let monthstr = '';
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                date = this.randomIntNumber(31, 1);
                break;
            case 2:
                date = this.randomIntNumber(28, 1);
                break;
            default:
                date = this.randomIntNumber(30, 1);
        }

        switch(month){
            case 1: 
                monthstr = 'января';
                break;
            case 2: 
                monthstr = 'февраля';
                break;
            case 3: 
                monthstr = 'марта';
                break;
            case 4: 
                monthstr = 'апреля';
                break;
            case 5: 
                monthstr = 'мая';
                break;
            case 6: 
                monthstr = 'июня';
                break;
            case 7: 
                monthstr = 'июля';
                break;
            case 8: 
                monthstr = 'августа';
                break;
            case 9: 
                monthstr = 'сентября';
                break;
            case 10: 
                monthstr = 'октября';
                break;
            case 11: 
                monthstr = 'ноября';
                break;
            case 12: 
                monthstr = 'декабря';
                break;
        }
        return '' + date + ' ' + monthstr + ' ' + year;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.middleName = this.randomMiddleName();
        this.person.surname = this.randomSurname();
        this.person.year_of_birth = this.randomBirthDate();
        this.person.work = this.randomWork();
        return this.person;
    }
};