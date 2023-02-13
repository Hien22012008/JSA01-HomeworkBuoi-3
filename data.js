var a = 5;

for (i = 0; i < a; i++) {
    var row = '';
    for (b = 0; b <= 5 - i; b++) {
        row += ' ';
    }

    for (c = 1; c <= 2 * i - 1; c++) {
        row += '1';
    }

    console.log(row);
}