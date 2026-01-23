let subject = ["HTML","CSS","JavaScript","Python","Java"];
let marks = [85,90,80,75];
let student = ["Alice",26," Mumbai"]

document.writeln("subject:",subject);
document.writeln("marks",marks);
document.writeln("student:",student);

result = 0;
for (let  i = 0 ;i < marks.length;i++){
    result+= marks[i];
}
document.writeln(result);
