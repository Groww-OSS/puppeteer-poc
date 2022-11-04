import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();

  await page.goto('https://www.iloveimg.com/compress-image');
  // await page.goto('https://e52c-2405-201-6014-1d7b-8928-d60f-fcde-f772.ngrok.io');

  // await page.evaluate(async (formValues) => {
  //   const formFrame = document.querySelector(
  //     'iframe[src="https://uppy.io/examples/xhrupload/"]'
  //   ).contentWindow.document;
  //   console.warn(formFrame)
  // })

  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click('#pickfiles')
  ]);

  fileChooser.accept(['/Users/shivesh/Desktop/test-image.png']);

  await new Promise(r => setTimeout(r, 2000));

  await page.click('#processTask');

  await page.screenshot({ path: `screenshots/${new Date().getTime()}.png` });

  await browser.waitForTarget(() => false)
  await browser.close();
})();
