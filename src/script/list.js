//  1) Завантаження даних -> Відобразити статус завнатаження
//  2) Відображення даних, які ми завантажили (конверація даних)
//  3) Якщо є помилка - виводимо статус помилки
export class List {
  STATE = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  }

  status = null
  data = null
  element = null

  updateStatus = (status, data) => {
    this.status = status

    if (data) this.data = data

    this.updateView()
  }

  updateView = () => {}

  loadData = async () => {}

  convertData = () => {}
}
