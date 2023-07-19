//Надрукувати повну таблицю множення від 1 до 10.

let i = 1;
let j = 1;

document.write("<table border=\"1\" cellspacing=\"0\" cellpadding=\"2\" align=\"left\">")

for (i = 1; i <= 10; i++) {
  document.write("<tr>");
    for (j = 1; j <= 10; j++) {
      document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")
    } 
    document.write("</tr>")
  }
  document.write("</table>")