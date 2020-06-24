// var zer0fire = {

//   // [0,1,false,2,"",3]
//   compact: function (array) {
//     var result = []
//     for(var i = 0; i < array.length; i++){
//       if(Number(array[i]) === array[i]){
//         result.push(array[i])
//       }
//     }
//     return result
//   },
// }


  var zer0fire = function zer0fire () {
    /**
     * 
     * @param {Number[]} array 
     * @param {Number} size 
     */
    function chunk(array, size = 1) {
      var result = []
      //var cache = array.slice()
      for (let l = 0; l < array.length; l += size) {
        var temp = []
        for (let i = l; i < l + size; i++) {
          if(array[i] == undefined){
            break;
          }
          temp.push(array[i])
        }
        result.push(temp)
      }
      return result
    }
    //debugger;chunk([1,2,3,4])

    function chunk (array, size = 1) {
      var result = []
      for(var i = 0; i < array.length; i+=size){
        result.push(array.slice(i, i+size))
      }
      return result
    }


    /**
     * 
     * @param {Number[]} array 
     */
    function compact (array) {
        var result = []
        for(var i = 0; i < array.length; i++){
          if(array[i]){
          //if(array[i] !== null && array[i] !== undefined && array[i] !== false && array[i] !== 0 && array[i] !== "" && !isNaN(array[i]) ){
            result.push(array[i])
          }
        }
        return result
    }

    /**
     * 
     * @param {Number[]} array 
     * @param  {...any} values 
     */
    function concat (array, ...values) {
      var result = array.slice()
      for(var t of values){
        result[result.length] = t
      }
      return result;
    }

    /**
     * 
     * @param {Number[]} array 
     * @param  {...any} values 
     */
    function difference (array, ...values){
      var map = {}
      var result = []
      for(var i = 0; i < array.length; i++){
        map[array[i]] = 0
      }
      for(var i = 0; i < values.length; i++){
        for(var l = 0; l < values[i].length; l++){
          if(values[i][l] in map){
            map[values[i][l]]++
          }
        }
      }
      for(var e in map){
        if(!(map[e])){
          result.push(Number(e))
        }
      }
      return result
    }


    function differenceBy (...values) {
      var func, len
      if(typeof values[values.length - 1] === 'function' || typeof values[values.length - 1] === 'string'){
        func = iteratee(values[values.length - 1])
        len = values.length - 1
      } else {
        func = identity
        len = values.length
      }

      var map = new Map()
      var result = []
      for(var i = 0; i < values[0].length; i++){
        if(map[func(values[0][i])] === undefined){
          map[func(values[0][i])] = []
          map[func(values[0][i])].push(values[0][i])
        } else {
          map[func(values[0][i])].push(values[0][i])
        }
      }
      for(var i = 1; i < len; i++){
        for(var l = 0; l < values[i].length; l++){
          if(map[func(values[i][l])] !== undefined){
            map[ func(values[i][l])].push(values[i][l] )
          }
        }
      }
      for (var item in map) {
        if (map[item].length === 1) {
          result.push(map[item][0])
        }
      }
      return result
    }


    /**
     * 
     * @param {Number[]} array 
     * @param {Number} n 
     */
    function drop (array, n = 1) {
      var result = array.slice();
      for(var i = 0; i < n; i++){
        result.shift()
      }
      return result
    }


    function dropRight (array, n = 1) {
      var result = array.slice();
      for(var i = 0; i < n; i++){
        result.pop()
      }
      return result
    }

    function dropRightWhile (array, predicate = identity){
      var func = iteratee(predicate);
      var result = array.slice();
      for(var i = 0; i < result.length; i++) {
        if(func(result[i])){
          result.splice(i, 1)
          i--
        }
      }
      return result
    }

    function droptWhile (array, predicate = identity){
      var func = iteratee(predicate)
      var result = array.slice()
      for(var i = result.length - 1; i >= 0 ; i--) {
        if(func(result[i])){
          result.splice(i, 1)
          i++
        }
      }
      return result
    }
    

    /**
     * 
     * @param {Number[]} array 
     * @param {Number} value 
     * @param {Number} start 
     * @param {Number} end 
     */
    function fill (array, value, start = 0, end = array.length) {
      var result = array.slice()
      for(var i = start; i < end; i++){
        result[i] = value;
      }
      return result
    }


    function findIndex (array, predicate = identity, fromIndex = 0) {
      var func = iteratee(predicate)
      for(var i = fromIndex; i < array.length; i++){
        if(func(array[i])){
          return i
        }
      }
      return -1
    }

    function findLastIndex (array, predicate = identity, fromIndex = array.length - 1) {
      var func = iteratee(predicate)
      for(var i = fromIndex; i >= 0; i--){
        if(func(array[i])){
          return i
        }
      }
      return -1
    }


    function head (array) {
      return array[0]
    }


    /**
     * 
     * @param {Number[]} array 
     * @param {Number} value 
     * @param {Number} fromIndex 
     */
    function indexOf (array, value, fromIndex = 0) {
      for(var i = fromIndex; i < array.length; i++){
        if(array[i] === value){
          return i
        }
      }
    }


    /**
     * 
     * @param {Number[]} array 
     */
    function initial (array) {
      var result = []
      for(var i = 0; i < array.length - 1; i++){
        result.push(array[i])
      }
      return result
    }


    function intersection (...array) {
      var map = new Map()
      var result = []
      for(var value of array[0]){
        map[value] = 0
      }
      for(var i = 1; i < array.length; i++){
        for(var l = 0; l < array[i].length; l++){
          if(array[i][l] in map){
            map[array[i][l]]++
          }
        }
      }
      for(var e in map){
        if(map[e] > 0){
          result.push(Number(e))
        }
      }
      return result
    }


    function intersectionBy (...arrays) {
      var len =  arrays.length - 1
      var func = iteratee(arrays[len])
      var map = new Map
      var result = []
      for(var value of arrays[0]){
        if(map[func(value)] == undefined){
          map[func(value)] = []
          map[func(value)].push(value)
        } else {
          map[func(value)].push(value)
        }
      }
      for(var i = 1; i < len; i++){
        for(var l = 0; l < arrays[i].length; l++){
          if(func(arrays[i][l]) in map){
            map[func(arrays[i][l])].push(arrays[i][l])
          }
        }
      }
      for(var item in map){
        if(map[item].length >= len){
          result.push(map[item][0])
        }
      }
      return result
    }


    function intersectionWith(arrays, comparator){
      for(var i = 0; i < arrays.length; i++){

      }
    }

    /**
     * 
     * @param {Number[]} array 
     */
    function reverse (array) {
      var len = (array.length / 2 | 0)
      for(var i = 0; i <= len; i++){
        var temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
      }
      return array
    }



    function sortedIndex (array, value) {
      var result = -1
      if(array[0] >= value){
        return 0
      }
      if(array[array.length - 1] < value){
        return array.length
      }
      for(var i = 0; i < array.length - 1; i++){
        if(array[i] < value && array[i + 1] >= value){
          result = i + 1
          return result
        } 
      }
    }

    /**
     * 
     * @param {Array} array 
     * @param {Array} values 
     * @param {Function} itera 
     */
    function sortedIndexBy (array, values, itera) {
      var func = iteratee(itera)
      var result = -1 
      if(func(array[0]) >= func(values)){
        return 0
      }
      if(func(array[array.length - 1]) < func(values)){
        return array.length
      }
      for(var i = 0; i < array.length; i++){
        if(func(array[i]) >= values){
          result = i - 1
          return result
        }
      }
    }

    // function sortedIndexOf(array, value){
    //   if(array[0] > value){
    //     return 0
    //   }
    //   if(array[array.length - 1] < value){
    //     return array.length
    //   }
    //   var temp = (array.length / 2 | 0)
    //   while(temp !== 0 || temp !== array.length - 1){
    //     if(array[temp - 1] < value && array[temp] > value){
    //       return temp
    //     } else if (array[temp] >= value){
    //       temp = ((temp + 0) / 2 | 0)
    //     } else if (array[temp] < value){
    //       temp = ((temp + array.length) / 2 | 0)
    //     }
    //   }
    // }


    function sortedIndexOf (array, value) {
      var result = -1
      if(array[0] > value){
        return 0
      }
      if(array[array.length - 1] < value){
        return array.length
      }
      var left = 0
      var right = array.length - 1
      while(right >= left){
        var mid = (left + (right - left) / 2)
        if(array[mid] >= value && array[mid - 1] < value){
          return mid
        }
        if(array[mid] < value && array[mid + 1] >= value){
          return mid + 1
        }
        if(array[mid] >= value){
          right = mid - 1
        } else {
          left = mid + 1
        }
        return -1
      }
      // for(var i = 0; i < array.length - 1; i++){
      //   if(array[i] < value && array[i + 1] > value){
      //     result = i + 1
      //     return result
      //   } 
      // }
    }

    function sortedLastIndex (array, value) {
      if(array[0] > value){
        return 0
      }
      if(array[array.length - 1] < value){
        return array.length
      }
      for(var i = array.length - 1; i >= 0 ; i--){
        if(array[i] > value && array[i - 1] < value){
          result = i
          return result
        } 
      }
    }
    
    function sortedLastIndexOf (array, value) {
      if(array[0] > value){
        return 0
      }
      if(array[array.length - 1] < value){
        return array.length
      }
      for(var i = array.length - 1; i >= 0 ; i--){
        if(array[i] > value && array[i - 1] < value){
          result = i
          return result
        } 
      }
    }

    function uniq (array) {
      var map = {}
      var result = []
      array.forEach((ele) => map[ele] = 1)
      for(ele in map){
        result.push(ele)
      }
      return result
    }

    function union (values, ...arrays) {
      let result = values
      result.forEach((it) => {
        for(var i = 0; i < arrays.length; i++){
          for(var l = 0; l < arrays[i].length; l++){
            if(!result.includes(arrays[i][l])){
              result.push(arrays[i][l])
            }
          }
        }
      })
      return result
    }


    function unionBy (...arrays) {
      var len = arrays.length - 1
      var func = iteratee(array[len])
      let result = arrays[0]
      result.forEach((it) => {
        for(var i = 1; i < len; i++){
          for(var l = 0; l < arrays[i].length; l++){
            if(!result.includes(arrays[i][l])){
              result.push(arrays[i][l])
            }
          }
        }
      })
      return result
    }

    function sortedUniq (array) {
      var map = {}
      var result = []
      var sortArray = array.sort((a, b) => a - b)
      sortArray.forEach((ele) => map[ele] = 1)
      for(ele in map){
        result.push(Number(ele))
      }
      return result
    }
    
    // function sortedUniqBy (array, iterat = identity) {
    //   var map = {}
    //   var result = []
    //   var sortArray = array.sort((a, b) => a - b)
    //   sortArray.forEach((ele) => map[ele] = 1)
    //   for(ele in map){
    //     result.push(ele)
    //   }
    //   return result
    // }

    function unzip (arrays) {
      var result = []
      var i = 0
      var l = 0
      for(i = 0; i < arrays[0].length; i++) {
        result[i] = []
        for(l = 0; l < arrays.length; l++){
          result[i].push(arrays[l][i])
        }
      }
      return result
    }


    function unzipWith (arrays, itera = identity) {
      var func = itera
      var result = []
      var i = 0
      var l = 0
      for(i = 0; i < arrays[0].length; i++) {
        result[i] = []
        for(l = 0; l < arrays.length; l++){
          result[i].push(arrays[l][i])
        }
      }
      result = result.reduce(func)
      return result
    }


    function zip (...arrays){
      var result = []
      var i = 0
      var l = 0
      for(i = 0; i < arrays[0].length; i++) {
        result[i] = []
        for(l = 0; l < arrays.length; l++){
          result[i].push(arrays[l][i])
        }
      }
      return result
    }

    function zipObject(props = [], values = []) {
      var map = {}
      props.forEach((key, index) => map[key] = values[index])
      return map
    }

    function zipObjectDeep(props = [], values = []) {
      var map = {}
      for(var i = 0; i < props.length; i++){
        var i = 0
        while(l++){
          if(props[i][l] === '.'){
            var ca1 = props[i].slice(0, l)
          }
        }
      }
    }

    function countBy (collection, itrera = identity) {
      var func = iteratee(itera)
      var map = new Map()
      for(var item of collection){
        map[func(item)] = (map[func(item)] + 1) || 1
      }
      return map
    }

    function every (collection, predicate = identity) {
      var func = iteratee(predicate)
      for(var item of collection){
        if(!fun(item)){
          return false
        }
      }
      return true
    }

    function find (collection, predicate = identity, fromIndex = 0){
      var func = iteratee(predicate)
      for(var i = 0; i < collection.length; i++){
        if(func(collection[i])){
          return collection[i]
        }
      }
    }

    function findLast () {
      var func = iteratee(predicate)
      for(var i = collection.length - 1; i >= 0; i--){
        if(func(collection[i])){
          return collection[i]
        }
      }
    }

    function flatMap (collection, iteratee = identity) {
      var result = []
      for(var item of collection){
        item = iteratee(item)
        if (Array.isArray(item)){
          result.push(...item)
        } else {
          result.push(item)
        }
      }
      return result
    }

    function flatMapDeep (collection, iteratee = identity) {
      var result = []
      for(var item of collection){
        item = iteratee(item)
        if(Array.isArray(item)){
          result.push(...flattenDeep(item))
        } else {
          result.push(item)
        }
      }
      return result
    }

    function flatMapDepth (collection, iteratee = identity, depth = 1) {
      var result = []
      for(var item of collection){
        item = iteratee(item)
        if(Array.isArray(item)){
          result.push(...flattenDepth(item, depth))
        } else {
          result.push(item)
        }
      }
      return result
    }

    /**
     * 
     * @param {Number[]} array 
     * @param  {...any} values 
     */
    function concat (array, ...values) {
      var result = array.slice()
      for(var i = 0; i < values.length; i++){
        if(typeof values[i] !== 'object'){
          result.push(values[i])
        } else {
          for(var l = 0; l < values[i].length; l++){
            result.push(values[i][l])
          }
        }
      }
      return result;
    }


    /**
     * 
     * @param {Number[]} array 
     * @param {String} separator 
     */
    function join (array, separator = ',') {
      var str = ''
      for(var i = 0; i < array.length - 1; i++){
        str += "" + array[i] + separator
      }
      if(array[i] !== undefined){
        str += array[i]
      }
      return str
    }

    /**
     * 
     * @param {Number[]} array 
     */
    function last(array) {
      return array[array.length - 1]
    }


    function lastIndexOf (array, value, fromIndex = array.length - 1) {
      for(let i = fromIndex; i >= 0; i --){
        if(array[i] == value){
          return i
        }
      }
      return -1
    }

    function nth (array, n = 0) {
      if (n >=  1) {
        return array[n]
      } else if (n <= -1) {
        return array[array.length + n]
      }
    }


    function pull (array, ...values) {
      for(var i = 0; i < values.length; i ++){
        for(var l = 0; l < array.length; l ++){
          if(array[l] == values[i]){
            array.splice(l,1)
            i--
          } 
        }
      }
      return array
    }
  

    function pullAll (array, values) {
      for(var i = 0; i < values.length; i ++){
        for(var l = 0; l < array.length; l ++){
          if(array[l] == values[i]){
            array.splice(l,1)
            l--
          } 
        }
      }
      return array
    }

    /**
     * 
     * @param {Array} array 
     * @param {Array} values 
     */
    function pullAll (array, values) {
      let result = []
      array.forEach((it) => {
        if(!values.includes(it)){
          result.push(it)
        }
      })
      return result
    }

    function pullAllBy (array, values, itera) {
      var func = iteratee(itera[values.length - 1])
      for(var i = 0; i < values.length; i++){
        for(var l = 0; l < array.length; l ++){
          if(func(values[i]) === func(array[i])){
            array.splice(l, 1);
            l--
          }
        }
      }
      return array
    }
    
    function tail (array) {
      var result = array.slice()
      result.shift()
      return result
    }

    function take(array, n = 1){
      var result = []
      for(var i = 0; i < n; i++){
        if(i >= array.length){
          return result
        }
        result.push(array[i])
      }
      return result
    }

    function takeRight(array, n = 1){
      var result = array.slice()
      var len = array.length
      for(var i = 0; i < len - n; i++){
        result.shift()
      }
      return result
    }

    function without (array, ...values) {
      var result = array.slice()
      for(let i = 0; i < values.length; i ++){
        for(let l = 0; l < result.length; l ++){
          if(values[i] === result[l]){
            result.splice(l,1)
            l--
          }
        }
      }
      return result
    }

    function xor (...arrays) {
      var result = []
      var map = {}
      for(let i = 0; i < arrays.length; i++){
        for(let l = 0; l < arrays[i].length; l++){
          map[arrays[i][l]] = (map[arrays[i][l]]+1) || 1
        }
      }
      for(var e in map){
        if(map[e] == 1){
          result.push(Number(e))
        }
      }
      return result
    }

    function xorBy(...ary) {
      var cache = []
      var map = {}
      var result = []
      var func = iteratee(ary[ary.length - 1])
      for(var i = 0; i < ary.length - 2; i++){
        cache.concat(ary[i])
      }
      for(var i = 0; i < cache.length - 1; i ++) {
        if(!map[fun(cache[i])]){
          map[fun(cache[i])] = func(cache[i]) 
        }
      }
      for(var val of map) {
        result.push(val)
      }
      return map
    }

    function flatten (array) {
      var result = []
      for(var i = 0; i < array.length; i++){
        result = result.concat(array[i])
      }
      return result
      // return [].concat(...array)
    }

    // function flatten (array) {
    //   var result = []
    //   for(var item of array){
    //     if (Array.isArray(item)) {
    //       for(var i in item){
    //         result.push(i)
    //       }
    //     } else {
    //       result.push(item)
    //     }
    //   }
    //   return result
    // }


    function flattenDeep (array) {
      var result = array.slice()
      var temp = []
      var cache = []
      for(var i = 0; i < result.length; i++){
        if(typeof result[i] == 'object'){
          cache = result.slice(i + 1)
          temp = result[i]
          result.splice(i, result.length)
          temp.forEach(function (x){
            result = result.concat(x)
          })
          result = result.concat(cache)
          i--
        }
      }
      return result
    }


    function flattenDeep (array) {
      var result = []
      for(var item of array){
        if (Array.isArray(item)) {
            result.push(...flattenDeep(item))
        } else {
          result.push(item)
        }
      }
      return result
    }


    function flattenDeep (array) {
      return array.reduce((result, item) =>{
          if (Array.isArray(item)) {
              result.push(...flattenDeep(item))
          } else {
            result.push(item)
          }
          return result
        }, [])
    }

    // var flattenDeep = (array) => array.reduce((result, item) => ((Array.isArray(item)) ? result.push(...flattenDeep(item)) : result.push(item), result), [])

    function flattenDepth (array, depth = 1) {
      var temp = []
      while(depth){
        var result = []
        if(temp.length === 0){
          for(var i = 0; i < array.length; i++){
            result = result.concat(array[i])
          }
          temp = result.slice()
          depth--
        } else {
          for(var i = 0; i < temp.length; i++){
            result = result.concat(temp[i])
          }
          temp = result.slice()
          depth--
        }
      }
      return result
    }

    function flattenDepth (array, depth = 1) {
      if(depth == 0){
        return array.slice()
      }
      return array.reduce((result, item) =>{
        if (Array.isArray(item)) {
            result.push(...flattenDepth(item, depth - 1))
        } else {
          result.push(item)
        }
        return result
      }, [])
    }




    function identity (value) {
      return value
    }


    function iteratee(func = identity){
      if (typeof func === "string"){
        return property(func)
      } else if (Array.isArray(func)) {
        return matchesProperty(func)
      } else if (typeof func === "object") {
        return matches(func)
      }
      return func
    }

    function isMatch (object, source){
      for(var key in source){
        if(object[key] != source[key]){
          return false
        }
      }
      return true
    }

    function matches (source) {
      return function (obj) {
        for(var key in source){
          if(obj[key] != source[key]){
            return false 
          }
        }
        return true
      }
    }

 
    function matchesProperty (path, srcValue) {
      var cache = new Object()
      cache[path] = srcValue

      return function (obj) {
        for(var key in cache){
          if(obj[key] != cache[key]){
            return false 
          }
        }
        return true
      }
    }


    function mapKeys (obj) {

    }

    function mapValues (obj, mapper = identity) {
      var result = {}
      for(var key in mapper){
        var val = map[key]
        obj[key] = mapper(val)
      }
      return result
    }

    function groupBy (collection, predicate = identity) {
      var map = {}
      predicate = iteratee(predicate)
      for (i in collection) {
        var key = predicate(collection[i], i, collection)
        if(key in map){
          map[key].push(collection[i])
        } else {
          map[key] = []
          map[key].push(collection[i])
        }
      }
      return map
    }

    function add (augend, addend) {
      return augend + addend
    }
    // var add = (augend, addend) => augend + addend


    function ceil (number, precision = 0) {
      var result = number.toString().split('.')
      
    }

    function divide (dividend, divisor) {
      return dividend / divisor
    }

    // var divide = (dividend, divisor) => dividend / divisor

    function max (array) {
      var maxNum = -Infinity
      for(var item of array){
        if(maxNum < item){
          maxNum = item
        }
      }
      if (maxNum == -Infinity) {
        return undefined
      } else {
        return maxNum
      }
    }


    function mean (array) {
      return array.reduce((lastAvg, val, index) => {
        return ((lastAvg * index) + val) / (index + 1)
      })
    }

    function min (array) {
      var minNum = Infinity
      array.forEach((it) => {
        if(it < minNum){
          minNum = it
        }
      })
      if (minNum == Infinity) {
        return undefined
      } else {
        return minNum
      }
    }

    function multiply (multiplier, multiplicand) {
      return multiplier * multiplicand
    }

    // var multiply = (multiplier, multiplicand) => multiplier * multiplicand 

    function subtract (minuend, subtrahend) {
      return minuend - subtrahend
    }

    function sum (array) {
      var sum = 0;
      array.forEach((x) => {
        sum += x
      })
      return sum
      // return array.reduce((lastRes, val) => {
      //   return lastRes += val
      // })
    }



    function inRange (number, ...values){
      var start = values[1] ? values[0] : 0
      var end = values[1] || values[0]
      return Math.abs(number) >= Math.abs(start) && Math.abs(number) < Math.abs(end)
    }

    function eq (value, other) {
      var result = [value]
      return result.includes(other)
    }

    function Lt (value, other){
      return value < other
    }
  
    function Lte (value, other){
      return value <= other
    }

    // var Ite = (value, other) => value <= other

    function gt (value, other) {
      return value > other
    }

    function gte (value, other) {
      return value >= other
    }

    function toArray (value) {
      var result = []
      for(var item in value){
        result.push(value[item])
      }
      return result
    }

    function toInteger (value) {
      if(value === null) {
        return Number.MAX_VALUE
      }
      return value >> 0
    }

    function toString (value) {
      if(value == null || value == undefined){
        return ""
      } else if(value === 0 && ((1 / value) < 0)){
        return "-" + value
      } else if (typeof value === "object") {
        var str = ""
        for(var item in value){
          str += value[item] + ","
        }
        return str.slice(0, str.length -1)
      } else {
        return "" + value
      }
    }

    
    function forOwn (obj, iterator = console.log){
      var hasOwn = Object.prototype.hasOwnProperty
      for(var prop in obj){
        if(hasOwn.call(obj, prop)){
          iterator(obj[prop], prop, obj)
        }
      }
    }


    function toPairs(obj){
      // var result = Object.entries(obj)
      // return result
      for(var item in obj){
        
      }
    }

    function fromPairs(ary) {
      var obj = {}
      for(var item of ary){
        obj[item[0]] = item[1]
      }
      return obj
    }


    var objPro2str = (e) => Object.prototype.toString.call(e)

    function isArguments(value) {
      if (Object.prototype.toString.call(value) === "[obejct Arguments]") {
        return true
      } else {  
        return false
      }
    }

    function isArray(value) {
      if(Object.prototype.toString.call(value) === "[object Array]"){
        return true
      } else {
        return false
      }
    }

    function isString(value) {
      if(Object.prototype.toString.call(value) === "[object String]"){
        return true
      } else {
        return false
      }
    }

    function isBoolean(value) {
      if(Object.prototype.toString.call(value) === "[object Boolean]"){
        return true
      } else {
        return false
      }
    }

    function isNumber(value) {
      if(Object.prototype.toString.call(value) === "[object Number]"){
        return true
      } else {
        return false
      }
    }

    function isNull(value) {
      if(Object.prototype.toString.call(value) === "[object Null]"){
        return true
      } else {
        return false
      }
    }

    function isMap(value) {
      if(Object.prototype.toString.call(value) === "[object Map]"){
        return true
      } else {
        return false
      }
    }
    
    function isArrayLike (value) {
      if(Object.prototype.toString.call(value) === "[object Function]"){
        return false
      }
      return value.length && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER
    }

    function isArrayLikeObject(value) {
      return typeof value === 'object' && value.length >= 0
    }

    // document.body
    function isElement(value) {
      return Object.prototype.toString.call(value) === "[object HTMLBodyElement]"
    }

    function isNaN (value) {
      if(value != value && typeof value == "number" && value.toString() === "NaN" ){ // 原始类型
        return true
      }
      if(typeof value === "object" && value.toString() === "NaN"){ // 包装类型
        return true
      }
      return false
    }


    function isDate(value) {
      return Object.prototype.toString.call(value) === "[object Date]"
    }

    function isArrayBuffer(value) {
      return Object.prototype.toString.call(value) === "[object ArrayBuffer]"
    }


    function isFinite (value) {
      return typeof value !== "number" ? false : value <= Number.MAX_VALUE
    }

    var isSymbol = (value) => Object.prototype.toString.call(value) === "[object Symbol]"

    function isFunction (value) {
      if(value == ""){
        return true
      }
      return typeof value === 'function' && Object.prototype.toString(value) === '[obejct Function]'
    }

    function isInteger (value) {
      return Math.floor(value) === value && Number.isInteger(value) === true
    }

    function isLength(value) {
      return isInteger(value)
    }

    function isNative (value) {
      return value.toString().includes === "[native code]"
    }

    function isNill(value) {
      return typeof value === 'undefined' || value === null
    }
    


    // function isMap (value) {
    //   return objPro2str(value) === "[object Map]"
    // }

    function isObject (value) {
      return objPro2str(value) === "[object Object]" || objPro2str(value) === "[object Function]" || objPro2str(value) === "[object Array]"
    }

    function isObjectLike (value) {
      return typeof value === 'object' && value !== null
    }

    function isSet (value) {
      return objPro2str(value) === "[object Set]"
    }
    // function isNaN (value) {
    //   return typeof value === "number" && value !== value && value.toString() === 'NaN'
    // }


    function isEmpty(value){
      if(value === null){
        return true
      }else if(typeof value == 'object') {
        return false
      }
      return true
    }

    function isRegExp (value) {
      return Object.prototype.toString.call(value) === '[object RegExp]'
    }


    function isUndefined (value) {
      return typeof value === 'undefined'
    }

    function isWeakMap (value) {
      return Object.prototype.isString.call(value) === '[object WeakMap]'
    }

    function isWeakSet (value) {
      return objPro2str(value) === '[object WeakSet]'
    }


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




    function toFinite (value){
      if(typeof value === 'Number'){
        if(value < Number.MAX_VALUE && value > Number.MIN_VALUE){
            return value
        }
        if(value === Infinity){
          return Number.MAX_VALUE
        }
        if(value === -Infinity){
          return Number.MIN_VALUE
        }
        if(value !== value){
          return 0
        }
      }
      return Number(value)
    }

    function toLength (value) {
      if(typeof value === 'Number'){
        if(value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER){
            return Math.floor(value)
        }
        if(value <= Infinity){
          return Number.MAX_SAFE_INTEGER
        }
        if(value >= -Infinity){
          return Number.MIN_SAFE_INTEGER
        }
        if(value !== value){
          return 0
        }
      }
      return Math.floor(Number(value))
    }


    /// Function

    // 函数在有限次数后使用
    function after (n, func) {
      var calledTimes = 0
      return function (...args) {
        calledTimes++
        if (calledTimes >= n) {
          return func(...args)
        }
      }
    }

    // 函数使用有限次数
    function before (n, func) {
      var calledTimes = n
      return function (...args){
        if(calledTimes > 0){
          calledTimes--
          return func(...args)
        }
      }
    }

    // 让函数只能接收一个参数
    function unary (func) {
      return function (...args) {
        var first = args.slice(0, 1)
        return func.call(this, ...first) // 这里是为了让外部绑定的this也能传递到内部
      }
    }

    // var unary = (func) => ary(func, 1)
    // var unary = flip(ary()).bind(null, 1)

    // 参数的数量就是参数的length
    function ary (func, n = func.length) {
      return function(...args) {
        var initials = args.slice(0, n)
        return func.call(this, ...initials)
      }
    }

    // 反转参数的传入
    // 1-25 14:50 可以用于bind等，方便绑定
    function flip (func) {
      return function (...args) {
        return func(...(args.reverse()))
      }
    }

    // 让函数的返回值取反
    function negate (predicate) {
      return function (...args) {
        return !predicate(...args)
      }
    }

    // 给函数的参数传入展开的数组
    function spread (func) {
      return function (array) {
        return func.apply(this, array)
        /// return func(...array)
      }
    }

    // var spread = (func) => func.call(this, )

    // 柯里化，部分调用，在不满参数的情况下返回函数，可以接着调用
    function curry (func, n = func.length) {
      // , arity = func.length
      return function (...args) {
        if(args.length >= n){
          return func(...args)
        } else {
          return curry (func.bind(null, ...arguments), n - args.length)
        }
      }
    }

    // 面试题
    // function add (...args) {
    //   var ret = add.bind(null, ...args)
    //   ret.valueOf = function () {
    //     return args.reduce((a , b) => a + b)
    //   }
    //   return ret
    // }


    // 实现占位符
    function bind (func, obj, ...bindargs) {
      return function (...args) {
        var baLen = bindargs.length
        var aLen = args.length
        var finLen = baLen + aLen
        var final = new Array(finLen)
        for(var i = 0; i < balen; i++){
          if(!(item.VERSION)){
            final[i] = bindargs[i]
          }
        } 
        for (var i = 0, l = 0; i < finLen; i++, l++){
          if(final[i] == undefined){
            final[i] = args[l]
          }
        }
        var result =  func.call(obj, ...final)
        return result
      }
    }

    // 带占位绑定功能的bind
    // function bind(f, ...fixedArgs) {
    //   return function(...args) {
    //     var fArgs = fixedArgs.slice()
    //     for(var i = 0, j = 0; i < fArgs.length; i++) {
    //       if (fArgs[i] == window) {
    //         fArgs[i] = args[j++]
    //       }
    //     }
    //     fArgs.push(args.slice(j))
    //     return f(...fArgs)
    //   }
    // }

    function partial (func, ...partials) {
      return function (...args) {
        return func.call(null, ...partials, ...args)
      }
    }

    function reject (collection, predicate = identity) {
      var result = []
      for(var item of collection){
        if(predicate(item)){
          result.push(item)
        }
      }
      return result
    }



    // 根据函数的返回值，确定哪些数据需要被求和
    function sumBy (ary, itera) {
      var func = iteratee(itera)
      var result = 0
      for(var item of ary){
        result += func(item)
      }
      return result
    }

    // 根据函数的返回值，确定哪些数据需要被去重
    function uniqBy (ary, itera = identity) {
      var set = new Set()
      var func = iteratee(itera)
      var result = []
      for (item of ary) {
        if(!(set.has(func(item)))){
          set.add(func(item))
          result.push(item)
        } 
      }
      return result
    }

    function filter (ary, predicate) {
      var result = []
      var func = iteratee(predicate)
      for(var i = 0; i < ary.length; i++){
        if(func(ary[i], i, ary)){
          result.push(ary[i])
        }
      }
      return result
    }

    function findKey (object, itera) {
      var func = iteratee(itera)
      for (var key in object) {
        if(func(object[key])){
          return key
        }
      }
    }

    function findLastKey (object, predicate) {
      var func = iteratee(predicate)
      var cache = []
      var reverseDic = {}
      for(var key in object) {
        cache.push(key, object[key])
      }
      for(var i = cache.length - 1; i >= 0; i-= 2){
        reverseDic[cache[i - 1]] = cache[i]
      }

      for (var key in reverseDic) {
        if(func(reverseDic[key])){
          return key
        }
      }
    }
    
    function property(name){
      return function (obj){
        return obj[name]
      }
    }

    // 
    // function isType (type) {
    //   return function (val) {
    //     return Object.prototype.toString.call(val) === '[object '+ type +']'
    //   }
    // }

    // var isNumber = isType('Number')
    // var isBoolean = isType('Boolean')

    function clone () {
      
    }


    var originCloning = []
    var targetCloning = []
    function cloneDeep (obj) {
      if(!obj){
        return obj
      }
      var idx = originCloning.indexOf(obj)
      if(idx >= 0){
        return targetCloning[idx]
      }

      var ret
      if(Array.isArray(obj)){
        ret = []
      } else {
        ret = {}
      }
      originCloning.push(obj)
      targetCloning.push(ret)

      for(var key in obj) {
        var val = obj[key]
        if(typeof val === 'object'){
          ret[key] = cloneDeep(val)
        } else {
          rek[key] = val
        }
      }

      return ret
    }

    function get (obj, path) {
      if (obj === null || obj === undefined){
        return undefined
      }
      for(var prop of path){
        obj = obj[prop]
        if(obj  === null || obj === undefined){
          return undefined
        }
      }

      return obj
    }

    function get (obj, path) {
      if(path.length === 0) {
        return obj
      }
      if(obj  === null || obj === undefined){
        return obj
      } 
      return get(obj[path[0]], path.slice(1))
    }

    function get (obj, path){
      return path.reduce((obj, prop) =>{
        if(obj  === null || obj === undefined){
          return undefined
        }
        return obj[prop]
      }, obj)
    }

    // String Method
    // String And RegExp

    function camelCase (string = '') {
      // var camel = string.replace(/^[^a-zA-Z0-9]+/g, ' ')
      //                   .replace(/[^a-zA-Z0-9]+$/g, ' ')
      //                   .replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+/g, ' ')
      //                   .toLowerCase().replace(/ (\w)/g, function(match, unit){
      //   return unit.toUpperCase().trim()
      // })
      // return camel
      var camel = string
      .replace(/^[^a-zA-Z0-9]+/g, '')
      .replace(/[^a-zA-Z0-9]+$/g, '')
      .toLowerCase().replace(/[^a-zA-Z]+(\w)/g, function(match, unit){
        return unit.toUpperCase().trim()
      })
      return camel
    }

    function capitalize (string = '') {
      return string.replace(/.*/g, (it) => it.toLowerCase()).replace(/^./g, (it) => it.toUpperCase())
    }

    function deburr (string = '') {
      return string.replace(/[āăąàáâãäåæ]+/g, 'a')
                   .replace(/[ĀĂĄ]+/g, 'A')
                   .replace(/[ćĉċč]+/g, 'c')
                   .replace(/[ĆĈĊČ]+/g, 'c')
                   .replace(/[ďđ]+/g, 'd')
                   .replace(/[ĎĐ]+/g, 'D')
                   .replace(/[ēĕėęěèéêë]+/g, 'e')
                   .replace(/[ĒĔĖĘĚ]+/g, 'E')
                   .replace(/[ĜĝĞğĠġĢģ]+/g, 'g')
                   .replace(/[ĤĥĦħ]+/g, 'h')
                   .replace(/[ĨĩĪīĬĭĮįİı]+/g, 'i')
                   .replace(/[ĲĳĴĵ]+/g, 'j')
                   .replace(/[Ķķĸ]+/g, 'k')
                   .replace(/[ĹĺĻļĽľĿŀŁł]+/g, 'l')
                   .replace(/[ŃńŅņŇňŉ]+/g, 'n')
                   .replace(/[Ŋŋ]+/g, 'u')
                   .replace(/[ŌōŎŏŐőŒœ]+/g, 'o')
                   .replace(/[ŔŕŖŗŘř]+/g, 't')
                   .replace(/[ŚśŜŝŞşŠš]+/g, 's')
                   .replace(/[ŢţŤťŦŧ]+/g, 't')
                   .replace(/[ũūŭůűųùúûü]+/g, 'u')
                   .replace(/[ŨŪŬŮŰŲ]+/g, 'U')
                   .replace(/[Ŵŵ]+/g, 'w')
                   .replace(/[ŶŷŸ]+/g, 'y')
                   .replace(/[ŹźŻżŽž]+/g, 'z')
                   .replace(/[ſ]+/g, 'v')
    }

    function escape (string = '') {
      return string.replace(/&/g, '&amp;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&apos;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
    }

    function unescape (string = '') {
      return string.replace(/&amp;/g, '&')
                   .replace(/&quot;/g, '\"')
                   .replace(/&apos;/g, '\'')
                   .replace(/&lt;/g, '<')
                   .replace(/&gt;/g, '>')
    }


    function escapeRegExp (string = '') {
       var result = string.replace(/\\/g, '\\\\')
                   .replace(/\^/g, '\\^')
                   .replace(/\|/g, '\\|')
                   .replace(/\$/g, '\\$')
                   .replace(/\./g, '\\.')
                   .replace(/\*/g, '\\*')
                   .replace(/\+/g, '\\+')
                   .replace(/\?/g, '\\?')
                   .replace(/\(/g, '\\(')
                   .replace(/\)/g, '\\)')
                   .replace(/\{/g, '\\{')
                   .replace(/\}/g, '\\}')
                   .replace(/\[/g, '\\[')
                   .replace(/\]/g, '\\]')
      return result
    }

    function kebabCase (string = '') {
      var kebab = string
                    .replace(/^[^a-zA-Z0-9]+/g, '')
                    .replace(/[^a-zA-Z0-9]+$/g, '')
                    .replace(/[^a-zA-Z0-9]+(?=\w)/g, '-')
      if(kebab.indexOf('-') === -1){
        kebab.replace(/(?=[A-Z])/g, '-')
      }
      return kebab.toLowerCase()
    }

    function lowerCase (string = '') {
      // var lower = string
      //               .replace(/^[^a-zA-Z0-9]+/g, '')
      //               .replace(/[^a-zA-Z0-9]+$/g, '')
      //               .replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+/g, ' ')
      // if(lower.indexOf(' ') === -1){
      //   lower.replace(/?=[A-Z]/g, ' ')
      // }              
      return lower.toLowerCase()
    }

    function lowerFirst (string = '') {
      return string.replace(/^./, (it) => it.toLowerCase()) 
    }

    function pad (string = "", length = 0, chars = ' ') {
      var result = string
      var cache = chars.split('')
      if(string.length < length){
        var padLength = length - string.length
        var padStart = Math.floor(padLength / 2)
        var padEnd = padLength - padStart
        var str = ''
        for(var i = 0; i < padStart; i++){
          var ca = i
          if(ca !== 0){
            ca %= cache.length
          }
          str += cache[ca] 
        }
        result = str + result
        str = ''
        for(var i = 0; i < padEnd; i++){
          var ca = i
          if(ca !== 0){
            ca %= cache.length
          }
          str += cache[ca] 
        }
        result += str
      }
      return result
    }

    function padEnd (string = "", length = 0, chars = ' ') {
      var result = string
      var cache = chars.split('')
      if(string.length < length){
        var padLength = length - string.length
        result = string.replace(/$/g, function () {
          var str = ''
          for(var i = 0; i < padLength; i++){
            var ca = i
            if(ca !== 0){
              ca %= cache.length
            }
            str += cache[ca] 
          }
          return str
        })
      }
      return result
    }

    function padStart (string = "", length = 0, chars = ' ') {
      var result = string
      var cache = chars.split('')
      if(string.length < length){
        var padLength = length - string.length
        result = string.replace(/^/g, function () {
          var str = ''
          for(var i = 0; i < padLength; i++){
            var ca = i
            if(ca !== 0){
              ca %= cache.length
            }
            str += cache[ca] 
          }
          return str
        })
      }
      return result
    }

    function upperCase () {
      // var upper = string
      //               .replace(/^[^a-zA-Z0-9]+/g, '')
      //               .replace(/[^a-zA-Z0-9]+$/g, '')
      //               .replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+/g, ' ')
      // if(upper.indexOf(' ') === -1){
      //   upper.replace(/?=[A-Z]/g, ' ')
      // }
      return upper.toUpperCase()
    }

    function upperFirst (string = '') {
      return string.replace(/^./, (it) => it.toUpperCase()) 
    }


    // function trim (string = "", chars = ' ') {
    //   var regExpStart = new RegExp("^[" + chars + "]+", 'gi')
    //   var regExpEnd = new RegExp("[" + chars + "]+$", 'gi')
    //   var result = string.replace(regExpStart, '')
    //   result = result.replace(regExpEnd, '')
    //   return result
    // }
    // 注意一下' '和'\\s'效果是不同的，测试样例中的可能不是普通空格
    function trim (string = "", chars = '\\s') {
      return string.replace(RegExp(`^[${chars}]+|[${chars}]+$`, 'gi'), '')
    }

    function trimEnd (string = "", chars = '\\s') {
      var regExpEnd = new RegExp("[" + chars + "]+$", 'g')
      var result = string.replace(regExpEnd, '')
      return result
    }

    function trimStart (string = "", chars = '\\s') {
      var regExpStart = new RegExp("^[" + chars + "]+", 'g')
      var result = string.replace(regExpStart, '')
      return result    
    }

    function endsWith (string = '', target, position = string.length){
      for(var i = string.length; i >= position; i--){
      }
      if(string[i] === target){
        return true
      } else {
        return false
      }
    }

    function parseInt (string, radix = 10){
      var result = 0
      for(var i = string.length - 1, j = 0; i >= 0; i--, j++){
        result += Number(string[i]) * Math.pow(10, j)
      }
      
      return Number(result.toString(radix))
    }

    function repeat (string = '', n = 1) {
      var result = ""
      for(var i = 0; i < n; i++){
        result += string
      }
      return result
    }


    function replace (string = '', pattern, replacement){
      if(typeof pattern === 'string'){
        var re = new RegExp(`${pattern}`)
      } else {
        var re = pattern
      }
      return string.split(re).reduce((result, it, index, ary) => {
        if(index < ary.length - 1){
          return result += it + replacement
        } else {
          return result += it
        }
      }, "")
    }

    function snakeCase (string = '') {
      // var snake = string
      //               .replace(/^[^a-zA-Z0-9]+/g, '')
      //               .replace(/[^a-zA-Z0-9]+$/g, '')
      //               .replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+/g, '_')
      //               .toLowerCase()
      return snake
    }

    function split (string = "", separator, limit) {
      return string.split(separator, limit)
    }

    // function split (string = '', separator, limit){
    //   var result = []
    //   for(var i = 0; i < string.length; i += separator.length){

    //   }
    //   limit = result.length
    //   return result.slice(0, limit)
    // }


    function startCase (string = '') {
      // var start = string
      //               .replace(/^[^a-zA-Z0-9]+/g, '')
      //               .replace(/[^a-zA-Z0-9]+$/g, '')
      //               .replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+/g, ' ')

      // if(start.indexOf(' ') === -1){
      //   start.replace(/?=[A-Z]/g, ' ')
      // }
      return start.replace(/\b./g, (it) => it.toUpperCase())
    }


    function startsWith (string = '', target, position = 0) {
      for(var i = 0; i < position; i++){
      }
      if(string[i] === target){
        return true
      } else {
        return false
      }
    }

    function toLower(string = ''){
      return string.toLowerCase()
    }

    function toUpper(string = ''){
      return string.toUpperCase()
    }

    // function words (string = '', pattern = /[a-zA-Z0-9]+/g) {
    //   return string.match(pattern)
    // }

    
    function words (string = '', pattern = /[a-zA-Z0-9]+/g) {
      var result = pattern
      if(typeof pattern === "string"){
        pattern = pattern.replace(/\//g, '').replace(/g/g, '').replace()
        result = new RegExp(`${pattern}`, 'g')
      }
      return string.match(result)
    }


    return {
      chunk: chunk,
      compact: compact,
      concat: concat,
      difference: difference,
      differenceBy: differenceBy,
      // differenceWith: differenceWith,
      drop: drop,
      dropRight: dropRight,
      dropRightWhile: dropRightWhile,
      fill: fill,
      head: head,
      indexOf: indexOf,
      initial: initial,
      intersection: intersection,
      intersectionBy: intersectionBy,
      reverse: reverse,
      concat: concat,
      join: join,
      last: last,
      lastIndexOf: lastIndexOf,
      nth: nth,
      pull: pull,
      pullAll: pullAll,
      pullAllBy: pullAllBy,
      tail: tail,
      take: take,
      takeRight: takeRight,
      without: without,
      xor: xor,
      flatten: flatten,
      flattenDeep: flattenDeep,
      flattenDepth: flattenDepth,
      identity: identity,
      groupBy: groupBy,
      mapValues: mapValues,
      mapKeys: mapKeys,
      add: add,
      divide: divide,
      max: max,
      mean: mean,
      min: min,
      multiply: multiply,
      subtract: subtract,
      sum: sum,
      inRange: inRange,
      eq: eq,
      Lte:Lte,
      Lt: Lt,
      gte: gte,
      gt: gt,
      toArray: toArray,
      toInteger: toInteger,
      toString: toString,
      toPairs: toPairs,
      fromPairs: fromPairs,
      forOwn: forOwn,
      isArguments: isArguments,
      isNull: isNull,
      isMap: isMap,
      isArray: isArray,
      isBoolean: isBoolean,
      isNumber: isNumber,
      isString: isString,
      isArrayLike: isArrayLike,
      isArrayBuffer: isArrayBuffer,
      isNaN: isNaN,
      isDate: isDate,
      isFinite: isFinite,
      isSymbol: isSymbol,
      isFunction: isFunction,
      isInteger: isInteger,
      isObject: isObject,
      isSet: isSet,
      isMatch: isMatch,
      isEqual: isEqual,
      property: property,
      after: after,
      before: before,
      unary: unary,
      ary: ary,
      flip: flip,
      negate: negate,
      spread: spread,
      bind: bind,
      partial: partial,
      reject: reject,
      sumBy: sumBy,
      uniq: uniq,
      uniqBy: uniqBy,
      union: union,
      unionBy: unionBy,
      property: property,
      curry: curry,
      filter: filter,
      findKey: findKey,
      findLastKey: findLastKey,
      sortedIndex: sortedIndex,
      sortedIndexBy: sortedIndexBy,
      sortedIndexOf: sortedIndexOf,
      sortedLastIndex: sortedLastIndex,
      sortedLastIndexOf: sortedLastIndexOf,
      unzip: unzip,
      zip: zip,
      sortedUniq: sortedUniq,
      isEmpty: isEmpty,
      isRegExp: isRegExp,
      toFinite: toFinite,
      toLength: toLength,
      get: get,
      camelCase: camelCase,
      capitalize: capitalize,
      deburr: deburr,
      escape: escape,
      unescape: unescape,
      escapeRegExp: escapeRegExp,
      kebabCase: kebabCase,
      lowerCase: lowerCase,
      lowerFirst: lowerFirst,
      pad: pad,
      padEnd: padEnd,
      padStart: padStart,
      upperCase: upperCase,
      upperFirst: upperFirst,
      trim: trim,
      trimEnd: trimEnd,
      trimStart: trimStart,
      endsWith: endsWith,
      parseInt: parseInt,
      repeat: repeat,
      replace: replace,
      snakeCase: snakeCase,
      split: split,
      startCase: startCase,
      startstWith: startsWith,
      toLower: toLower,
      toUpper: toUpper,
      words: words,
      isUndefined: isUndefined,
      isWeakMap: isWeakMap,
      isWeakSet: isWeakSet,
      isArrayLikeObject: isArrayLikeObject,
      isElement: isElement,
      isLength: isLength,
      isNative: isNative,
      isNill: isNill,
      isObjectLike: isObjectLike,
      matches: matches,
      zipObject: zipObject,
    };
  }();
