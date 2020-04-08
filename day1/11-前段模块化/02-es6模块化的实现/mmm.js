import {flag, sum} from './aaa.js';
if (flag) {
  console.log('小明是天才'),
  console.log(sum(20, 30))
}

import {num1, height} from './aaa.js'
console.log(num1)

import {mul, Person} from './aaa.js'

console.log(mul(20, 3))

const p = new Person()
p.run()

import addr from "./aaa.js"
addr('nb')

import * as aaa from './aaa.js' // 统一导入

console.log(aaa.flag)