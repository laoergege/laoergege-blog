routes

model => service => container <=> viewModel => (data binding) <=> view

reactive => hooks

- 容器-展示模式
  - 两类组件通信
    - 输入输出
    - 嵌套场景，服务-依赖注入
  - 模型 Model 表示域/业务模型的定义，ViewModel

 
 setup() {
   return Pipe(
      [],
      op1,
      op2,
      op3,
      (data) => {
        return []
      }
    )
 }

  错误：
  业务状态分散在组件，以组件划分
