# Coronavirus Report Website - Testing details

<a href="https://github.com/cotebarrientos/2nd-milestone-project-coronavirus-report/blob/master/README.md" target="_blank">Main README.md file</a>

<a href="https://cotebarrientos.github.io/2nd-milestone-project-coronavirus-report/" target="_blank">View website in GitHub Pages</a>

## Testing

The testing process is outlined below. It includes:

- Validating HTML, CSS and Javascript code.
- Testing website compatibility on different browsers.
- Testing responsiveness in different screen sizes.
- Manually testing the functionality of the links.
- Manually testing on Analytics page, checking all the charts renders in properly way.
- Manually testing on Contact Us page, checking the contact form is working correctly.

### Validating HTML, CSS and Javascript code.

In order for the written code to meet all requirements, the following tests were performed.

#### HTML

#### CSS

I checked my CSS code with the <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C Markup Validation Service</a>. 
This test did not produce any error, it only shows 3 warnings.

### Compatibility with different browsers

### Responsiveness in different screen sizes

### Manually testing the functionality of the links

The following test were made to check that all links responded as they should:

- Menu bar items were clicked on from each page to make sure that they navigate to the correct page and that they are correctly shown as 'active' when selected.
- Clicking on the logo in the menu bar leads the user back to the home page.
- All buttons were clicked on to check that they take the user to the correct page.
- The World Health Organization links contained in the COVID-19 Information page were checked to ensure that they led to the corresponding page.
- The contact form *"Send Message"* button only accepts the form when it has completed with all required fields filled in. After that, the *Send Message* button opens a modal window with a successful message as expected. 
- The *scroll back to top* button in the Analytics page works properly.

### Manually testing on Analytics page

### Manually testing on Contact Us page

The contact form was made responsive using the EmailJS service. In order to test that the contact form works properly, I did the following tests:

 1. I tried submitting the form without the **name**.

![ScreenShot1](/assets/images/contact-form-test-1.png)

2. I tried submitting the form without the **email**.

![ScreenShot2](/assets/images/contact-form-test-2.PNG)

3. I tried submitting the form without the **message**.

![ScreenShot3](/assets/images/contact-form-test-3.png)

As you can see, the contact form produced the correct error message as expected.

The following test consisted of filling out the entire contact form and checking that the message was indeed sent.

-  As you can see, the message was sent correctly, and a modal window appears with a message that warns us that the message was indeed sent.

![ScreenShot4](/assets/images/contact-form-test-4.png)

- In this screenshot, you can see that the message has indeed reached the email that has been used to receive the users' messages.

![ScreenShot5](/assets/images/contact-form-test-5.png)