const myobj = {
  myMethord () {
    console.log(this) //** myobj */
    const callback = function () {
      console.log(this) //**window */
    }
    setTimeout(callback, 0)//window function
  }
}

myobj.myMethord()
