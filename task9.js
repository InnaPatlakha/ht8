// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.

let naturalNum = parseInt(prompt("Введіть натуральне число"));
document.write("Ви ввели число: " + naturalNum + "<br>");
let count = 0,
  summ = 0;
  
for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    document.write("Дільник цього числа: " + i  + "<br>");

    if (i % 2 === 0) {
      count++;
      summ += i;
    }
  }
}

document.write("Кількість парних дільників: " + count + "<br>");
document.write("Сума парних дільників: " + summ + "<br>");