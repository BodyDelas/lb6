//ВОЗВЕДЕНИЕ В СТЕПЕЬ

function fooDegree(a, n) {
  let res = 1;

  for (i = 0; i < n; i++) {
    res = res * a;
  }
  return res;
}

console.log(fooDegree(2, 4));

// НАХОЖДЕНИЕ НОД

function fooNod(a, b) {
  function primeNumbers(a) {
    let i = 2;
    let mas = [];
    while (i <= a) {
      if (a % i == 0) {
        a = a / i;
        mas.push(i);
      } else {
        i++;
      }
    }
    return mas;
  }

  let primeNumberA = primeNumbers(a);
  let primeNumberB = primeNumbers(b);
  console.log(primeNumberA);
  console.log(primeNumberB);

  let res = 1;
  //цикл для прохождения каждого элемента массива
  for (i = 0; i < primeNumberA.length; i++) {
    //проверяет содержание элемента в массиве
    if (primeNumberB.includes(primeNumberA[i])) {
      //включает
      res = res * primeNumberA[i];
      // удаление элемента из массива b
      primeNumberB = primeNumberB.filter(
        (_, idx) => idx != primeNumberB.indexOf(primeNumberA[i])
      );
      console.log(primeNumberB);
    }
  }
  return res;
}

console.log(fooNod(36, 120));

//НАИМЕНЬШАЯ ЦИФРА

function fooMinNumber(a) {
  let arr = a.toString().split("");
  console.log(arr);

  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  console.log(arr);

  return Math.min(...arr);
}

console.log(fooMinNumber(7894));

//ПОИСК

function fooPluralization(n) {
  let res;
  let a = n;
  let end;
  console.log(a, a % 10, a % 100, 2 <= a && a <= 4);
  if (a == 1) {
    end = " запись";
    res = "В результате выполнения запроса была найдена ";
  } else if (a % 10 == 0) {
    end = " записей";
    res = "В результате выполнения запроса было найдено ";
  } else if (2 <= a && a <= 4) {
    end = " записи";
    res = "В результате выполнения запроса было найдено ";
  } else if (5 <= a % 100 && a % 100 <= 20) {
    end = " записей";
    res = "В результате выполнения запроса было найдено ";
  } else if (21 <= a % 100 && a % 100 <= 99 && 5 <= a % 10 && a % 10 <= 9) {
    end = " записей";
    res = "В результате выполнения запроса было найдено ";
  } else if (21 <= a % 100 && a % 100 <= 99 && 2 <= a % 10 && a % 10 <= 4) {
    end = " записи";
    res = "В результате выполнения запроса было найдено ";
  } else if (21 <= a % 100 && a % 100 <= 99 && a % 10 == 1) {
    end = " запись";
    res = "В результате выполнения запроса была найдена ";
  } else if (1 <= a % 100 && a % 100 <= 9 && 2 <= a % 10 && a % 10 <= 4) {
    end = " записи";
    res = "В результате выполнения запроса было найдено ";
  } else if (1 <= a % 100 && a % 100 <= 9 && 5 <= a % 10 && a % 10 <= 9) {
    end = " записей";
    res = "В результате выполнения запроса было найдено ";
  } else if (1 <= a % 100 && a % 100 <= 9 && a % 10 == 1) {
    end = " запись";
    res = "В результате выполнения запроса была найдена ";
  }

  let next = res + a + end;
  return next;
}

console.log(fooPluralization(11));

//ЧИСЛА ФИБОНАЧИ

function fooFibb(n) {
  let prev = 0,
    next = 1;

  while (n > 1) {
    [prev, next] = [next, prev + next]; //деструктурирующая присваивание
    n--;
  }

  return prev; // если начинаем с 0
}

console.log(fooFibb(3));
