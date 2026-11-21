import { test } from "@playwright/test";

test.describe('verify partial parallel', ()=>{

    test.describe.configure({mode: 'parallel'});

    test('login with valid credential', async() => {
        console.log("login with valid credential");
    });

     test('login with invalid credential', async() => {
         console.log("login with invalid credential");
    });

      test('login with valid username and invalid password', async() => {
        console.log("login with valid username and invalid password");
    });

});


test.describe('verify serial execution', ()=>{

    test.describe.configure({mode: 'serial'});

    test('test 1', async() => {
        console.log("test 1");
    });

     test('test 2', async() => {
         console.log("test 2");
    });

      test('test 3', async() => {
        console.log("test 3");
    });
 
});