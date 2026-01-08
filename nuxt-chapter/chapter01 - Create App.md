# Create App

Nuxt គឺជា Framework ស្ថាបនាឡើងលើ Vue 3 ដែលគាំទ្រ SSR, SSG និង CSR។ មានឯកសារណែនាំ https://nuxt.com/

## Create Project

នៅក្នុងការដំឡើង Nuxt ខ្ញុំនិងធ្វើការដំឡើងតាម `​​​pnpm`

1. តម្រូវឳ្យមានកម្មវិធី
    - git
    - Node.js
2. Install `pnpm` - Performant npm
    - install
        For Windows
        ```bash
        npm install -g pnpm
        ```

        For MacOS
        ```bsh
        brew install pnpm
        ```
    - check version
        ```bash
        pnpm -v
        ```

3. Install nuxt lastest
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
4. Run Server
    - use command
    ```bash
    cd nuxt-app
    pnpm run dev
    ```
6. លំហាត់
សូមប្អូនៗបង្កើត Project ឈ្មោះ nuxt4-app4