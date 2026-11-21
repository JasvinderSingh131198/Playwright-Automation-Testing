import { test, expect, request } from "@playwright/test";

let token : string;

test.beforeEach(async ({request}) =>{
    const url = "https://restful-booker.herokuapp.com/auth";
    const method = "POST";
    const headers = {
        Accept : 'application/json'
    };
    const body = {
        username : "admin",
        password  : "password123"
    }

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);
    console.log('Body                       : ', JSON.stringify(body));

    const respose = await request.post(url, {
        headers,
        data:body
    });
    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    console.log('Body                       : ', await respose.json());

    expect(respose.ok()).toBeTruthy();
    const apiRespose = await respose.json();
    token = apiRespose.token;
})


test(`Verify put API Automation for create booking`, async({request}) =>{
    const url = 'https://restful-booker.herokuapp.com/booking/7';
    const method = 'DELETE';
    const headers = {
        Accept : 'application/json',
        'Cookie' : `token=${token}`,
        'Content-Type' : `application/json`
    };

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);

    const respose = await request.delete(url, {
        headers,
    });

    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    expect(respose.status()).toBe(201);
})