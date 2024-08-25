window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

/**
 * This function returns a greeting message to a person
 * @param {string} name - name of the person to greet
 * @returns greeting message
 */
export function greet(name) {
    return `Hello ${name}`;
}
