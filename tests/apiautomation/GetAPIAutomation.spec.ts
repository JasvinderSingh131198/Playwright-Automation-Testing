
import { test, expect, request } from "@playwright/test";


test(`Verify Get API Automation for all booking Ids`, async({request}) =>{
    const url = 'https://restful-booker.herokuapp.com/booking';
    const method = 'GET';
    const headers = {
        Accept : 'application/json'
    }

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);

    const respose = await request.get(url, {
        headers
    });

    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    console.log('Body                       : ', await respose.json());

    expect(respose.ok()).toBeTruthy();
    const body = await respose.json();
    expect(body.bookingid).not.toBeNull();
})


test(`Verify Get API Automation for specific booking Ids`, async({request}) =>{
    const url = 'https://restful-booker.herokuapp.com/booking/1';
    const method = 'GET';
    const headers = {
        Accept : 'application/json'
    }

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);

    const respose = await request.get(url, {
        headers
    });

    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    console.log('Body                       : ', await respose.json());

    expect(respose.ok()).toBeTruthy();
    const body = await respose.json();
    expect(body.firstname).toBe('Susan');
})


test(`Verify Get API Automation for query params`, async({request}) =>{
    const url = 'https://reqres.in/api/users';
    const method = 'GET';
    const headers = {
        Accept : 'application/json'
    }

    const params = {
        page : 2
    };

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);

    const respose = await request.get(url, {
        headers,
        params
    });

    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    console.log('Body                       : ', await respose.json());

    expect(respose.ok()).toBeTruthy();
    const body = await respose.json();
    expect(body.page).toBe(2);
    expect(body.data[0].email).toBe('michael.lawson@reqres.in');
})