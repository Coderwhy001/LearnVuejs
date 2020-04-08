const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        data: '2006-9',
        price: '85',
        count:1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        data: '2006-2',
        price: '59',
        count:1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        data: '2008-10',
        price: '39',
        count:1
      },
      {
        id: 3,
        name: '《代码大全》',
        data: '2006-3',
        price: '128',
        count:1
      },
    ]
  },
  methods:{
    getFinalPrice(price) {
      // return '￥' + price.toFixed(1)
    },
    remove (index) {
      this.books.splice(index,1)
    } 
  },
  filters:{
    // showPrice(price) {
    //   return '￥' + price.toFixed(2)
    // }
  },
  computed:{
    totilPrice() {
      // let sum = 0
      // for (let i = 0; i < this.books.length; i++) {
      //    sum += this.books[i].price * this.books[i].count
      // }
      // return sum
      // let sum = 0
      // for (let i in this.books) {
        
      //   sum += this.books[i].price * this.books[i].count
      // }
      // return sum
      // let sum = 0
      // for (let item of this.books) {
        
      // }
      // return this.books.reduce(function (preValue, book) {
      //   return preValue + book.price * book.count
      // },0)
      return this.books.reduce((preValue, book) => {
        return preValue + book.price * book.count
      }, 0)
    }
  },


})

const nums = [10, 20, 111, 222, 444, 40, 50]
let total = nums.filter(n => n < 100).map(n => n *2).reduce((prevent, n ) => prevent + n);
console.log(total);