const myName = 'Савицкая Дарья'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилена Минина'
const reasonText = `для меня это возможность совместить навыки по программированию с дизайнерскими навыками при front-end разработке (создание веб-сайтов)`
const numberOfMonth = 3

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца.`

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toLowerCase()
)
myInfoText = myInfoText.replaceAll('курс', 'КУРС')

console.log(
  '/n ',
  myInfoText,
  '  Длина строки: ',
  myInfoText.length,
  '  1й символ: ',
  myInfoText[0],
  '  последний символ: ',
  myInfoText[myInfoText.length - 1]
)
