import { test, expect, request } from "@playwright/test";


test(`Verify Post API Automation for create booking`, async({request}) =>{
    const url = 'https://restful-booker.herokuapp.com/booking';
    const method = 'POST';
    const headers = {
        Accept : 'application/json'
    };
    const body = {     
        firstname : "Nilam",
        lastname : "Patil",
        totalprice : 111,
        depositpaid : true,
        bookingdates : {
            checkin : "2018-01-01",
            checkout : "2019-01-01"
        },
        additionalneeds : "Breakfast"
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
    const apiResponse = await respose.json();
    expect(apiResponse.bookingid).not.toBeNull();
    expect(apiResponse.booking.firstname).toBe('Nilam');
    expect(apiResponse.booking.lastname).toBe('Patil');
})