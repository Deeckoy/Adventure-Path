async function copyIP() {
  //? Получаем текст для копирования
  let copyText = document.querySelector('.ip__value>p').innerText
  //? Родительский элемент для класса
  let copyTextParent = document.querySelector('.ip_complex')

  //? Копируем текст
  await navigator.clipboard.writeText(copyText)

  //? Добавляем и убираем класс copied
  copyTextParent.classList.toggle('copied')
  setTimeout(() => {
    copyTextParent.classList.toggle('copied')
  }, 2000)
}
