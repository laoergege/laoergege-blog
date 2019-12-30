# GithubAction Sheet

- Workflow 配置
  - [Contexts and expression syntax](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions)
    - [上下文](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#contexts)
      - 上下文是一种访问当前环境的变量的途径
        ```
        Index syntax: github['sha']
        Property dereference syntax: github.sha
        ```
    - 表达式
      - `{{ <expression> }}`
      - expression 大多数情况与 workflow 中的 `if` 关键词使用 `if: <expression>`
      - 表达式包含
        - [上下文引用](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#contexts)
        - [字面量](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#literals)
        - [操作符](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#operators)
        - [内置函数及 Job status check functions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#functions)
        
