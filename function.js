function australianGrade(decimalGrade) {
    if(decimalGrade > 0 && decimalGrade <= 49.99)
        return "N";
    else if (decimalGrade >= 50  && decimalGrade <= 62.99)
        return "P";
    else if (decimalGrade >= 63 && decimalGrade <= 72.99)
        return "C";
    else if (decimalGrade >= 73 && decimalGrade <= 82.99)
        return "D";
    else if (decimalGrade >= 83 && decimalGrade <= 100)
        return "HD";
}