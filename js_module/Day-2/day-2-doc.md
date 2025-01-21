# JavaScript Notes

## **Data Types in JavaScript**

### **Primitive Data Types**
1. **String**
   - Represents textual data.
   - Example: `let name = "John";`

2. **Number**
   - Represents numeric values.
   - Example: `let age = 25;`

3. **Boolean**
   - Represents `true` or `false` values.
   - Example: `let isStudent = true;`

4. **Undefined**
   - A variable declared but not assigned a value.
   - Example: `let score; // Undefined`

5. **Null**
   - Represents an intentional absence of any value.
   - Example: `let empty = null;`

6. **Symbol**
   - Represents a unique identifier.
   - Example: `let sym = Symbol("id");`

7. **BigInt**
   - Used for integers larger than `Number.MAX_SAFE_INTEGER`.
   - Example: `let bigNumber = 123456789012345678901234567890n;`

### **Non-Primitive Data Type**
1. **Object**
   - Represents a collection of properties and methods.
   - Example:
     ```javascript
     let person = {
       name: "John",
       age: 30
     };
     ```

---

## **Variables**

### **Declaring Variables**
1. **`var`**
   - Function-scoped or globally scoped.
   - Can be re-declared and updated.
   - Example:
     ```javascript
     var x = 5;
     x = 10;
     ```

2. **`let`**
   - Block-scoped.
   - Can be updated but not re-declared in the same scope.
   - Example:
     ```javascript
     let y = 15;
     y = 20;
     ```

3. **`const`**
   - Block-scoped.
   - Cannot be updated or re-declared.
   - Example:
     ```javascript
     const z = 25;
     // z = 30; // Error: Assignment to constant variable
     ```

---

### **Rules for Naming Variables**
1. Variable names must begin with a letter, underscore (`_`), or dollar sign (`$`).
2. Variable names cannot start with a number.
3. Variable names are case-sensitive.
4. Reserved keywords cannot be used as variable names (e.g., `let`, `var`, `const`).

### **Examples and Best Practices**
1. Use meaningful names:
   ```javascript
   let userAge = 30;
   let userName = "Alice";
   ```

2. Follow camelCase for naming variables:
   ```javascript
   let firstName = "Bob";
   ```

3. Avoid using reserved keywords:
   ```javascript
   // Incorrect:
   let var = 5; // Error
   ```

4. Declare variables in the appropriate scope using `let` or `const` instead of `var` for modern JavaScript.

---

## **Operations**

### **Arithmetic Operators**
1. **Addition (`+`)**
   - Adds two numbers.
   - Example:
     ```javascript
     let sum = 5 + 10; // 15
     ```

2. **Subtraction (`-`)**
   - Subtracts one number from another.
   - Example:
     ```javascript
     let difference = 15 - 5; // 10
     ```

3. **Multiplication (`*`)**
   - Multiplies two numbers.
   - Example:
     ```javascript
     let product = 5 * 4; // 20
     ```

4. **Division (`/`)**
   - Divides one number by another.
   - Example:
     ```javascript
     let quotient = 20 / 4; // 5
     ```

5. **Modulus (`%`)**
   - Returns the remainder of a division.
   - Example:
     ```javascript
     let remainder = 10 % 3; // 1
     ```

6. **Exponentiation (`**`)**
   - Raises a number to the power of another.
   - Example:
     ```javascript
     let power = 2 ** 3; // 8
     ```

### **Comparison Operators**
1. **Equal (`==`)**
   - Compares values, ignoring type.
   - Example:
     ```javascript
     console.log(5 == "5"); // true
     ```

2. **Strict Equal (`===`)**
   - Compares both value and type.
   - Example:
     ```javascript
     console.log(5 === "5"); // false
     ```

3. **Not Equal (`!=`)**
   - Checks if values are not equal, ignoring type.
   - Example:
     ```javascript
     console.log(5 != "5"); // false
     ```

4. **Strict Not Equal (`!==`)**
   - Checks if values and types are not equal.
   - Example:
     ```javascript
     console.log(5 !== "5"); // true
     ```

5. **Greater Than (`>`)**
   - Checks if one value is greater than another.
   - Example:
     ```javascript
     console.log(10 > 5); // true
     ```

6. **Less Than (`<`)**
   - Checks if one value is less than another.
   - Example:
     ```javascript
     console.log(5 < 10); // true
     ```

7. **Greater Than or Equal (`>=`)**
   - Checks if one value is greater than or equal to another.
   - Example:
     ```javascript
     console.log(10 >= 10); // true
     ```

8. **Less Than or Equal (`<=`)**
   - Checks if one value is less than or equal to another.
   - Example:
     ```javascript
     console.log(5 <= 10); // true
     ```

### **Logical Operators**
1. **AND (`&&`)**
   - Returns `true` if both conditions are true.
   - Example:
     ```javascript
     console.log(true && false); // false
     ```

2. **OR (`||`)**
   - Returns `true` if at least one condition is true.
   - Example:
     ```javascript
     console.log(true || false); // true
     ```

3. **NOT (`!`)**
   - Reverses the truth value.
   - Example:
     ```javascript
     console.log(!true); // false
     ```

### **Assignment Operators**
1. **Assignment (`=`)**
   - Assigns a value to a variable.
   - Example:
     ```javascript
     let x = 10;
     ```

2. **Add and Assign (`+=`)**
   - Adds a value and assigns the result to a variable.
   - Example:
     ```javascript
     let x = 10;
     x += 5; // x = 15
     ```

3. **Subtract and Assign (`-=`)**
   - Subtracts a value and assigns the result to a variable.
   - Example:
     ```javascript
     let x = 10;
     x -= 5; // x = 5
     ```

4. **Multiply and Assign (`*=`)**
   - Multiplies a value and assigns the result to a variable.
   - Example:
     ```javascript
     let x = 10;
     x *= 2; // x = 20
     ```

5. **Divide and Assign (`/=`)**
   - Divides a value and assigns the result to a variable.
   - Example:
     ```javascript
     let x = 10;
     x /= 2; // x = 5
     ```

6. **Modulus and Assign (`%=`)**
   - Computes the modulus and assigns the result to a variable.
   - Example:
     ```javascript
     let x = 10;
     x %= 3; // x = 1
     ```

