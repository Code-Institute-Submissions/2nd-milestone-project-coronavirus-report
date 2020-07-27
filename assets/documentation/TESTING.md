# Coronavirus Report Website - Testing details

<a href="https://github.com/cotebarrientos/2nd-milestone-project-coronavirus-report/blob/master/README.md" target="_blank">Main README.md file</a>

<a href="https://cotebarrientos.github.io/2nd-milestone-project-coronavirus-report/" target="_blank">View website in GitHub Pages</a>

## Testing

The testing process is outlined below. It includes:

- Validating HTML, CSS and Javascript code.
- Testing website compatibility on different browsers.
- Testing responsiveness in different screen sizes.
- Manually testing the functionality of the links.
- Manually testing on Analytics page, checking that all the charts render in a proper way.
- Manually testing on Contact Us page, checking the contact form is working correctly.

### Validating HTML, CSS and Javascript code.

In order for the code to meet all requirements, the following tests were performed.

#### HTML

My HTML code has passed through the <a href="https://validator.w3.org/" target="_blank">W3C Markup Validation Service</a>. 

1. **Home Page *(index.html)***: This test did not produce any error, it only show 2 warnings.

![ScreenShot1](/assets/testing-img/home-page-test.PNG)

2. **Analytics Page *(analytics.html)***: The validator brought up some warnings that explained that it had several empty items on this page. However, this is done intentionally, as the content of these elements is added with JavaScript once the chart is loaded. 

![ScreenShot2](/assets/testing-img/analytics-page-test.PNG)

3. **COVID-19 Information Page *(covid-19_information.html)***: This file passed without any errors or warnings.

![ScreenShot3](/assets/testing-img/covid-info-test.PNG)

4. **Contact Us Page *(contact_us.html)***: It passed the test, but it shown me that I did not need a `type="text/javascript"` in my script tag. However, as it was for EmailJS and copied directly from the service's instructions, I decided to keep it in as it was. And also, I added a title inside of my contact form in order to pass the test.

![ScreenShot4](/assets/testing-img/contact-page-test.PNG)

#### CSS

I checked my CSS code with the <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C Markup Validation Service</a>. 
This test did not produce any error, it only shows 3 warnings.

![ScreenShot1](/assets/testing-img/style-css-test.PNG)
![ScreenShot2](/assets/testing-img/style-css-test2.PNG)

#### JavaScript

I used <a href="https://jshint.com/" target="_blank">JSHint</a> to check my JavaScript files.

1. **controller.js**: This file passed without any errors, just I had 7 warnings about the same extension and 2 warnings about the if (?) shortcut.

![ScreenShot2](/assets/testing-img/controller-js-test.PNG)

2. **charts.js**: This file passed without any errors, just I had 21 warnings about the same extension.

![ScreenShot2](/assets/testing-img/charts-js-test.PNG)

3. **sendEmail.js**: This file passed without any errors.

![ScreenShot3](/assets/testing-img/sendEmail-js-test.PNG)

### Compatibility with different browsers

In order to ensure that the website would work properly in the following browsers, responsiveness tests, button and link checks were done, as well as tests on the look of the website to ensure that the colors, images and fonts used would display correctly.

- Mozilla Firefox
- Google Chrome
- Microsoft Edge
- Apple Safari

### Responsiveness in different screen sizes

I have made the following response tests in order to ensure that the website operates correctly and at the same time that its components are seen harmoniously arranged in different screen sizes, so that I used the following tools to help me.

- **Responsinator**: This website was used to simulate different screen sizes of mobile devices. This was really useful, because it showed in real time the aspect of the tested website, helping to discover different responsiveness problems.

Here as you can see, there are some screenshots of how the website looks in different screen sizes.

![ScreenShot1](/assets/testing-img/android-1.jpg)
![ScreenShot2](/assets/testing-img/android-2.jpg)
![ScreenShot3](/assets/testing-img/iphone-1.jpg)
![ScreenShot4](/assets/testing-img/iphone-2.jpg)
![ScreenShot5](/assets/testing-img/tablet-1.jpg)
![ScreenShot6](/assets/testing-img/tablet-2.jpg)

- **Mozilla Firefox**: This browser was used to check the behavior of the web page in different screen sizes using the Developer Tools. Tests consisted in testing the appearance of the fonts used, the aspect of colors and backgrounds, the order and space used by the different elements that make up the web page, and also the behavior of the charts.

- **Google Chrome**: This browser was used to check the behavior of the web page in different screen sizes using the Developer Tools. As in the previous browser, different tests were performed checking the aspect of the font used, colors and backgrounds, behavior of the charts, and finally, the space used by the elements of the website. In addition, a contrast was made between both browsers, checking for any existing differences.

- **Xiaomi Mi A1**: This mobile device was used to test the behavior of the website, using browsers such as Chrome, Mozilla Firefox and DuckDuckGo. At the beginning of the project, the website had many problems on this device, for example, the charts did not adapt well when rotating the screen, as they kept the first size loaded, despite having created different media queries. The solution for this problem was to create a function that would execute this task, and this was done for each chart.

![ScreenShot7](/assets/testing-img/solution-responsiveness-charts.PNG)

After all these tests, the website has approved all the performed tests.

### Manually testing the functionality of the links

The following test were made to check that all links responded as they should:

- Menu bar items were clicked on from each page to make sure that they navigate to the correct page and that they are correctly shown as 'active' when selected.
- Clicking on the logo in the menu bar leads the user back to the home page.
- All buttons were clicked on to check that they take the user to the correct page.
- The World Health Organization links contained in the COVID-19 Information page were checked to ensure that they led to the corresponding page.
- The contact form *"Send Message"* button only accepts the form when it has completed with all required fields filled in. After that, the *Send Message* button opens a modal window with a successful message as expected. 
- The *scroll back to top* button in the Analytics page works properly.

### Manually testing on Analytics page

The Analytics page is the most important part of the whole website, because here you will find all the interactivity (using Javascript). This page consists of 3 sections in which each one displays 3 charts related to the number of cases by COVID-19, as well as the deaths and recoveries by this disease, therefore it was very important to make different tests here, because if this part fails, it means the total failure of the project. To make sure that everything worked properly, the following tests were performed:

#### 1. When the Analytics page is loaded.

- When loading the page in the **Globally Report section**, it should load the 3 charts showing 7-day information, since the *datepickers* have a default range of 1 week.

![ScreenShot1](/assets/testing-img/analytics-001.jpg)

**Result: test passed**

- When loading the page in the **Report by Country section**, it should load 3 charts, showing 7 day information for Ireland (default country in the dropdown), since the datepickers have a range of 1 week by default.

![ScreenShot2](/assets/testing-img/analytics-002.jpg)

**Result: test passed**

- When loading the page in the **Comparison by Country section**, it should load 3 charts, showing 7 day information for Ireland and USA (default countries in the dropdowns), since the datepickers have a range of 1 week by default.

![ScreenShot3](/assets/testing-img/analytics-003.jpg)

**Result: test passed**

#### 2. Globally Report tests.

- In the Globally Report section, I selected the datepicker for "From" and changed it to January 22nd The expected behavior is that the charts will change along with the change made.

![ScreenShot4](/assets/testing-img/analytics-004.jpg)

**Result: test passed**

- In the Globally Report section, I selected both datepickers for "From" I changed it to January 22nd and for "Until" I changed it to February 22nd. The expected behavior is that the charts will change along with the change made.

![ScreenShot5](/assets/testing-img/analytics-007.jpg)

**Result: test passed**

- The tooltip inside each chart has to show information about the day and the data consulted.

![ScreenShot6](/assets/testing-img/analytics-tooltip.jpg)

**Result: test passed**

#### 3. Report by Country tests.

- In the Report by Country section, I selected the checkbox of "Projected", the expected behavior is this checkbox has to display 2 weeks of projected cases on cases chart.

![ScreenShot7](/assets/testing-img/analytics-005.jpg)

**Result: test passed**

- In the Report by Country section, I selected a country from the country dropdown (Chile), and then I selected the datepicker for "From" and changed it to June 1st. The expected behavior is that the charts will change along with the change made.

![ScreenShot8](/assets/testing-img/analytics-008.jpg)

**Result: test passed**

- The tooltip inside each chart has to show information about the day and the data consulted.

![ScreenShot9](/assets/testing-img/charts-tooltip.jpg)

**Result: test passed**

- In different tests, I discovered that the API I used to query the country information, did not contain data about the coronavirus recovered for UK, therefore it could not load information into the chart and at the same time it showed me a string that said "[object Object"]. This didn't look good so I opted to fix this by creating a function to prevent that.

As you can see here, this is what it looked like **before** the changes were made.

![ScreenShot10](/assets/testing-img/noData.png) 

As you can see in this image, so you can see now the problem described above, totally solved.

![ScreenShot11](/assets/testing-img/analytics-010.jpg)

This is the function used to prevent the problem.

![ScreenShot12](/assets/testing-img/function-noData.PNG)

#### 3. Comparison by Country tests.

- In the Comparison by Country section, I selected 2 countries from the country dropdown (Argentina and Chile), and then I selected the datepicker for "From" and changed it to June 1st. The expected behavior is that the charts will change along with the change made.

![ScreenShot13](/assets/testing-img/analytics-006.jpg)

**Result: test passed**

- The tooltip within each chart has to show information about the two selected countries, the date chosen and the data consulted.

![ScreenShot14](/assets/testing-img/comparison-countries-tooltip.jpg)

**Result: test passed**

- In the Comparison by Country section, I selected 2 countries from the country dropdown (China and Brazil), and then I selected the datepicker for "From" and changed it to March 1st and for "Until" I changed it to July 1st. The expected behavior is that the charts will change along with the change made.

![ScreenShot15](/assets/testing-img/analytics-009.jpg)

*Note*: The charts show the information consulted for both countries, only for the chosen date range (more than one month) it takes a little longer to render the data.

**Result: test passed**

### Manually testing on Contact Us page

The contact form was made responsive using the EmailJS service. In order to test that the contact form works properly, I did the following tests:

 1. I tried submitting the form without the **name**.

![ScreenShot1](/assets/testing-img/contact-form-test-1.png)

2. I tried submitting the form without the **email**.

![ScreenShot2](/assets/testing-img/contact-form-test-2.PNG)

3. I tried submitting the form without the **message**.

![ScreenShot3](/assets/testing-img/contact-form-test-3.png)

As you can see, the contact form produced the correct error message as expected.

The following test consisted of filling out the entire contact form and checking that the message was indeed sent.

-  As you can see, the message was sent correctly, and a modal window appears with a message that warns us that the message was indeed sent.

![ScreenShot4](/assets/testing-img/contact-form-test-4.png)

- In this screenshot, you can see that the message has indeed reached the email that has been used to receive the users' messages.

![ScreenShot5](/assets/testing-img/contact-form-test-5.png)