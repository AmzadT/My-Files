## lifecycle of automation

    1. scope of test automation
    2. selection of automation tools
    3. test plan, design, and strategy
    4. test enviroment setup
    5. test scripts and execution
    6. test results and reports

Beginner ==> Xpath, cookies, JQuery, DOM, HTTP methods

Intermediate/Medium ==> API, Webdriver, Selenium, Appium, TestNG, JUnit, Maven
languages ==> javascript, python
tools & frameworks ==> jenkins, pytest, cron, selenium grid, selenium, allure, cypress.io, pycharm, testNG, cucumber
cloud CBT platforms ==> browserStack, sauceLabs

Advanced ==> API testing, mobile automation, appium, security, performance testing tools --> (JMeter, loadRunner), CI/CD, Docker, Kubernetes, Microservices, DevOps, CI/CD pipelines, Jenkins

Manual Testing ==> whiteBox testing, blackBox testing, unit testing, system testing, integration testing, Acceptance testing, reporting - (emails), re-Testing bugs, Part-2 ==> grayBox testing, exploratory testing, smoke testing, sanity testing, regression testing, exploratory testing

BlackBox testing ==> equivalence partitioning, boundary value analysis, decision table testing, graph based testing, methods, comparision testing, error guessing, Part-2 ==> state transition testing, use case testing, exploratory testing, equivalence partitioning, boundary

installation ==>

- nodejs.org
- npm install --save-dev cypress@4.7.0 -g
- npx cypress open
- cypress run

Web ==> frontend UI testing - (cypress), selenium, UFT, testCompletekatalon studio
Mobile ==> appium, Espresso, XCUITest, selendroid, calabash, Appium Studio, TestObject, Testd
CI/CD tools ==> jenkins, gitlab, github, circleCI, travisCI, azure devops, AWS CodePipeline, Google Cloud
IDE ==> pycharm, intellij, eclipse, visual studio code, android studio, xcode
Performance testing tools ==> JMeter, Gatling, Locust, Apache Bench, LoadRunner, NeoLoad, SilkPerformer, Tricentis
Backend ==> API testing - (postman, rest assured, soapUI, jMeter, loadRunner)

Test management tools ==> Jira, TestLink, bugZilla

WebDriver ==> represents the browser
WebElement ==> represents a perticular DOM node (elements)

_finding elements using cssSelector and nth child_
selecting nth-of-type in selenium ==> driver.findElement(By.Selector("ul > li:nth-child(2)"))
_find element_
webElement elementName = driver.findElement(By.locatorStrategy("locatorValue"))

xPath ==> //tagname[@attribute='value'], //tagname[@attribute='value' and @attribute2='value2']

What is XPath ==> XPath can be used to navigate through elements and attributes in an XML or HTML document. It is a query language for selecting nodes in an XML document based on a tree structure. XPath is commonly used in web scraping and automated testing tools (like Selenium) to locate elements on a web page.

_types of XPath_
absolute Xpaths ==> starts with the root element (like this) ==> /html/body/header/div/a
relative Xpaths ==> they are started with the two forward slashes `//` ==> //\*[@id="btn-make-appointment"]

_locating elements ==> (using XPath)_
(\*) ==> means universaly select (find whole element)
Ex:- <a>Make Apointement</a>

known attribute = //_[@id="btn-make-appointment"]
tag name = //tagname[@attribute="value"]
visible text = //div[text()="Make Apointement"]
partial text = //a[contains(text(), "Apointement")]
inner text = //p[starts-with(text(), "Make")]
visible elements = //input[@value="enter your email"]
multiple attributes = //input[@type="text"][@class="form-control"][@placeholder="username"]
dynamic attribute = //_[contains(@href, "./profile.php#login")]
element relative to known element (parent-box, child to parent) = //_[contains(@href, "./profile.php#login")]/parent::div ==> //_[contains(@href, "./profile.php#login")]/.. ==> //_[contains(@href, "./profile.php#login")]/ ../ .. ==> (above, body-on-it) ==> //_[contains(@href, "./profile.php#login")]/ ../ ../ ..
parent and child = //a[@id="menu-close"]/i ==> //a[@id="menu-close"]/child::p ==> //a[@id="menu-close"]/ancestor::ul ==> //a[@id="menu-close"]/ancestor::nav ==> //a[@id="menu-close"]/following::li ==> //a[@id="sidbar-nav"]/preceding::a ==> //a[@id="sidbar-wrapper"]/preceding-sibling::a
locating an element by potion = //td[text()="rice"]/following-sibling::td[1]

tools validating XPath (chro path) ==> http://google.com

# start with initialize the web driver

1. open a URl = driver.get("https://google.com")
2. get current URL as text = driver.getCurrentUrl()
3. get the title = driver.getTitle()
4. get window handle = driver.getWindowHandle()
5. get window handles = driver.getWindowHandles()

String mainWindow = driver.getWindowHandle();
driver.switchTo().window(mainWindow);

`learn constructor functions and classes`

package SeleniumCommands;
import org.openqa.selenium._;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui._
import org.apache.commons.io.FileUtils;

import static org.openqa.selenium.support.ui.ExpectedConditions.PresenceOfElementLocated

import java.io.File
import java.io.IOException
import java.time.Duration
import java.util.ArrayList
import java.util.Iterator
import java.util.List
import java.util.Set
import java.util.concurrent.TimeUnit

import or.junit.Assert

public class commands {
// download the JARs
// 1. selenium-server-4.0.0-alpha-6.jar
// 2. commons-io-2.7.jar
// 3. junit-4.12.jar

    public static void main(String[] args) throws IOExeption {
        // 1. open a URL
        driver.get('https://the-internet.herokuapp.com/login')

        // 2. get current URL as text
        String currentUrl = driver.getCurrentUrl()
        System.out.println(currentUrl)
        assert.assertEquals(current, actual: "https://the-internet.herokuapp.com/login")

        // 3. get the title
        // String title = driver.getTitle()
        String title = driver.getCurrentUrl()
        System.out.println(title)

        // 4. get window handle
        driver.get("https://the-internet.herokuapp.com/windows")
        driver.findElement(By.cssSelector("#content > div > a")).click()
        String mainWindow = driver.getWindowHandle()
        System.out.println(mainWindow)

        // 5. get window handles
        Set<String> handles = driver.getWindowHandles()
        List<String> list = new ArrayList<~>(handles)

        driver.switchTo().window(List.get(1))
        String title2 = driver.getTitle()
        System.out.println(title2)
        driver.switchTo().window(List.get(0))

        // 6. DropDown Handling
        driver.get("https://the-internet.herokuapp.com/dropdown")
        Select selectByValue = new Select(driver.findElement(By.id("dropdown")))
        selectByValue.selectByVisibleText("Option 1")

        // 7. select a element
        // 8. input text in input box
        // 9. submit the form
        driver.get("https://the-internet.herokuapp.com/login")
        driver.findElement(By.id("username")).sendKeys("tomsmith")
        driver.findElement(By.id("password")).sendKeys("SuperSecretPassword")
        driver.findElement(By.className("radius")).click()
        System.out.println(driver.getCurrentUrl());  // assert.assertEquals("https://the-internet.herokuapp.com/secure")

        // 10. switch to IFrame
        // 27. clear input box
        // 28. click an element

        driver.get("https://the-internet.herokuapp.com/iframe")
        driver.manage().window().maximize()
        driver.switchTo().frame("mce_0_ifr")
        int width = driver.findElement(By.id("tinymce")).getSize().width
        System.out.println(width)
        driver.findElement(By.id("tinymce")).clear()
        driver.findElement(By.id("tinymce")).sendKeys("Hello, World!")

        // Take Screenshot
        TakesScreenshot scrShot = ((TakesScreenshot)driver)
        File srcFile = scrShot.getScreenshotAs(OutputType.FILE)
        File destFile = new File("C:/Users/username/Desktop/ScreenShot.png")
        FileUtils.copyFile(srcFile, destFile)

        // Expected condition
        driver.get("https://the-internet.herokuapp.com/iframe")
        // driver.manage().timeouts().pageLoadTimeout(time: 5, TimeUnit.SECONDS)

        webDriverWait wait = new webDriverWait(driver, timeoutInSeconds: 20)
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("tinymce")))
        wait.until(ExpectedConditions.elementToBeClickable(By.id("tinymce")))
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tinymce")))
        // quit driver
        driver.quit()

    }

}

DropDown Handling (select class) ==> Select selectByValue = new
Select(driver.findElement(By.id("selectId")));
selectByValue.selectByVisibleText("Amzad")
selectByValue.selectByIndex(2)
selectByValue.selectByValue('value_here')

# which selenium wait is better

## Implicit wait in selenium ==> implicit wait is used to set a default wait time (say 20 secs) in your automation script to wait for an element on the page. , If the element is not found within the specified time, it will throw a "NoSuchElementException".

driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)

## Explicit wait in selenium ==> explicit wait can be called as conditional wait.It tells the webDriver to wait for certain conditions before maximum time exceeded. , explicit wait can be called multiple times in a single test. It is used to wait for a certain condition to occur before proceeding.

WebDriverWait wait = new WebDriverWait(driver, 10)
wait.until(ExpectedConditions.alertsPresent())

_all expected conditions that can be used in Explicit wait_

1. alertsPresent()
2. elementSelectionStateToBe()
3. elementToBeClickable()
4. elementToBeSelected()
5. frameToBeAvaliableAndSwitchToIt()
6. invisibilityOfTheElementLocated()
7. invisibilityOfTheElementWithText()
8. presenceOfAllElementsLocatedBy()
9. presenceOfElementsLocated()
10. textToBePresentInElement()
11. textToBePresentInElementLocated()
12. textToBePresentInElementValue()
13. titlels()
14. titleContains()
15. visibilityOf()
16. visibilityOfAllElements()
17. visibilityOfAllElementsLocatedBy()
18. visibilityOfElementLocated

## fluent wait in selenium ==> fluent wait is kind of conditional wait but with frequency. It means fluent wait is used to wait for a certain condition with a regular frequency/time interval to be checked before throwing "ElementNotVisibleException"

Wait wait = new FluentWait(WebDriver reference)
.withTimeout(timeout, SECONDS)
.pollingEvery(timeout, SECONDS)
.ignoring(Exception.class)

WebElement foo = wait.until(new Function(){
public WebElement apply(WebDriver driver){
return driver.findElement(By.id("foo"));
}
})

`https://katalon-demo-cura.herokuapp.com/`
`https://the-internet.herokuapp.com/login`

# How to handle alerts/popups in selenium

(Alert, Confirm, Prompt)
Alert alert = driver.switchTo().alert()
String alertText = alert.getText()
alert.accept()
alert.dismiss()

// git command
history | grep "path"