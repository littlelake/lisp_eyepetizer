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
    titleColor: '#333',
    subTitleColor: '#aaa',
    rowItemBackgroundColor: '#fff',
    arrowColor: '#999'
  }

  @observable nightMode = { // 夜间模式
    mainThemeColor: 'rgb(47,47,47)', // 200
    pageBackgroundColor: 'rgb(58,58,58)',
    segmentColor: 'rgb(54,54,54)',
    titleColor: 'rgb(177,177,177)',
    subTitleColor: 'rgb(130,130,130)',
    rowItemBackgroundColor: 'rgb(63,63,63)',
    arrowColor: 'rgb(177,177,177)'
  }

  @computed get themeMode () {
    return this.isNightMode ? this.nightMode : this.dayMode
  }

  @action.bound
  setValue (key, val) {
    this[key] = val
  }
}

export default new Store()
