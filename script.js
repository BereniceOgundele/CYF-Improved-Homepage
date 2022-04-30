let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://www.comebeforewinter.org');
new_a.innerText = 'come before winter';

new_li.appendChild(new_a);

element_list.appendChild(new_li);
let element_list2 = document.getElementById('list');
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiJ2sTpkLr3AhWJrO0KHZI9D9MYABAAGgJkZw&ae=2&ohost=www.google.com&cid=CAESbeD2ybiCgnMXXdkbAUmxDMiRNRbfks2A-RjOCI9BqI5Us1eI0X8hKC4orlkVXRTz4eqbQsQ8CbYwfrP1HhH7M41sdeuoQFS_D64ephGDo5zetHDflXAObWqxJ6CmcHs9dD19t1vU_OUsqASjh9Q&sig=AOD64_1DjMrB8IL_Z6G7PeMnft3B_bLCUw&q&adurl&ved=2ahUKEwiTk77pkLr3AhVjQkEAHYYLCfMQ0Qx6BAgDEAE');
new_a2.innerText = 'coursera';

new_li2.appendChild(new_a2);

element_list2.appendChild(new_li2);





/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
