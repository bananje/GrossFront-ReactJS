export const header = [
    {
        path: 'main',
        name: 'Главная'
    },
    {
        path: 'service',
        name: 'Услуги'
    },
    {
        path: 'about',
        name: 'О нас'
    },
    {
        path: 'blog',
        name: 'Блог'
    },
]
export const servicesList = [
    {
        title: 'Бухглатерские услуги для ИП и ООО',
        img: require('../img/marks/analytics.png'),
        bg: ''
    },
    {
        title: 'Бухгалтерские услуги для физических лиц',
        img: require('../img/marks/document.png'),
        bg: ''
    },
    {
        title: 'Бухгалтерский учёт и аудит',
        img: require('../img/marks/mail.png'),
        bg: ''
    },
    {
        title: 'Ведение учредительных документов',
        img: require('../img/marks/report.png'),
        bg: ''
    },
    {
        title: 'Регистрация/Ликвидация ООО и ИП',
        img: require('../img/marks/audit.png'),
        bg: ''
    },
    {
        title: 'Получить консультацию бесплатно',
        img: require('../img/marks/question.png'),
        bg: 'lightblue'
    },
]
export const rates = [
    {
        name: 'Отчётность',
        price: 'от 550р',
        serviceList: [
            'формирование отчетности через систему ТКС', 'составление и сдача налоговых деклараций',
            'представление в ИФНС, СФР по доверенности писем', 'расчёт отчетности по данным ИФНС, СФР',
            'представление интересов вашего бизнеса в учреждениях'
        ]
    },
    {
        name: 'Консультант',
        price: 'от 1090р',
        serviceList: [
            'вопросы бухгалтерского и налового учёта','помощь с выбором системы налогообложения',
            'вопросы оптимизации налогооблажения вашего бизнеса', 'вопросы кадрового учёта и делопроизводства',
            'помощь с подбором персонала'
        ]
    },
    {
        name: 'Комлексный',
        price: 'от 3000р',
        serviceList: [
            'формирование и отправка платёжных поручений','составление сводных бухгалетрских регистров',
            'систематизация первичных учётных документов', 'составление отчетности для налоговых органов',
            'организация и введение кадрового учёта'
        ]
    },
]
export const pathners = [
    <img src={require('../img/parthners/logo-bank-otkrytie.png')} alt=""/>,
    <img src={require('../img/parthners/logo-sbp.jpg')} className="item-img"/>,
    <img src={require('../img/parthners/logo-rnkb.png')} className="item-img"/>,
    <img src={require('../img/parthners/logo-kuban-kredit.png')} className="item-img"/>,
    <img src={require('../img/parthners/logo-vtb.png')} className="item-img"/>,
    <img src={require('../img/parthners/sber.png')} className="item-img"/>,
    <img src={require('../img/parthners/logo-tinkoff-bank.png')} className="item-img"/>,
    <img src={require('../img/parthners/logo-uralsib.jpg')} className="item-img"/>,
    <img src={require('../img/parthners/logo-gazprombank.jpg')} className="item-img"/>,
    <img src={require('../img/parthners/logo-halva.png')} className="item-img"/>,
    <img src={require('../img/parthners/logo-rosselhozbank.png')} className="item-img"/>
]
export const fakeNews = [
    {
        img: require('../img/news/nalog4-1-860x680.jpg'),
        date: '10.05.2023',
        head: 'Бизнес',
        content: 'Три выгодных для компании изменения в работе с иностранцами'
    },
    {
        img: require('../img/news/stk309142rkn_5-1-2400x2000.jpg'),
        date: '12.05.2023',
        head: 'Бухгалтерия',
        content: 'Изменения ЕНВД В 2022 году: кассы, розничная торговля, отмена ЕНВД'
    },
    {
        img: require('../img/news/Depositphotos_31785657_l-2015-1-2400x2000.jpg'),
        date: '13.05.2023',
        head: 'Юриспруденция',
        content: 'За одно требование налоговики оштрафуют дважды'
    },
    {
        img: require('../img/news/59541335-WaveBreakMediaMicro-job-interview-positive-handshake-1-2400x2000.jpg'),
        date: '14.05.2023',
        head: 'Финансы',
        content: 'Не платите налог за имущество первой и второй групп'
    },
    {
        img: require('../img/news/bigstock-Notary-public-signing-document-150042050-1-860x680.jpg'),
        date: '15.05.2023',
        head: 'Финансы',
        content: 'Как нанять сотрудника, если для должности есть ограничения'
    },
    {
        img: require('../img/news/newsbel.by-28.10.2016-BmK3BX4Dq2aAoX8LhoO9TmbNMbrsGXti-1-860x680.jpg'),
        date: '16.05.2023',
        head: 'Финансы',
        content: 'Компании взыскали с экспедиторов ущерб за груз'
    },
    {
        img: require('../img/news/postradavshie_avto1-1-2400x2000.jpg'),
        date: '17.05.2023',
        head: 'Финансы',
        content: 'Как защититься от необоснованных претензий ФСС'
    },
    {
        img: require('../img/news/59541335-WaveBreakMediaMicro-job-interview-positive-handshake-1-2400x2000.jpg'),
        date: '18.05.2023',
        head: 'Маркетинг',
        content: 'Как подтвердить расходы по электронному чеку'
    },

]
export const fakereports = [
    {
        name: "Иванова Елена Петровна",
        title: "Владелец холдинга ИнтерIT",
        report: "Недавно обратился в компанию \"ГроссБухгалтерия\".\n" +
            "                        Сервис на высшем уровне, быстро и профессионально проконсультировали.\n" +
            "                        Рекомендую!",
        img: require('../img/Reports/otz1.jpg')
    },
    {
        name: "Лукаш Ольга Олеговна",
        title: "Владелеца ресторна 'С Дымком'",
        report: "Совершенно качественный сервис \"ГроссБухгалтерия\".\n" +
            "                        Быстрая поддержка, компитентность сотрудников на высшем уровне\n" +
            "                        Рекомендую!",
        img: require('../img/Reports/otz_2.jpg')
    },
    {
        name: "Зайцева Марина Сергеевна",
        title: "Исполнительный директор ООО 'Алтай'",
        report: "Обслуживаюсь уже длительное время \"ГроссБухгалтерия\".\n" +
            "                        Сервисом организации дововлен, не раз выручали в делах с налоговой\n" +
            "                        Рекомендую!",
        img: require('../img/Reports/otz_3.jpg')
    },
    {
        name: "Мольпинян Ирина Яновна",
        title: "Индивидуальный предприниматель",
        report: "Очень выручили в сдаче отчетности \"ГроссБухгалтерия\".\n" +
            "                        Сотрудник быстро соорентировал по нужным документам, отчетность была сдана во время\n" +
            "                        Рекомендую!",
        img: require('../img/Reports/otz_4.jpg')
    }
]
export const advantages = [
    {
        img: require('../img/marks/adv1.png'),
        text: 'Интеграцию со всеми популярными банками',
        number: require('../img/marks/01.png')
    },
    {
        img: require('../img/marks/adv2.png'),
        text: 'Демократичные цены на обслуживание',
        number: require('../img/marks/02.png')
    },
    {
        img: require('../img/marks/adv3.png'),
        text: 'Решение нестандартных и сложных задач бизнеса',
        number: require('../img/marks/03.png')
    },
]
export const aboutBlock = [
    {
        text: 'Свой бизнес нам доверили уже более 1000 организаций',
        img: require('../img/marks/1.png')
    },
    {
        text: 'Безостановочно ведём свою деятельность с 2004 года',
        img: require('../img/marks/2.png')
    },
    {
        text: 'Оперативно решаем сложные задачи вашего бизнеса',
        img: require('../img/marks/3.png')
    },
    {
        text: 'Интеграция со всеми популярными банками РФ',
        img: require('../img/marks/4.png')
    },
    {
        text: 'Индивидуальный подход к каждому клиенту',
        img: require('../img/marks/5.png')
    },
]
export const buhPage = [
    {
        title: 'Бухгалтерские услуги',
        description: 'Бухгалтерские услуги - это комплекс услуг по непрерывному ведению бухгалтерского учета,\n' +
            '                        составлению и своевременной сдачи всех необходимых форм налоговой и бухгалтерской отчетности в строгом соответствии с нормами законодательства.\n' +
            '                        Можно сказать, что бухгалтерские услуги, в их житейском понимании, необходимы абсолютно всем субъектам предпринимательской деятельности, в том числе и временно неработающим.\n' +
            '                        "ГроссБухгалтерия" предлагает клиентам широкопрофильное профессиональное обслуживание в сфере финансового, юридического и налогового сопровождения,\n' +
            '                        используя современное программное обеспечение.'
    }
]
export const urPage = [
    {
        title: 'Юридические услуги',
        description: 'Бухгалтерские услуги - это комплекс услуг по непрерывному ведению бухгалтерского учета,\n' +
            '                        составлению и своевременной сдачи всех необходимых форм налоговой и бухгалтерской отчетности в строгом соответствии с нормами законодательства.\n' +
            '                        Можно сказать, что бухгалтерские услуги, в их житейском понимании, необходимы абсолютно всем субъектам предпринимательской деятельности, в том числе и временно неработающим.\n' +
            '                        "ГроссБухгалтерия" предлагает клиентам широкопрофильное профессиональное обслуживание в сфере финансового, юридического и налогового сопровождения,\n' +
            '                        используя современное программное обеспечение.'
    }
]