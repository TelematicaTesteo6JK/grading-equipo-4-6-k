function testAustralianGrade(valorEsperado, valorReal) {
    if (valorEsperado==valorReal){
        return "Pass"
    }
    else 
        return "Fracasado"
}

function testCases() {
    let resultadoPruebas = 
    `TEST CASES
--> Equivalence Partitioning <--
Test data\tExpected result\tActual result\tStatus
-8.33\t\tError\t\t${australianGrade(-8.33)}\t${testAustralianGrade("Error", australianGrade(-8.33))}
45.66\t\tN\t\t${australianGrade(45.66)}\t\t${testAustralianGrade("N", australianGrade(45.66))}
53.43\t\tP\t\t${australianGrade(53.43)}\t\t${testAustralianGrade("P", australianGrade(53.43))}
71.33\t\tC\t\t${australianGrade(71.33)}\t\t${testAustralianGrade("C", australianGrade(71.33))}
78.06\t\tD\t\t${australianGrade(78.06)}\t\t${testAustralianGrade("D", australianGrade(78.06))}
99.99\t\tHD\t\t${australianGrade(99.99)}\t\t${testAustralianGrade("HD", australianGrade(99.99))}
134.44\t\tError\t\t${australianGrade(134.44)}\t${testAustralianGrade("Error", australianGrade(134.44))}
--> Boundary Value Analysis <--
Test data\tExpected result\tActual result\tStatus
-0.01\t\tError\t\t${australianGrade(-0.01)}\t${testAustralianGrade("Error", australianGrade(-0.01))}
0.00\t\tN\t\t${australianGrade(0.00)}\t${testAustralianGrade("N", australianGrade(0.00))}
49.99\t\tN\t\t${australianGrade(49.99)}\t\t${testAustralianGrade("N", australianGrade(49.99))}
50.00\t\tP\t\t${australianGrade(50.00)}\t\t${testAustralianGrade("P", australianGrade(50.00))}
62.99\t\tP\t\t${australianGrade(62.99)}\t\t${testAustralianGrade("P", australianGrade(62.99))}
63.00\t\tC\t\t${australianGrade(63.00)}\t\t${testAustralianGrade("C", australianGrade(63.00))}
72.99\t\tC\t\t${australianGrade(72.99)}\t\t${testAustralianGrade("C", australianGrade(72.99))}
73.00\t\tD\t\t${australianGrade(73.00)}\t\t${testAustralianGrade("D", australianGrade(73.00))}
82.99\t\tD\t\t${australianGrade(82.99)}\t\t${testAustralianGrade("D", australianGrade(82.99))}
83.00\t\tHD\t\t${australianGrade(83.00)}\t\t${testAustralianGrade("HD", australianGrade(83.00))}
100.00\t\tHD\t\t${australianGrade(100.00)}\t\t${testAustralianGrade("HD", australianGrade(100.00))}
100.01\t\tError\t\t${australianGrade(100.01)}\t${testAustralianGrade("Error", australianGrade(100.01))}
`
console.log(resultadoPruebas)
return resultadoPruebas
}

// testCases();