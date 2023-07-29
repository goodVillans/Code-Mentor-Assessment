# Scores

**Completeness:** 3/4
**Efficiency:** 2/4
**Style:** 2/4
**Documentation:** 2/4

## Positive aspects of the submission

The two methods required for the task were indeed created: one to reverse a string and another to generate the Fibonacci series up to a given number.
Both methods show a sound approach to the logic.

## Aspects of the submission that could be improved

When your code is run, there are a couple of compilation errors being displayed related to the following:

- Inconsistencies in naming conventions (namely in your string reversal method).
- Repeat declaration of already defined variables.

The Fibonacci function is not recursive, while the assignment requested a recursive implementation. A recursive version of the function would be a more efficient and elegant solution.
Additionally, the maxNumber variable in the Fibonacci function is already defined as a method parameter, so it should not be redefined inside the function.

In terms of **style**, method and variable names should follow the camelCase naming conventions per Java best practices. For example,
"reverse_string" should be "reverseString". Avoid using generic names like "function" for your methods. Give it a meaningful name that clearly indicates its purpose, like "printFibonacciSequence".
Please also be midful of spacing and indentation of code in a project as this can play a huge role in the readability of your code.

Regarding **documentation**, while there are some comments, they could be made more informative and relevant.
Using comments to describe the purpose of a method or explaining more complex parts of the code would be beneficial.

The main method contains hardcoded outputs. In the future, try to avoid hardcoding and let your functions produce the output.

## Overall feedback

The code is a good start and it achieves the basic logical requirements of the assignment. However, it needs some improvements to fully meet the above specifications. Keep going, coding is all about learning and improving! I look Forward to seeing your updated solution.
