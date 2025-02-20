/* 
  1.id、style、 class、 elements、 !important 請排優先順序 ( 大至小 )
  A : !important -> style -> id -> class -> elements

  2.請問 opacity、visibility、display 設為隱藏時，哪些屬性還會讓元素本身佔據網頁呢 ?
  A : opacity 跟 visibility

  3.請描述 sessionStorage 和 localStorage 的不同 ?
  A: 
    sessionStorage 關掉網頁就會清除所儲存的資料，且只能能在當前分頁。
    localStorage 需手動清除或是額外設定才會清除。

  4.請列出 JavaScript Falsy Value
  A: false 、 0 、 -0 、 空字串  、 null 、 undefined 、 NaN

  5.測驗結果為何 ?

    (1)
      var a = 0;
      function a() {};
      a();

      A: TypeError

    (2) 
      function b() {
        console.log(a);
        function a() {};
        var a = 3;
      }
      b();

      A: a(){ }

    (3)
      (function() {
          var a = b = 3;
      })();
      console.log(typeof a);
      console.log(typeof b);

      A: a:undefined，b:number

    
    (4)
      var a = {};
      a.a = a;
      console.log( a.a.a === a.a );

      A: true

    (5)
      (function () {
      })()
      (function () {
      })()

      A: TypeError

    (6)
      var a = 10;
      console.log( a++ * a++ );
      console.log( a );

      A: 110、12

*/