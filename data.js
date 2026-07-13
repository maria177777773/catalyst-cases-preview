/* ===== Контент кейса InWave — Гонки на плотах (1-в-1 из текста Маши) ===== */
window.CASE = {
  program:"Гонки на плотах",
  client:"InWave",
  season:"Летняя программа",
  people:"100+",
  peopleLabel:"участников",
  metric:"+30%",
  metricLabel:"организация процессов и передача информации между отделами",
  tagline:"Испытание на стойкость, изобретательность и скорость. Под ливнем, но с песнями и танцами.",
  lead:"Более 100 человек приехали на одну из самых летних наших программ «Гонки на плотах». Для нас это очередная программа. Для клиента это испытание на стойкость, изобретательность и скорость.",
  story:[
    "Погода была абсолютно не лётная, пошёл ливень, но это никого не остановило.",
    "Под дождём коллеги собирали плоты из специально изготовленных материалов, пели и танцевали. Чтобы в конце понять, кто самый быстрый и мокрый."
  ],
  task:"Сплотить коллектив и поднять коммуникацию между отделами.",
  done:[
    {t:"Знакомство", d:"Все коллеги познакомились между собой."},
    {t:"Работа на время", d:"Слаженная работа в ограниченное время: не успел собрать плот, проиграл."},
    {t:"Командный дух", d:"Поддержка своей команды от старта до финиша."}
  ],
  result:[
    "Все коллеги познакомились и стали друзьями.",
    "Организация процессов и передача информации между отделами выросла на 30%."
  ],
  videos:[
    {src:"video/raft-hero.mp4", poster:"video/raft-hero.jpg", title:"Полное видео тимбилдинга", tag:"Видео дня", hero:true},
    {src:"video/raft-clip1.mp4", poster:"video/raft-clip1.jpg", title:"Старт и подготовка"},
    {src:"video/raft-clip2.mp4", poster:"video/raft-clip2.jpg", title:"Сборка плотов"},
    {src:"video/raft-clip3.mp4", poster:"video/raft-clip3.jpg", title:"Дождь не помеха"},
    {src:"video/raft-clip4.mp4", poster:"video/raft-clip4.jpg", title:"Гонка на воде"}
  ],
  photos:["plot-22","plot-25","plot-01","plot-19","plot-08","plot-17","plot-09","plot-05","plot-21","plot-03","plot-26","plot-20","plot-24","plot-14","plot-16"]
    .map(s=>"img/"+s+".webp")
};

/* ===== Витрина «Все кейсы» (InWave — реальный; остальные — реальные программы Каталиста, без выдуманных клиентов) ===== */
window.CASES = [
  {slug:"inwave-plots", program:"Гонки на плотах", client:"InWave", tag:"Тимбилдинг",
   metric:"+30% коммуникация", people:"100+ человек", poster:"video/raft-hero.jpg", video:"video/raft-clip4.mp4", real:true, href:"#"},
  {slug:"foodtrucks", program:"Фестиваль Фудтраков", client:"Премия BEMA", tag:"Фестиваль",
   metric:"Гастро-тимбилдинг", people:"до 500 человек", poster:"cases/foodtrucks.jpg", video:"cases/foodtrucks.mp4"},
  {slug:"megapolis", program:"Мегаполис", client:"Строим город", tag:"Бизнес-игра",
   metric:"Стройка из FIX", people:"200+ человек", poster:"cases/megapolis.jpg", video:"cases/megapolis.mp4"},
  {slug:"wowpizza", program:"WOW Пицца", client:"Эксклюзив", tag:"Тимбилдинг",
   metric:"3-метровая пицца", people:"100+ человек", poster:"cases/wowpizza.jpg", video:"cases/wowpizza.mp4"},
  {slug:"neuro", program:"Нейрогалерея", client:"BEMA 2025", tag:"AI-тимбилдинг",
   metric:"С нейросетями", people:"победитель года", poster:"cases/neuro.jpg", video:"cases/neuro.mp4"},
  {slug:"goldberg", program:"Машина Голдберга", client:"Арт-объект", tag:"Инженерный",
   metric:"10 м механизм", people:"150+ человек", poster:"cases/goldberg.jpg", video:"cases/goldberg.mp4"},
  {slug:"formula1", program:"Формула 1", client:"Настоящая трасса", tag:"Гонки",
   metric:"Скорость и драйв", people:"120+ человек", poster:"cases/formula1.jpg", video:"cases/formula1.mp4"}
];
