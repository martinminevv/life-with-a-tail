// Language Switcher - Handles Bulgarian/English translations for all pages
const translations = {
    bg: {
        // Logo & Navigation
        'logo': 'Life with a Tail',
        'nav-home': 'Начало',
        'nav-adoption': 'Осинови',
        'nav-volunteer': 'Доброволчество',
        'nav-contact': 'Контакти',
        
        // Home Page - Hero Section
        'hero-title': 'Life with a Tail',
        'hero-subtitle': 'Намери своя опашат приятел',
        'hero-desc': 'Всеки домашен любимец заслуважа любящ дом',
        'hero-btn': 'Научи повече',
        
        // Home Page - Pets Section
        'pets-title': 'Осинови си домашен любимец',
        'pets-intro': 'Присъедини се към нашия отдаден екип и помогни в намирането на дом за животни в нужда. Всеки домашен любимец заслужава любящ дом и грижа, а ти можеш да бъдеш този човек!',
        'pets-li-1': 'Намери верен и любящ приятел за цял живот',
        'pets-li-2': 'Подобри твоето психическо и физическо здраве',
        'pets-li-3': 'Кучетата винаги ще те посрещат с радост и обич',
        'pets-li-4': 'Котките помагат да намалиш стреса и тревожността',
        'pets-li-5': 'Получи безусловна любов и вярност',
        'pets-li-6': 'Участвай в спасяването на животни в нужда',
        'pets-btn': 'Осинови сега',
        
        // Home Page - Stats Section
        'stats-title': 'Нашето въздействие',
        'stats-1-label': 'Осиновени животни',
        'stats-2-label': 'Благотворителни кампании',
        'stats-3-label': 'Успешно осиновяване',
        'stats-4-label': 'Години на пазара',
        
        // Home Page - Volunteer Section
        'vol-title': 'Стани доброволец',
        'vol-desc': 'Присъедини се към нашия отдаден екип от доброволци и помогни на животно в нужда. Независимо дали можеш да отделиш няколко часа седмично или само от време на време през уикендите, твоята помощ е от значение.',
        'vol-li-1': 'Разходи куче',
        'vol-li-2': 'Помогни с храненето и грижата',
        'vol-li-3': 'Подпомагане на събития за осиновяване',
        'vol-li-4': 'Временно отглеждане на домашни любимци в твоя дом',
        'vol-btn': 'Повече информация',
        
        // Home Page - Testimonials
        'testimonials-title': 'Отзиви',
        'testimonial-text-1': '"Да осиновя животно в нужда беше най-доброто ми решение. Персоналът от "Life with a Tail" беше изключително любезен и професионален.',
        'testimonial-author-1': 'Иван Иванов',
        'testimonial-date-1': 'Осиновил през 2019',
        'testimonial-text-2': '"Животът ми нямаше да е същия без най-добрия ми опашат приятел! Благoдаря на "Life with a Tail" за тяхната отдаденoст и помощ през целия процес на осинoвяване."',
        'testimonial-author-2': 'Георги Петров',
        'testimonial-date-2': 'Осиновил през 2021',
        'testimonial-text-3': '"Процесът на осиновяване беше лесен и безпроблемен. Персоналът наистина се грижи за животните и им осигурява най-добрата грижа, която съм виждал в приют."',
        'testimonial-author-3': 'Васил Георгиев',
        'testimonial-date-3': 'Осиновил през 2024',
        
        // Home Page - Donation Section
        'donation-title': 'Подпомогни нашата мисия',
        'donation-desc': 'Твоите щедри дарения ни помагат да осигурим храна, медицинска помощ и подслон на животни в нужда. Всеки принос е от значение в спасяването на животи.',
        'donation-25': 'Осигурява храна за един домашен любимец за една седмица',
        'donation-100': 'Покрива ветеринарен преглед',
        'donation-250': 'Покрива разходите на един домашен любимец за един месец',
        'donation-btn': 'Дари',
        
        // Home Page - Contact Section
        'contact-title': 'Свържи се с нас',
        'contact-visit': 'Посети ни',
        'contact-address': '123 Adoption Street<br>Pet City, PC 12345',
        'contact-hours': 'Работно време',
        'contact-hours-text': 'Понеделник - Петък: 10:00 - 18:00<br>Събота: 09:00 - 17:00<br>Неделя: 11:00 - 16:00',
        'contact-info': 'Контакти',
        'contact-phone-text': 'Телефон: (555) 123-4567<br>Имейл: info@lifewithatail.com',
        'contact-form-name': 'Име',
        'contact-form-email': 'Имейл',
        'contact-form-message': 'Съобщение',
        'contact-form-submit': 'Изпрати съобщение',
        
        // Modal
        'modal-title': 'Заявка за осиновяване',
        'modal-text': 'Попълнете формуляра по-долу, за да започнете процеса на осиновяване на',
        'modal-name': 'Твоето име',
        'modal-email': 'Имейл адрес',
        'modal-phone': 'Телефонен номер',
        'modal-why': 'Защо искаш да осинови?',
        'modal-submit': 'Изпрати заявка',
        
        // Footer
        'footer-copy': '© 2026 зооприют "Life with a Tail"',
        'footer-desc': 'Намираме вашия най-добър приятел',
        
        // Adoption Page
        'adoption-title': 'Осинови своя спътник',
        'adoption-intro': 'Всяко животно в нашия приют чака да намери своя съвършен дом. Разгледайте нашите налични животни.',
        'available-pets': 'Налични животни за осиновяване',
        'adopt-btn': 'Осинови',
        'view-details': 'Преглед',
        
        // Volunteer Page
        'volunteer-intro': 'Присъедини се към нашия екип от отдадени доброволци',
        'volunteer-benefit': 'Преимущества на доброволчеството',
        'volunteer-contact': 'Интересуваш ли се? Свържи се с нас!',
        'volunteer-title': 'Станете доброволец',
        'volunteer-subtitle': 'Помогнете на животно в нужда',
        'volunteer-why-title': 'Защо да доброволствате при нас?',
        'volunteer-why-desc': 'Доброволчеството в "Life with a Tail" е преживяване, което ви позволява да направите щастливо някое животно. Независимо дали можете да отделите няколко часа седмично или само в уикендите, всеки вид помощ, която ни окажете, ни помага да осигурим по-добра грижа за нашите животни.',
        'vol-stat-volunteers': 'Доброволци',
        'vol-stat-campaigns': 'Успешни кампании',
        'vol-stat-years': 'Години доброволчество',
        'volunteer-opportunities-title': 'Възможности за доброволчество',
        'vol-dog-walker-title': 'Разходки с кучета',
        'vol-dog-walker-desc': 'Вземете нашите кучета на разходка и помогнете с това те да се социализират. Идеално за активни лица, които обичат природата.',
        'vol-dog-walker-time': 'Време: 2-4 часа/седмица',
        'vol-dog-walker-training': 'Обучение: Не е необходимо',
        'vol-dog-walker-exp': 'Опит: Не е необходим',
        'vol-cat-socializer-title': 'Социализация на котки',
        'vol-cat-socializer-desc': 'Прекарайте време, играйте и се грижете за нашите котета, за да им помогнете да станат по-социални с хората.',
        
        // Adoption Page
        'adoption-title': 'Осинови домашен любимец',
        'adoption-subtitle': 'Осигури дом на животно в нужда',
        'adoption-intro': 'Запознайте се с нашите прекрасни животни. Всяко от тях заслужава дом и е готово да изпълни вашия живот с любов и радост.',
        'available-pets': 'Налични за осиновяване',
        'adoption-process-title': 'Как да осиновим',
        'adoption-step-1-title': 'Разгледай',
        'adoption-step-1-desc': 'Разгледайте нашите налични домашни любимци. Всяко едно животно има профил с основна информация за него.',
        'adoption-step-2-title': 'Кандидатствай',
        'adoption-step-2-desc': 'Попълнете кандидатурата за осиновяване. След одобрение ще насрочим среща с избраният от вас домашен любимец.',
        'adoption-step-3-title': 'Срещни',
        'adoption-step-3-desc': 'Посетете нашия приют, за да срещнете новия си домашен любимец. Прекарайте време заедно, за да се опознаете.',
        'adoption-step-4-title': 'Осинови',
        'adoption-step-4-desc': 'След подписване на документите за осиновяване, можете да се приберете с вашия нов приятел.',
        
        // Adoption Requirements & FAQ
        'adoption-req-title': 'Изисквания за осиновяване',
        'adoption-req-1-title': 'Възрастово изискване',
        'adoption-req-1-desc': 'Осиновяващите трябва да са навършили най-малко 18 години.',
        'adoption-req-2-title': 'Домашна посещение',
        'adoption-req-2-desc': 'Извършваме домашна визита, за да гарантираме безопасна и подходяща среда за вашия нов домашен любимец.',
        'adoption-req-3-title': 'Одобрение на наемателя',
        'adoption-req-3-desc': 'Наемателите трябва да предоставят писмено разрешение от своя наемател, позволяващо домашни любимци на имота.',
        'adoption-req-4-title': 'Семейно съгласие',
        'adoption-req-4-desc': 'Всички членове на домакинството трябва да срещнат домашния любимец и да се съгласят с осиновяването, преди да се финализира.',
        'adoption-req-5-title': 'Такса за осиновяване',
        'adoption-req-5-desc': 'Таксите варират от €50-€200 и покриват ваксинации, кастрация/стерилизация и микрочипиране.',
        'adoption-req-6-title': 'Ангажимент във времето',
        'adoption-req-6-desc': 'Бъдете готови да осигурите правилна грижа, внимание и редовни ветеринарни прегледи.',
        
        'adoption-faq-title': 'Често задавани въпроси',
        'adoption-faq-1-q': 'Колко време отнема процесът на осиновяване?',
        'adoption-faq-1-a': 'Целият процес обикновено отнема 3-7 дни от подаване на заявката до одобрение.',
        'adoption-faq-2-q': 'Какво е включено в таксата за осиновяване?',
        'adoption-faq-2-a': 'Таксата включва ваксинации, кастрация/стерилизация и микрочипиране (зависи от избора на стопанина). В нея е включен и начален пакет с храна, играчки и информация за необходимостите на един домашен любимец.',
        'adoption-faq-3-q': 'Мога ли да осиновя, ако имам други домашни любимци?',
        'adoption-faq-3-a': 'Да! Насърчаваме запознаване с вашите домашни любимци, за да се опознаят.',
        'adoption-faq-4-q': 'Какво следва ако осиновяването не се получи?',
        'adoption-faq-4-a': 'Предлагаме 30-дневен период за адаптация. Ако има проблеми, се свържете с нас, за да ги разрешим, или ще помогнем с намирането на нов дом на животното, ако е необходимо.',
        
        'adoption-form-name': 'Вашето име',
        'adoption-form-email': 'Имейл адрес',
        'adoption-form-phone': 'Телефонен номер',
        'adoption-form-address': 'Адрес',
        'adoption-form-homeowner': 'Наемате ли или сте собственик на своя дом?',
        'adoption-form-select': 'Изберете...',
        'adoption-form-rent': 'Наемам',
        'adoption-form-own': 'Собственик',
        'adoption-footer-desc': 'Намираме вашия най-добър приятел',
        
        // Volunteer Page - Benefits
        'volunteer-benefits-title': 'Защо да станете доброволец при нас?',
        'vol-benefit-1-title': 'Направи разлика',
        'vol-benefit-1-desc': 'Твоето време подобрява качеството на живот в приюта. По-този начин животните получават повече внимание, обич и грижа докато намерят своя дом.',
        'vol-benefit-2-title': 'Научи нови умения',
        'vol-benefit-2-desc': 'Придобии опит в грижата за животни, обслужването на клиенти и развивай ценни професионални умения.',
        'vol-benefit-3-title': 'Срещни хора със сходни идеи',
        'vol-benefit-3-desc': 'Присъедини се към общност от любители на животни и създай трайни приятелства.',
        'vol-benefit-4-title': 'Гъвкав график',
        'vol-benefit-4-desc': 'Съобразяваме се с твоето време, за да ти предложим смени, които отговарят на твоя график.',
        'vol-benefit-5-title': 'Признание на доброволците',
        'vol-benefit-5-desc': 'Получи сертификати, признание за твоята отдаденост и достъп до събития за доброволци.',
        'vol-benefit-6-title': 'Позитивни емоции',
        'vol-benefit-6-desc': 'Усети щастието и удовлетворението, които получаваш, помагайки на животни в нужда.',
        
        // Volunteer Requirements & Application
        'volunteer-req-title': 'Изисквания за доброволец',
        'volunteer-gen-req-title': 'Изисквания за доброволец',
        'volunteer-req-1': 'Да си навършил поне 16 години',
        'volunteer-req-2': 'Да се ангажираш с минимум 3 месеца доброволчество',
        'volunteer-req-3': 'Да преминеш задължителния инструктаж',
        'volunteer-req-4': 'Да завършиш необходимото обучение за твоята избрана роля',
        'volunteer-req-5': 'Да преминеш проверка на фона (за определени позиции)',
        'volunteer-req-6': 'Да обичаш животните',
        'volunteer-expect-title': 'Какво да очакваш',
        'volunteer-expect-1': 'Инструктаж (1 час)',
        'volunteer-expect-2': 'Обучение за поцизията ти',
        'volunteer-expect-3': 'Наблюдение на опитни доброволци',
        'volunteer-expect-4': 'Продължаваща подкрепа от персонала',
        'volunteer-expect-5': 'Месечни срещи на доброволци',
        'volunteer-expect-6': 'Възможности за напредък',
        'volunteer-app-title': 'Кандидатствай за доброволец',
        'volunteer-app-intro': 'Готов ли си да помогнеш? Попълни формуляра по-долу и ще се свържем с теб за следващите стъпки.',
        'volunteer-form-fname': 'Първо име',
        'volunteer-form-lname': 'Фамилия',
        'volunteer-form-email': 'Имейл адрес',
        'volunteer-form-phone': 'Телефонен номер',
        'volunteer-form-age': 'Възраст',
        'volunteer-form-role': 'Коя доброволческа роля те интересува най-много?',
        'volunteer-form-select': 'Изберете роля...',
        'volunteer-form-role-1': 'Разходач на кучета',
        'volunteer-form-role-2': 'Социализатор на котки',
        'volunteer-form-role-3': 'Приемно семейство',
        'volunteer-form-role-4': 'Помощник на събитие',
        'volunteer-form-role-5': 'Административна поддержка',
        'volunteer-form-role-6': 'Фотограф',
        'volunteer-form-role-7': 'Други',
        'volunteer-form-hours': 'Колко часа седмично можеш да се ангажираш?',
        'volunteer-form-hours-select': 'Изберете часове...',
        'volunteer-form-hours-1': '1-2 часа',
        'volunteer-form-hours-2': '3-5 часа',
        'volunteer-form-hours-3': '6-10 часа',
        'volunteer-form-hours-4': '10+ часа',
        'volunteer-form-exp': 'Разкажи ни за своя опит с животни и защо искаш да бъдеш доброволец',
        'volunteer-form-submit': 'Изпрати заявка',
        'volunteer-footer-desc': 'Намираме вашия най-добър приятел',
        'vol-cat-socializer-time': 'Време: 2-3 часа/седмица',
        'vol-cat-socializer-training': 'Обучение: Основен инструктаж',
        'vol-cat-socializer-exp': 'Опит: Не е необходим',
        'vol-foster-title': 'Приемно семейство',
        'vol-foster-desc': 'Предоставете временни домове на животни в нужда. Отлично за тези, които не могат да се ангажират с осиновяване.',
        'vol-foster-time': 'Време: Гъвкава продължителност',
        'vol-foster-training': 'Обучение: Не е необходимо',
        'vol-foster-exp': 'Опит: Предпочитано',
        'vol-event-title': 'Помощник на събитие',
        'vol-event-desc': 'Помагайте при събития за осиновяване, събирания на средства и програми за достъп до общността през цялата година.',
        'vol-event-time': 'Време: Според събитията',
        'vol-event-training': 'Обучение: Инструктаж на място',
        'vol-event-exp': 'Опит: Не е необходим',
        'vol-admin-title': 'Административна поддръжка',
        'vol-admin-desc': 'Помогни с офис задачи, въвеждане на данни, отговаряне на телефонни обаждания, имейли и обикновени административни ангажименти.',
        'vol-admin-time': 'Време: 3-5 часа/седмица',
        'vol-admin-training': 'Обучение: Основен инструктаж',
        'vol-admin-exp': 'Опит: Компютърни умения',
        'vol-photo-title': 'Фотограф',
        'vol-photo-desc': 'Направи снимки на нашите животни за социални медии и профили за осиновяване, за да им помогнеш да намерят дом по-бързо.',
        'vol-photo-time': 'Време: Гъвкав график',
        'vol-photo-training': 'Обучение: Не е необходимо',
        'vol-photo-exp': 'Опит: Умения по фотография',
        
        // Contact Page
        'contact-page-title': 'Свържи се с нас',
        'contact-page-subtitle': 'Независимо дали имаш въпроси относно осиновяване, доброволчество или дарение. Нашият екип е готов да ти помогне.',
        'contact-hero-title': 'Свържи се с нас',
        'contact-hero-desc': 'Независимо дали имаш въпроси относно осиновяването, доброволчество или просто искаш да приветстваш, щеди се чуем от теб. Нашият екип е готов да ти помогне.',
        'contact-info-title': 'Контактна информация',
        'contact-visit-title': 'Посети ни',
        'contact-address': 'бул. Демокрация 18<br>гр. Враца<br>България',
        'contact-call-title': 'Телефонен номер',
        'contact-phones': 'Основен: +359111222333<br>Осиновяване: +359111222333<br>Доброволчество: +359111222333',
        'contact-email-title': 'Имейл адрес',
        'contact-emails': 'Основен: info@lifewithatail.com<br>Осиновяване: adopt@lifewithatail.com<br>Доброволчество: volunteer@lifewithatail.com',
        'contact-hours-title': 'Работно време',
        'contact-hours-text': '<strong>Понеделник - Петък:</strong> 10:00 - 18:00<br><strong>Събота:</strong> 9:00 - 17:00<br><strong>Неделя:</strong> 11:00 - 16:00<br>',
        'contact-follow-title': 'Следи ни',
        'contact-facebook': 'Facebook',
        'contact-instagram': 'Instagram',
        'contact-twitter': 'Twitter',
        'contact-form-title': 'Изпрати ни съобщение',
        'contact-form-name': 'Твоето име',
        'contact-form-email': 'Имейл адрес',
        'contact-form-phone': 'Телефонен номер (незадължително)',
        'contact-form-subject': 'Тема',
        'contact-form-subject-select': 'Изберете тема...',
        'contact-form-subject-1': 'Относно осиновяване',
        'contact-form-subject-2': 'Относно доброволчество',
        'contact-form-subject-3': 'Относно дарение',
        'contact-form-subject-4': 'Общ въпрос',
        'contact-form-subject-5': 'Обратна връзка',
        'contact-form-subject-6': 'Други',
        'contact-form-message': 'Съобщение',
        'contact-form-submit': 'Изпрати съобщение',
        'contact-map-title': 'Намери ни на картата',
        'contact-map-text': 'Картата ще се покаже тук',
        'contact-map-note': 'Добавете твоя код за вграждане на Google Maps тук',
        'contact-faq-title': 'Често задавани въпроси',
        'contact-faq-1-q': 'Как да осиновя?',
        'contact-faq-1-a': 'Осиновяването може да се осъществи, както и онлайн, така и на място. Винаги може да дойдете в работно време и да се запознаете с нашите животни.',
        'contact-faq-2-q': 'Мога ли да доведа своя домашен любимец, за да се срещне новия си приятел?',
        'contact-faq-2-a': 'Да! Насърчаваме срещи с твои домашни любимци. Моля, звънни предварително, за да организираме подходящо време за среща.',
        'contact-faq-3-q': 'Колко бързо ще получа отговор?',
        'contact-faq-3-a': 'Обикновено отговаряме на имейли и телефонни съобщения в рамките на 1-2 работни дни.',
        'contact-faq-4-q': 'Мога ли да даря?',
        'contact-faq-4-a': 'Абсолютно! Приемаме парични дарения, храна и играчки за домашни любимци, както и твоето време чрез доброволчество.',
        'contact-emergency-title': 'Спешен контакт',
        'contact-emergency-desc': 'Ако си намерил/а изгубено или ранено животно, моля, свържи се с нас на спешен телефон:',
        'contact-emergency-avail': 'Достъпно 24/7 за спешни случаи с животни',
        
        // Signup Page
        'signup-title': 'Създай акаунт',
        'signup-subtitle': 'Присъедини се към нас',
        'signup-name': 'Име',
        'signup-email': 'Имейл',
        'signup-password': 'Парола',
        'signup-submit': 'Регистрирай се',
        'signup-have-account': 'Вече имаш акаунт?',
        'signup-login-link': 'Влез',

        // Login Page
        'login-welcome': 'Добре дошъл/а отново',
        'login-subtitle': 'Влез в твоя акаунт',
        'login-email': 'Имейл',
        'login-password': 'Парола',
        'login-remember': 'Запомни ме',
        'login-submit': 'Влез',
        'login-no-account': 'Нямаш акаунт?',
        'login-signup-link': 'Регистрирай се',
        
        // Admin Page
        'admin-title': 'Управление на животни',
        'admin-form-title': 'Добави / Редактирай животно',
        'admin-form-name': 'Име *',
        'admin-form-breed': 'Порода *',
        'admin-form-age': 'Дата на раждане *',
        'admin-form-gender': 'Пол *',
        'admin-form-gender-select': 'Изберете пол',
        'admin-form-gender-male': 'Мъжко',
        'admin-form-gender-female': 'Женско',
        'admin-form-image': 'Качи снимка',
        'admin-form-desc': 'Описание *',
        'admin-form-save': 'Запази',
        'admin-form-cancel': 'Отмени',
        'admin-list-title': 'Съществуващи животни',

        // Pet card labels
        'pet-label-name': 'Име',
        'pet-label-age': 'Дата на раждане',
        'pet-label-breed': 'Порода',
        'pet-label-sex': 'Пол',
        'pet-label-species': 'Вид',
        'pet-adopt-btn': 'Осинови ме',

        // Filter buttons
        'filter-all': 'Всички',
        'filter-dogs': 'Кучета',
        'filter-cats': 'Котки',

        // Admin species
        'admin-form-species': 'Вид *',
        'admin-form-species-select': 'Изберете вид',
        'admin-form-species-dog': 'Куче',
        'admin-form-species-cat': 'Котка',

        // Profile Page
        'profile-title': 'Моят Профил',
        'profile-member-since': 'Член от',
        'profile-tab-info': 'Моята информация',
        'profile-tab-favorites': 'Любими',
        'profile-tab-applications': 'Заявки',
        'profile-info-title': 'Моята информация',
        'profile-form-name': 'Пълно Име',
        'profile-form-email': 'Имейл Адрес',
        'profile-form-phone': 'Телефонен Номер',
        'profile-form-address': 'Адрес',
        'profile-form-save': 'Запази промените',
        'profile-no-favorites': 'Все още нямате любими животни. Разгледайте нашите животни за осиновяване!',
        'profile-no-applications': 'Все още нямате заявки за осиновяване.',
        'profile-browse-link': 'Разгледай Животни',
        'profile-app-status': 'Статус',
        'profile-app-message': 'Съобщение',
        'profile-app-date': 'Дата',
        'profile-app-status-pending': 'В изчакване',
        'profile-app-status-approved': 'Одобрена',
        'profile-app-status-rejected': 'Отхвърлена',

        // Admin Applications
        'admin-apps-title': 'Управление на заявки за осиновяване',
        'admin-apps-status-pending': 'В изчакване',
        'admin-apps-status-approved': 'Одобрена',
        'admin-apps-status-rejected': 'Отхвърлена',
        'admin-apps-update': 'Обнови',
        'admin-messages-title': 'Съобщения от контактната форма',
        'admin-messages-empty': 'Няма съобщения от контактната форма.',
    },
    en: {
        // Logo & Navigation
        'logo': 'Life with a Tail',
        'nav-home': 'Home',
        'nav-adoption': 'Adoption',
        'nav-volunteer': 'Volunteer',
        'nav-contact': 'Contact',
        
        // Home Page - Hero Section
        'hero-title': 'Life with a Tail',
        'hero-subtitle': 'Find Your Perfect Companion',
        'hero-desc': 'Every pet deserves a loving home',
        'hero-btn': 'Learn More',
        
        // Home Page - Pets Section
        'pets-title': 'Adopt Your Perfect Pet',
        'pets-intro': 'Join our dedicated team and help animals find their forever home. Every pet deserves a loving home and care, and you can be that person!',
        'pets-li-1': 'Get a loyal and loving lifelong companion',
        'pets-li-2': 'Improve your mental and physical health',
        'pets-li-3': 'Dogs help reduce stress and anxiety',
        'pets-li-4': 'Participate in saving animal lives',
        'pets-li-5': 'Receive unconditional love and loyalty',
        'pets-li-6': 'Make a difference in an animal\'s life',
        'pets-btn': 'Adopt Now',
        
        // Home Page - Stats Section
        'stats-title': 'Our Impact',
        'stats-1-label': 'Animals Adopted',
        'stats-2-label': 'Charity Campaigns',
        'stats-3-label': 'Successful Adoptions',
        'stats-4-label': 'Years in Service',
        
        // Home Page - Volunteer Section
        'vol-title': 'Become a Volunteer',
        'vol-desc': 'Join our dedicated team of volunteers and make a difference in the lives of animals. Whether you can spare a few hours a week or just occasionally on weekends, your help matters.',
        'vol-li-1': 'Walk dogs',
        'vol-li-2': 'Help with feeding and care',
        'vol-li-3': 'Assist with adoption events',
        'vol-li-4': 'Foster pets in your home',
        'vol-btn': 'More Information',
        
        // Home Page - Testimonials
        'testimonials-title': 'Feedbacks',
        'testimonial-text-1': '"Adopting an animal in need was the best decision I have made. The staff at "Life with a Tail" was extremely kind and professional."',
        'testimonial-author-1': 'Ivan Ivanov',
        'testimonial-date-1': 'Adopted an animal in 2019',
        'testimonial-text-2': '"My life wouldn\'t be the same without my best tailed friend! Thank you to "Life with a Tail" for their dedication and help throughout the adoption process."',
        'testimonial-author-2': 'Georgi Petrov',
        'testimonial-date-2': 'Adopted an animal in 2021',
        'testimonial-text-3': '"The adoption process was easy and seamless. The staff truly cares about the animals and provides them with the best care I have ever seen at a shelter."',
        'testimonial-author-3': 'Vasil Georgiev',
        'testimonial-date-3': 'Adopted an animal in 2024',
        
        // Home Page - Donation Section
        'donation-title': 'Support Our Mission',
        'donation-desc': 'Your generous donations help us provide food, medical care, and shelter to animals in need. Every contribution makes a difference in saving lives.',
        'donation-25': 'Provides food for one pet for a week',
        'donation-100': 'Covers a veterinary check-up',
        'donation-250': 'Sponsors a pet for a month',
        'donation-btn': 'Donate',
        
        // Home Page - Contact Section
        'contact-title': 'Get In Touch',
        'contact-visit': 'Visit Us',
        'contact-address': '123 Adoption Street<br>Pet City, PC 12345',
        'contact-hours': 'Hours',
        'contact-hours-text': 'Monday - Friday: 10am - 6pm<br>Saturday: 9am - 5pm<br>Sunday: 11am - 4pm',
        'contact-info': 'Contact',
        'contact-phone-text': 'Phone: +359111222333<br>Email: info@lifewithatail.com',
        'contact-form-name': 'Name',
        'contact-form-email': 'Email',
        'contact-form-message': 'Message',
        'contact-form-submit': 'Send Message',
        
        // Modal
        'modal-title': 'Adoption Application',
        'modal-text': 'Fill out the form below to start the adoption process for',
        'modal-name': 'Your Name',
        'modal-email': 'Email Address',
        'modal-phone': 'Phone Number',
        'modal-why': 'Why do you want to adopt?',
        'modal-submit': 'Submit Application',
        
        // Footer
        'footer-copy': '© 2026 Life with a Tail Shelter',
        'footer-desc': 'Finding your perfect best friend',
        
        // Adoption Page
        'adoption-title': 'Adopt a Pet',
        'adoption-subtitle': 'Give a loving animal a forever home',
        'adoption-intro': 'Meet our wonderful animals waiting for their forever homes. Each one has a unique personality and is ready to fill your life with love and joy.',
        'available-pets': 'Available for Adoption',
        'adoption-process-title': 'How to Adopt',
        'adoption-step-1-title': 'Browse',
        'adoption-step-1-desc': 'Explore our available pets and find your perfect match. Each profile includes detailed information about personality and needs.',
        'adoption-step-2-title': 'Apply',
        'adoption-step-2-desc': 'Fill out our simple adoption application. We\'ll review your information and schedule a meet-and-greet with your chosen pet.',
        'adoption-step-3-title': 'Meet',
        'adoption-step-3-desc': 'Visit our shelter to meet your potential new family member. Spend quality time together to ensure compatibility.',
        'adoption-step-4-title': 'Adopt',
        'adoption-step-4-desc': 'Complete the adoption paperwork and bring your new companion home. We provide ongoing support and resources.',
        
        // Volunteer Page
        'volunteer-title': 'Become a Volunteer',
        'volunteer-subtitle': 'Make a difference',
        'volunteer-why-title': 'Why Volunteer With Us?',
        'volunteer-why-desc': 'Volunteering at Paws & Hearts is a rewarding experience that allows you to make a real difference in the lives of animals. Whether you have a few hours a week or can only help on weekends, every moment you give helps us provide better care for our furry friends.',
        'vol-stat-volunteers': 'Volunteers',
        'vol-stat-campaigns': 'Successful Campaigns',
        'vol-stat-years': 'Years of Volunteering',
        'volunteer-opportunities-title': 'Volunteer Opportunities',
        'vol-dog-walker-title': 'Dog Walker',
        'vol-dog-walker-desc': 'Take our dogs on walks and help them get exercise and socialization. Perfect for active individuals who love the outdoors.',
        'vol-dog-walker-time': 'Time: 2-4 hours/week',
        'vol-dog-walker-training': 'Training: Required',
        'vol-dog-walker-exp': 'Experience: None needed',
        'vol-cat-socializer-title': 'Cat Socializer',
        'vol-cat-socializer-desc': 'Spend time playing with and socializing our cats to help them become more comfortable with people.',
        
        // Adoption Requirements & FAQ
        'adoption-req-title': 'Adoption Requirements',
        'adoption-req-1-title': 'Age Requirement',
        'adoption-req-1-desc': 'Adopters must be at least 21 years old and provide valid identification.',
        'adoption-req-2-title': 'Home Visit',
        'adoption-req-2-desc': 'We conduct a home visit to ensure a safe and suitable environment for your new pet.',
        'adoption-req-3-title': 'Landlord Approval',
        'adoption-req-3-desc': 'Renters must provide written permission from their landlord allowing pets on the property.',
        'adoption-req-4-title': 'Family Agreement',
        'adoption-req-4-desc': 'All household members must meet the pet and agree to the adoption before finalizing.',
        'adoption-req-5-title': 'Adoption Fee',
        'adoption-req-5-desc': 'Fees range from $50-$200 and cover vaccinations, spaying/neutering, and microchipping.',
        'adoption-req-6-title': 'Time Commitment',
        'adoption-req-6-desc': 'Be prepared to provide proper care, attention, and veterinary treatment for the life of your pet.',
        
        'adoption-faq-title': 'Frequently Asked Questions',
        'adoption-faq-1-q': 'How long does the adoption process take?',
        'adoption-faq-1-a': 'The entire process typically takes 3-7 days from application to bringing your pet home.',
        'adoption-faq-2-q': 'What is included in the adoption fee?',
        'adoption-faq-2-a': 'The fee covers vaccinations, spaying/neutering, and microchipping (depends on the choice of the owner). The fee also includes a starter kit with food, toys, and care information.',
        'adoption-faq-3-q': 'Can I adopt if I have other pets?',
        'adoption-faq-3-a': 'Yes! We encourage meet-and-greets with your current pets to ensure compatibility.',
        'adoption-faq-4-q': 'What if the adoption doesn\'t work out?',
        'adoption-faq-4-a': 'We offer a 30-day trial period. If there are issues, we\'ll work with you to resolve them or help facilitate a return if absolutely necessary.',
        
        'adoption-form-name': 'Your Name',
        'adoption-form-email': 'Email Address',
        'adoption-form-phone': 'Phone Number',
        'adoption-form-address': 'Address',
        'adoption-form-homeowner': 'Do you rent or own your home?',
        'adoption-form-select': 'Select...',
        'adoption-form-rent': 'Rent',
        'adoption-form-own': 'Own',
        'adoption-footer-desc': 'Finding your perfect best friend',
        
        // Volunteer Page - Benefits
        'volunteer-benefits-title': 'Volunteer Benefits',
        'vol-benefit-1-title': 'Make a Real Impact',
        'vol-benefit-1-desc': 'Your time directly improves the lives of animals in our care and helps them find loving homes.',
        'vol-benefit-2-title': 'Learn New Skills',
        'vol-benefit-2-desc': 'Gain experience in animal care, customer service, and develop valuable professional skills.',
        'vol-benefit-3-title': 'Meet Like-Minded People',
        'vol-benefit-3-desc': 'Join a community of passionate animal lovers and make lasting friendships.',
        'vol-benefit-4-title': 'Flexible Schedule',
        'vol-benefit-4-desc': 'We work with your availability to find volunteer shifts that fit your lifestyle.',
        'vol-benefit-5-title': 'Volunteer Recognition',
        'vol-benefit-5-desc': 'Receive certificates, appreciation events, and references for your dedication.',
        'vol-benefit-6-title': 'Personal Fulfillment',
        'vol-benefit-6-desc': 'Experience the joy and satisfaction that comes from helping animals in need.',
        
        // Volunteer Requirements & Application
        'volunteer-req-title': 'Volunteer Requirements',
        'volunteer-gen-req-title': 'General Requirements',
        'volunteer-req-1': 'Must be at least 16 years old (some roles require 18+)',
        'volunteer-req-2': 'Commit to a minimum of 3 months of volunteering',
        'volunteer-req-3': 'Attend mandatory orientation session',
        'volunteer-req-4': 'Complete required training for your chosen role',
        'volunteer-req-5': 'Pass a background check (for certain positions)',
        'volunteer-req-6': 'Love the animals',
        'volunteer-expect-title': 'What to Expect',
        'volunteer-expect-1': 'Orientation session (1 hour)',
        'volunteer-expect-2': 'Role-specific training (varies by position)',
        'volunteer-expect-3': 'Shadowing experienced volunteers',
        'volunteer-expect-4': 'Ongoing support from staff members',
        'volunteer-expect-5': 'Monthly volunteer meetings',
        'volunteer-expect-6': 'Opportunities for advancement',
        'volunteer-app-title': 'Apply to Volunteer',
        'volunteer-app-intro': 'Ready to make a difference? Fill out the form below and we\'ll get in touch with you about the next steps.',
        'volunteer-form-fname': 'First Name',
        'volunteer-form-lname': 'Last Name',
        'volunteer-form-email': 'Email Address',
        'volunteer-form-phone': 'Phone Number',
        'volunteer-form-age': 'Age',
        'volunteer-form-role': 'Which volunteer role interests you most?',
        'volunteer-form-select': 'Select a role...',
        'volunteer-form-role-1': 'Dog Walker',
        'volunteer-form-role-2': 'Cat Socializer',
        'volunteer-form-role-3': 'Foster Parent',
        'volunteer-form-role-4': 'Event Helper',
        'volunteer-form-role-5': 'Administrative Support',
        'volunteer-form-role-6': 'Photographer',
        'volunteer-form-role-7': 'Other',
        'volunteer-form-hours': 'How many hours per week can you commit?',
        'volunteer-form-hours-select': 'Select hours...',
        'volunteer-form-hours-1': '1-2 hours',
        'volunteer-form-hours-2': '3-5 hours',
        'volunteer-form-hours-3': '6-10 hours',
        'volunteer-form-hours-4': '10+ hours',
        'volunteer-form-exp': 'Tell us about your experience with animals and why you want to volunteer',
        'volunteer-form-submit': 'Submit Application',
        'volunteer-footer-desc': 'Finding your perfect best friend ',
        'vol-cat-socializer-time': 'Time: 2-3 hours/week',
        'vol-cat-socializer-training': 'Training: Basic orientation',
        'vol-cat-socializer-exp': 'Experience: None needed',
        'vol-foster-title': 'Foster Parent',
        'vol-foster-desc': 'Provide temporary homes for animals in need. Great for those who can\'t commit to permanent adoption.',
        'vol-foster-time': 'Time: Flexible duration',
        'vol-foster-training': 'Training: Comprehensive',
        'vol-foster-exp': 'Experience: Preferred',
        'vol-event-title': 'Event Helper',
        'vol-event-desc': 'Assist at adoption events, fundraisers, and community outreach programs throughout the year.',
        'vol-event-time': 'Time: Events vary',
        'vol-event-training': 'Training: On-site briefing',
        'vol-event-exp': 'Experience: None needed',
        'vol-admin-title': 'Administrative Support',
        'vol-admin-desc': 'Help with office tasks, data entry, answering phones, and general administrative duties.',
        'vol-admin-time': 'Time: 3-5 hours/week',
        'vol-admin-training': 'Training: Basic orientation',
        'vol-admin-exp': 'Experience: Computer skills',
        'vol-photo-title': 'Photographer',
        'vol-photo-desc': 'Take photos of our animals for social media and adoption profiles to help them find homes faster.',
        'vol-photo-time': 'Time: Flexible schedule',
        'vol-photo-training': 'Training: Not required',
        'vol-photo-exp': 'Experience: Photography skills',
        
        // Contact Page
        'contact-page-title': 'Contact Us',
        'contact-page-subtitle': 'Whether you have questions about adoption, volunteering, or just want to say hello, we\'d love to hear from you. Our dedicated team is ready to assist you',
        'contact-hero-title': 'Get In Touch',
        'contact-hero-desc': 'Whether you have questions about adoption, volunteering, or just want to say hello, we\'d love to hear from you. Our dedicated team is ready to assist you.',
        'contact-info-title': 'Contact Information',
        'contact-visit-title': 'Visit Us',
        'contact-address': 'bul. Demokratsia 18<br>Vratsa<br>Bulgaria',
        'contact-call-title': 'Call Us',
        'contact-phones': 'Main: +359111222333<br>Adoption: +359111222333<br>Volunteer: +359111222333',
        'contact-email-title': 'Email Us',
        'contact-emails': 'General: info@lifewithatail.com<br>Adoption: adopt@lifewithatail.com<br>Volunteer: volunteer@lifewithatail.com',
        'contact-hours-title': 'Hours of Operation',
        'contact-hours-text': '<strong>Monday - Friday:</strong> 10:00 AM - 6:00 PM<br><strong>Saturday:</strong> 9:00 AM - 5:00 PM<br><strong>Sunday:</strong> 11:00 AM - 4:00 PM<br>',
        'contact-follow-title': 'Follow Us',
        'contact-facebook': 'Facebook',
        'contact-instagram': 'Instagram',
        'contact-twitter': 'Twitter',
        'contact-form-title': 'Send Us a Message',
        'contact-form-name': 'Your Name',
        'contact-form-email': 'Email Address',
        'contact-form-phone': 'Phone Number (Optional)',
        'contact-form-subject': 'Subject',
        'contact-form-subject-select': 'Select a subject...',
        'contact-form-subject-1': 'Adoption Inquiry',
        'contact-form-subject-2': 'Volunteer Inquiry',
        'contact-form-subject-3': 'Donation Question',
        'contact-form-subject-4': 'General Question',
        'contact-form-subject-5': 'Feedback',
        'contact-form-subject-6': 'Other',
        'contact-form-message': 'Message',
        'contact-form-submit': 'Send Message',
        'contact-map-title': 'Find Us on the Map',
        'contact-map-text': 'Map will be displayed here',
        'contact-map-note': 'Add your Google Maps embed code here',
        'contact-faq-title': 'Common Questions',
        'contact-faq-1-q': 'How do I adopt?',
        'contact-faq-1-a': 'The adoption process can be done online or in person. Feel free to visit us and take a look at our available animals.',
        'contact-faq-2-q': 'Can I bring my current pet to meet a potential new companion?',
        'contact-faq-2-a': 'Yes! We encourage meet-and-greets with your current pets. Please call ahead to arrange a suitable time for introductions.',
        'contact-faq-3-q': 'How quickly will I receive a response?',
        'contact-faq-3-a': 'We typically respond to emails and phone messages within 24-48 hours during business days. For urgent matters, please call us during our operating hours.',
        'contact-faq-4-q': 'Do you accept donations at the shelter?',
        'contact-faq-4-a': 'Absolutely! We accept monetary donations, pet supplies, and your time through volunteering. Visit us during open hours or check our website for our donation wishlist.',
        'contact-emergency-title': 'Emergency Contact',
        'contact-emergency-desc': 'If you\'ve found a stray or injured animal, please call our emergency line:',
        'contact-emergency-avail': 'Available 24/7 for animal emergencies',
        
        // Signup Page
        'signup-title': 'Create account',
        'signup-subtitle': 'Join the community and adopt a friend',
        'signup-name': 'Name',
        'signup-email': 'Email',
        'signup-password': 'Password',
        'signup-submit': 'Sign Up',
        'signup-have-account': 'Already have an account?',
        'signup-login-link': 'Log in',

        // Login Page
        'login-welcome': 'Welcome back',
        'login-subtitle': 'Log in to your account',
        'login-email': 'Email',
        'login-password': 'Password',
        'login-remember': 'Remember me',
        'login-submit': 'Log In',
        'login-no-account': 'Don\'t have an account?',
        'login-signup-link': 'Sign up',
        
        // Admin Page
        'admin-title': 'Animals Management',
        'admin-form-title': 'Add / Edit Animal',
        'admin-form-name': 'Name *',
        'admin-form-breed': 'Breed *',
        'admin-form-age': 'Date of Birth *',
        'admin-form-gender': 'Gender *',
        'admin-form-gender-select': 'Select gender',
        'admin-form-gender-male': 'Male',
        'admin-form-gender-female': 'Female',
        'admin-form-image': 'Upload Image ',
        'admin-form-desc': 'Description *',
        'admin-form-save': 'Save Animal',
        'admin-form-cancel': 'Cancel',
        'admin-list-title': 'Existing Animals',

        // Pet card labels
        'pet-label-name': 'Name',
        'pet-label-age': 'Date of Birth',
        'pet-label-breed': 'Breed',
        'pet-label-sex': 'Sex',
        'pet-label-species': 'Species',
        'pet-adopt-btn': 'Adopt Me',

        // Filter buttons
        'filter-all': 'All',
        'filter-dogs': 'Dogs',
        'filter-cats': 'Cats',

        // Admin species
        'admin-form-species': 'Species *',
        'admin-form-species-select': 'Select species',
        'admin-form-species-dog': 'Dog',
        'admin-form-species-cat': 'Cat',

        // Profile Page
        'profile-title': 'My Profile',
        'profile-member-since': 'Member since',
        'profile-tab-info': 'My Info',
        'profile-tab-favorites': 'Favorites',
        'profile-tab-applications': 'Applications',
        'profile-info-title': 'Personal Information',
        'profile-form-name': 'Full Name',
        'profile-form-email': 'Email Address',
        'profile-form-phone': 'Phone Number',
        'profile-form-address': 'Address',
        'profile-form-save': 'Save Changes',
        'profile-no-favorites': 'You have no favorite animals yet. Browse our animals for adoption!',
        'profile-no-applications': 'You have no adoption applications yet.',
        'profile-browse-link': 'Browse Animals',
        'profile-app-status': 'Status',
        'profile-app-message': 'Message',
        'profile-app-date': 'Date',
        'profile-app-status-pending': 'Pending',
        'profile-app-status-approved': 'Approved',
        'profile-app-status-rejected': 'Rejected',

        // Admin Applications
        'admin-apps-title': 'Manage Applications',
        'admin-apps-status-pending': 'Pending',
        'admin-apps-status-approved': 'Approved',
        'admin-apps-status-rejected': 'Rejected',
        'admin-apps-update': 'Update',
        'admin-messages-title': 'Contact Messages',
        'admin-messages-empty': 'No contact messages yet.',
    }
};

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language preference or default to Bulgarian
    const savedLang = localStorage.getItem('preferredLanguage') || 'bg';
    setLanguage(savedLang);
    
    // Set up language button listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });
});

// Function to set language and update all elements
function setLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('lang-active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('lang-active');
    
    // Update page language
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML content for elements that need it (like footer with <br> tags)
    document.querySelectorAll('[data-translate-html]').forEach(element => {
        const key = element.getAttribute('data-translate-html');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Re-translate dynamic pet cards if the function exists (adoption page)
    if (typeof retranslatePetCards === 'function') {
        retranslatePetCards();
    }

    // Re-translate dynamic profile content if the function exists (profile page)
    if (typeof retranslateProfileContent === 'function') {
        retranslateProfileContent();
    }
}