/// <reference path="../steps.d.ts" />
Feature('HomePage');

Before((I) => { 
    I.amOnPage('http://localhost:8080/');
    I.wait(3);
  });

Scenario('test home page link in nav bar', (I) => {

I.see('Home');
I.click('Home');
I.amOnPage("http://localhost:8080/");
});


Scenario('test trending books list', (I) => {
  I.see('Trending');
  I.see('bookCover');
});
