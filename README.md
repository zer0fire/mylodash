## Mylodash

基本实现了lodash的大部分常见函数，比如 柯里化 \ 深度比较 等

```js

    // 柯里化
    function curry (func, n = func.length) {
      return function (..args) {
        if (arg.lenght <= n) {
          return curry(func.bind(null, ...arguments), n - args.length)
        } else {
          return func(...arguments)
        }
      }
    }

    // 深度比较
    function isEqual(value, other, aStack, bStack){
      // 普通比较
      if(value == other){
        return value !== 0 || 1 / value === 1 / other // 比较+0和-0
      }
      // 为了比较对象，尽早让null退出
      if(value == null || other == null) {
        return false
      }
      if(value !== value) {
        return other !== other && +other !== +other // 比较NaN，
        //需要注意一下包装类型的NaN如果是第二参数other的话，有可能会导致判断失误，因为对象的指向是指针，所以===符号判断的是两个指针是否相等，两个指针当然相等，因此最好转换下Other的类型
      }
      var type = typeof value
      // 实际上 基本类型和函数肯定不会相等，因此，少了一句typeof other !== 'function'
      if(type !== 'function' && type !== 'object' && typeof other !== 'object'){
        return false;
      }
      return deepEq(value, other, aStack, bStack)

      function isFunction (obj){
        return Object.prototype.toString.call(obj)
      }

      function deepEq (a, b, aStack, bStack) {
        var toString = Object.prototype.toString
        var className = toString.call(a)
        // 利用Object上的prototype上的toString属性
        if(className !== toString.call(b)) {
          return false
        }
        // 判断包装类型
        switch (className) {
          case '[object RegExp]':
          case '[object String]':
            return '' + a === '' + b;
          case '[object Number]':
            if(+a !== +a) {
              return +b !== +b
            }
            return +a === 0 ? 1 / +a === 1 / +b : +a === +b;
          case '[object Date]':
          case '[object Boolean]':
            return +a === +b
        }
        // 其他判断

        // 判断是否数组
        var areArrays = className === '[object Array]'
        if(!areArrays){
          // 如果不是
          if(typeof a !== 'object' || typeof b !== 'object'){
            return false
          }
          // 进入判断构造函数不同，但内容相同的对象，这两个对象我们希望是不相等的
          // 但是实际应用中，没有原型的对象，和用Object直接构造的对象觉得应该相等？这个地方有争议
          // 就是说a和b的原型必须都存在且都不是Object构造函数的情况下，aCtor不等于bCtor，那么这两个对象就真的不相等
          var aCtor = a.constructor, bCtor = b.constructor;
          if(aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
            return false;
          }
        }


        // 通过将属性记录在传递的数组中，检测循环引用
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        // 检查是否有循环引用的部分
        while(length--) {
          if(aStack[length] === a) {
            return bStack[length] === b
          }
        }

        aStack.push(a);
        bStack.push(b);

        if(areArrays) {
          // 判断数组相等，递归遍历
          var length = a.length;
          if(length !== b.length) {
            return false
          }

          while(length --) {
            if(!isEqual(a[length], b[length], aStack, bStack)) {
              return false
            }
          }
        } else {
          // 判断对象相等，运用Object.keys方法
          var keys = Object.keys(a)
          var key
          var length = keys.length


          if(Object.keys(b).length !== length){
            return false
          }
          // 处理普通的对象属性，包含数组和对象
          while(length--){
            key = keys[length]
            if(!(b.hasOwnProperty(key) && isEqual(a[key], b[key], aStack, bStack))) {
              return false
            }
          }
        }
        // 已经检测过的就不必再检测了
        aStack.pop()
        bStack.pop()
        // 上面的排查都过了，说明是真的相等
        return true

      }
    }
```