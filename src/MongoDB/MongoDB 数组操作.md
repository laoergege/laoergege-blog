## 文档数组
```
db.inventory.insertMany( [
   { item: "journal", instock: [ { warehouse: "A", qty: 5 }, { warehouse: "C", qty: 15 } ] },
   { item: "notebook", instock: [ { warehouse: "C", qty: 5 } ] },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 15 } ] },
   { item: "planner", instock: [ { warehouse: "A", qty: 40 }, { warehouse: "B", qty: 5 } ] },
   { item: "postcard", instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);
```
### 文档数组查询
####  查询条件值为精确的文档
```
db.inventory.find( { "instock": { warehouse: "A", qty: 5 } } )
```
> 当使用嵌套文档查询文档数组时，这是一种精确的查询方法，要求注意内嵌文档域的顺序
```
// 无结果
db.inventory.find( { "instock": { qty: 5, warehouse: "A" } } )
```