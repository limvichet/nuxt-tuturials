@import "style.less"

# Introdcution to Nuxt

`Vue` គឺជា JavaScript Framework មួយដែលត្រូវបានបង្កើតឡើងសម្រាប់បង្កើត User Interfaces និង Single-Page Applications។ វាផ្តោតសំខាន់ទៅលើស្រទាប់បង្ហាញ (View Layer) ហើយបង្កើតឡើងនៅឆ្នាំ២០១៤ ដោយលោក Evan You។

`Nuxt` គឺជា Framework មួយដែលបង្កើតឡើងលើ Vue 3 ដើម្បីជួយអភិវឌ្ឍគេហទំព័រ និង Web Application ឲ្យមានល្បឿនលឿន ងាយស្រួល និងមានប្រសិទ្ធភាព ហើយបង្កើតឡើងនៅឆ្នាំ២០១៦ ដោយបងប្អូនត្រកូល Chopin។ Nuxt គាំទ្ររបៀបបង្ហាញទំព័រច្រើនប្រភេទ ដូចជា៖

- **SSR** (Server-Side Rendering)៖ បង្កើតទំព័រនៅលើ Server មុនផ្ញើទៅ Browser ជួយឲ្យគេហទំព័រលឿន និងល្អសម្រាប់ SEO (Search Engine Optimization)
- **SSG** (Static Site Generation)៖ បង្កើតទំព័រ Static ជាមុន សម្រាប់គេហទំព័រដែលមិនផ្លាស់ប្តូរញឹកញាប់
- **CSR** (Client-Side Rendering)៖ បង្ហាញទំព័រនៅលើ Browser ដោយ JavaScript

Nuxt ក៏មានឯកសារណែនាំផ្លូវការ ដែលពន្យល់ពីការប្រើប្រាស់ និងរចនាសម្ព័ន្ធគម្រោងយ៉ាងលម្អិត នៅគេហទំព័រផ្លូវការ - [https://nuxt.com/](https://nuxt.com/)
### Create Project

នៅក្នុងការដំឡើង Nuxt ខ្ញុំនិងធ្វើការដំឡើងតាម `​​​pnpm`

#### 1. តម្រូវមានកម្មវិធី
- git
- Node.js

#### 2. Install `pnpm` - Performant npm
- For Windows install
    ```bash
    npm install -g pnpm
    ```
- For MacOS
    ```bsh
    brew install pnpm
    ```
- check version
    ```bash
    pnpm -v
    ```

#### 3. Install nuxt lastest
- use command
    ```bash
    pnpm create nuxt@latest
    ```
- Wich template would you like to use? 
    - Choose minimal setup for nuxt
- Where would tyou like to create your project?
    - type **nuxt-app**
- Which Package manager would you like to use?
    Choose pnpm
- Initialize git rpository? 
    - Choose No
- Woul you like to install any of ther offical modules?
    - Choose Yes 
    - tab key with eslint, fonts, icon and image
- Do you want to install better sqlite package?
    - Choose No
#### 4. Run Server
- use command
    ```bash
    cd nuxt-app
    pnpm run dev
    ```

#### 5. Install tailwind nuxt
- [Click here to install Tailwind](https://tailwindcss.com/docs/installation/framework-guides/nuxt)
- Follow descriptions

#### 6. Install type script
> pnpm add -D vue-tsc typescript

#### 7. លំហាត់
សូមប្អូនៗបង្កើត Project ឈ្មោះ nuxt4-app4

@import "footer.md"
