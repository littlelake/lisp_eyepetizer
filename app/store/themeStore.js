import { configure, observable, action, runInAction, computed } from 'mobx'

configure({
  enforceActions: 'always'
})

class Store {
  @observable isNightMode = false // 是否是夜间模式
  @observable dayMode = { // 日间模式
    mainThemeColor: '#333',
    pageBackgroundColor: '#f4f4f4',
    segmentColor: '#ccc',
    titleColor: '#000',
    subTitleColor: '#aaa',
    rowItemBackgroundColor: '#fff'
  }

  @observable nightMode = { // 夜间模式
    mainThemeColor: 'rgb(47,47,47)', // 200
    pageBackgroundColor: 'rgb(58,58,58)',
    segmentColor: 'rgb(54,54,54)',
    titleColor: 'rgb(177,177,177)',
    subTitleColor: 'rgb(130,130,130)',
    rowItemBackgroundColor: 'rgb(63,63,63)'
  }

  @computed get themeMode () {
    return this.isNightMode ? this.nightMode : this.dayMode
  }
}

export default new Store()
