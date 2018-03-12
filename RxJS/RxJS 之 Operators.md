- 组合
    - combineAll 将多维 Observable 转化成一维，当任意 Observable 发出值时，发出每个 observable 的最新值。
    - combineLatest 组合多个 Observable， 当任意 Observable 发出值时，发出每个 observable 的最新值。
    - concat 按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值。
    - concat 将多维 Observable 转化成一维，按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值。
    - merge 将多个 Observable 转化成一个 Observable。
    - mergeAll 将多维 Observable 转化成一维 Observable。
    > 
- 创建
- 过滤
    - debounce 接受一个 Observable，每次收到元素，先把元素 cache 住并等待Observable 发射元素，如果这段时间内 Observable 没有发射任意元素，则把元素送出；如果这段时间内 Observable 发射元素，则会把原本 cache 住的元素释放掉并重新计时，不断反复。
    - debounceTime 每次收到元素，先把元素 cache 住并等待一段时间，如果这段时间内已经没有收到任何元素，则把元素送出；如果这段时间内又收到新的元素，则会把原本 cache 住的元素释放掉并重新计时，不断反复。
    - throttle 接受一个 Observable，先发射第一次元素，之后等待 Observable 发射元素时再发射， 直到完成。
    - throttleTime 先发射第一次元素，之后等待指定时间后再发射， 直到完成。
    > ![debounce && throttle](https://github.com/laoergege/laoergege-blog/blob/master/image/debounce%E3%80%81%20throttle.PNG?raw=true)
    - distinct
    - distinctUntilChanged
- 转化
- 工具