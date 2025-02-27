import puppeteer from 'puppeteer';
import {GoogleGenerativeAI} from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(' AIzaSyAvd3ElL39p1jacJ3q-rg1_UALdNwhgKmo');

const generateSummary = async(content) => {
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const response = await model.generateContent(`please summarize these content ${content}`)
console.log(response.response.text())
}
export const newsSummarize = async (req, res) => {
  const { url } = req.body;
  console.log(url)
  let browser;
  try {
    browser = await puppeteer.launch();
    console.log(browser)
    const page = await browser.newPage();
    console.log(page)

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const extractedText = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('p')).map((p) => {
        return p.innerText;
      });
     
    });
     generateSummary(`More than 1 million federal workers responded to an email asking them to document what they did last week, sent at Elon Musk's behest, White House press secretary Karoline Leavitt told reporters Tuesday.
vendor-chunk-88d7e6d83e69cb1a.js:15 Why it matters: That's only about half the federal workforce — perhaps to be expected, as many agencies told employees to ignore the email.
vendor-chunk-88d7e6d83e69cb1a.js:15 Zoom in: "We've had more than 1 million workers who have chosen to participate in this very simple task of sending five bullet points to your direct supervisor or manager, cc'ing OPM [the Office for Personnel Management]," Leavitt said, noting that she herself had sent off her five bullet points.
vendor-chunk-88d7e6d83e69cb1a.js:15 Where it stands: Leavitt noted that asking workers to report on their accomplishments is a strategy that Musk has employed at his private companies.
vendor-chunk-88d7e6d83e69cb1a.js:15 In the private sector, such strategies for assessing productivity are out of fashion these days, as companies use more sophisticated measures to understand what workers are doing, as the WSJ reported Tuesday.
vendor-chunk-88d7e6d83e69cb1a.js:15 Leavitt on Tuesday said the point of the email exercise "is to ensure that federal workers are not ripping off American taxpayers, that they are showing up to the office and that they are doing their jobs."
vendor-chunk-88d7e6d83e69cb1a.js:15 Illustration: Aïda Amer/Axios
vendor-chunk-88d7e6d83e69cb1a.js:15 The federal agency that sent out an email over the weekend asking workers what they accomplished last week can't fire those workers for not responding, claims an amended lawsuit filed Monday on behalf of federal employees.
vendor-chunk-88d7e6d83e69cb1a.js:15 Why it matters: It's the latest potential legal stumbling block for DOGE and Elon Musk's slash-and-burn workforce strategy.
vendor-chunk-88d7e6d83e69cb1a.js:15 Illustration: Sarah Grillo/Axios
vendor-chunk-88d7e6d83e69cb1a.js:15 Multiple agencies and unions have told federal workers not to respond to a new email demanding that they account for their work over the last week — despite Elon Musk's threat they'll lose their jobs if they don't.
vendor-chunk-88d7e6d83e69cb1a.js:15 Why it matters: As much as Musk's DOGE effort has disrupted the federal government so far, there's been relatively little tangible internal pushback — until now.
vendor-chunk-88d7e6d83e69cb1a.js:15 An Elon Musk post to X. Credit: @ElonMusk / X
vendor-chunk-88d7e6d83e69cb1a.js:15 Elon Musk on Saturday said all federal employees will be required to send an email reporting what they accomplished in the last week — and failing to do so will be considered a resignation.
vendor-chunk-88d7e6d83e69cb1a.js:15 Why it matters: It's a page straight out of the playbook Musk used when he took over Twitter, making workers justify themselves to stay employed.
vendor-chunk-88d7e6d83e69cb1a.js:15 Copyright Axios Media, 2024`);
  } catch (error) {}
};
