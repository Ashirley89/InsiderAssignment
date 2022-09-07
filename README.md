# InsiderAssignment
Playwright Automation assignment on Insider Magento E-Commerce

Scenario 1 (Purchase an Item)
- Navigate to URL https://magento.softwaretestingboard.com/
- Click "Women" tab
- Click "Tees"
- Select first tee
- Select "Large" size
- Select color "Yellow"
- Click Add to Cart button
- Click Shopping Cart
- Click Proceed to Checkout
- Click and type Email Address
- Click and type First Name
- Click and type Last Name
- Click and type Street Name
- Click and type City
- Click and select State
- Click and type Zip Code
- Click and Type Phone Number
- Select Shipping Method
- Click Next
- Click Place Order
- Assert thank you message displays

Scenario 2 (Submit a Contact Us Message)
- Navigate to https://magento.softwaretestingboard.com/contact/
- Click PageDown to navigate to bottom of page
- Click and type Name
- Click and type Email
- Click and type Phone Number
- Click and type Comment
- Click Submit

Scenario 3 (Use the Search box feature to find a Watch and add it to the Cart)
- Navigate to https://magento.softwaretestingboard.com/contact/
- Click Search bar and type Watch
- Click Search button
- Click Watch Image
- Click Add to Cart button
- Assert Watch has been added to Cart
