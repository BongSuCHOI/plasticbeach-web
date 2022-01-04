# Plasticbeach WEB Prototype

demo: https://bongsuchoi.github.io/plasticbeach-web/

## 디렉토리 구조

```text
|- [docs] # 빌드 후 아웃풋 (배포용 리소스)
|- [src] # 개발 리소스
    |- [css] # css, scss파일
        |- [scss] # scss 작성 후 css로 변환
    |- [fonts] # font폴더
    |- [images] # 각종 image 폴더
        |- [btn]
        |- [favicon]
        |- [img] # 모든 프로젝트 슬라이더 이미지
    |- [js] # 각종 js 폴더
        |- index.js # entry 포인트 스크립트
        |- contact.js # contact 관련 스크립트
        |- work.js # work 관련 스크립트
        |- [data] # json data 폴더
            |- text.json # 홈페이지에 들어가는 텍스트 한/영 파일
            |- work.json # 프로젝트 리스트 정보 파일
        |- [module] # 글로벌하게 쓰이는 스크립트 폴더
            |- ???.js # etc
|- webpack.config.js # 웹팩 기본 환경 설정 파일
|- webpack.dev.js # 웹팩 dev 환경
|- webpack.prod.js # 웹팩 production 환경
```

## Usage

### Node 패키지 인스톨

```bash
npm i
```

### Development server

```bash
npm run start
```

### Production build

```bash
npm run buildProd
```

## Dependencies

```bash
npm i package.name@version
ex) npm i gsap@3.8.0
```

### Plugins

-   [`emailjs-com - 3.2.0`](https://www.emailjs.com/docs/) - Send Email Directly From JavaScript
-   [`gsap - 3.8.0`](https://github.com/greensock/GSAP) - Professional-grade animation for the modern web
-   [`smooth-scrollbar - 8.7.0`](https://github.com/idiotWu/smooth-scrollbar) - Customizable, Flexible, and High Performance Scrollbars
-   [`swiper - 7.4.1`](https://github.com/nolimits4web/swiper) - Is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior

## devDependencies

```bash
npm i -D package.name@version
ex) npm i -D webpack@5.64.4
```

### Webpack
-   [`webpack - 5.64.4`](https://github.com/webpack/webpack) - Module and asset bundler.
-   [`webpack-cli - 4.9.1`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
-   [`webpack-dev-server - 4.6.0`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
-   [`webpack-merge - 5.8.0`](https://github.com/survivejs/webpack-merge) - Simplify development and production configuration.

### Babel

-   [`@babel/core - 7.16.0`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
-   [`@babel/preset-env - 7.16.4`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
-   [`@babel/plugin-transform-runtime - 7.16.4`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - A plugin that enables the re-use of Babel's injected helper code to save on codesize.
-   [`@babel/runtime - 7.16.3`](https://babeljs.io/docs/en/babel-runtime) - Is a library that contains Babel modular runtime helpers and a version of regenerator-runtime.

### Loaders

-   [`babel-loader - 8.2.3`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
-   [`css-loader - 6.5.1`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
-   [`file-loader - 6.2.0`](https://v4.webpack.js.org/loaders/file-loader/) - The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
-   [`html-loader - 3.0.1`](https://webpack.js.org/loaders/html-loader/) - Exports HTML as string. HTML is minimized when the compiler demands.
-   [`sass-loader - 12.3.0`](https://webpack.js.org/loaders/sass-loader/) - Loads a Sass/SCSS file and compiles it to CSS.
-   [`url-loader - 4.1.1`](https://v4.webpack.js.org/loaders/url-loader/) A loader for webpack which transforms files into base64 URIs.

### Plugins

-   [`clean-webpack-plugin - 4.0.0`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
-   [`css-minimizer-webpack-plugin - 3.2.0`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - css optimize and minify.
-   [`html-webpack-plugin - 5.5.0`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template in our case pug.
-   [`mini-css-extract-plugin - 2.4.5`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.
-   [`sass - 1.44.0`](https://www.npmjs.com/package/sass) - This package is a distribution of Dart Sass, compiled to pure JavaScript with no native code or external dependencies. It provides a command-line sass executable and a Node.js API.
-   [`terser-webpack-plugin - 5.2.5`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minify JavaScript.

## Json Data

### text.json

```json
[
    {
        "title": {
            "ko": "플라스틱 비치<br>크리에이티브 스튜디오",
            "en": "plastic beach<br>creative studio"
        },
        "email": {
            "ko": "이 : contact@plasticbeach.net",
            "en": "e : contact@plasticbeach.net"
        },
        "address": {
            "ko": "서울특별시 마포구 동교로 7 삭녕빌딩 4층 (주)에이엠아일랜드",
            "en": "a : 7, donggyo - ro 19 gil, mapo-gu, seoul"
        },
        "contact_info": {
            "ko": "1. 우리에게 몇가지 정보를 알려주세요.",
            "en": "1. how can we contact you?"
        },
        "cus_full_name": {
            "ko": "이름",
            "en": "Full name"
        },
        "cus_position": {
            "ko": "직책",
            "en": "Position"
        },
        "cus_organization": {
            "ko": "기관 혹은 기업명",
            "en": "Organization"
        },
        "cus_email": {
            "ko": "이메일",
            "en": "Email"
        },
        "cus_phone": {
            "ko": "전화번호",
            "en": "Phone"
        },
        "cus_url": {
            "ko": "사이트 주소",
            "en": "URL"
        },
        "budgiet_info": {
            "ko": "2. 예산과 일정을 어떻게 되나요?",
            "en": "2. please share your budgiet and timelime"
        },
        "budgiet_default": {
            "ko": "예산",
            "en": "Please Select..."
        },
        "timeline_default": {
            "ko": "일정",
            "en": "Please Select..."
        },
        "project_info": {
            "ko": "3. 어떻게 도와드리면 될까요?",
            "en": "3. how can we help you?"
        },
        "project_text": {
            "ko": "프로젝트에 대해 설명해주세요.<span>1000 chat max</span>",
            "en": "Describe your project<span>1000 chat max</span>"
        },
        "project_file": {
            "ko": "파일 업로드<span>pdf, zip 3Mb max</span>",
            "en": "Upload your file<span>pdf, zip 3Mb max</span>"
        },
        "file_btn": {
            "ko": "찾기",
            "en": "Find"
        },
        "policy_chk": {
            "ko": "개인정보 정책에 동의합니다.",
            "en": "I accept the terms of the privacy policy and I agree"
        },
        "submit_btn": {
            "ko": "프로젝트 문의하기",
            "en": "get in touch"
        },
        "marquee": {
            "ko": "우리는 당신이 상상하는 모든 것들을 플라스틱 비치에서 만들어냅니다.",
            "en": "creative every fantasy whateever you imagine in plastic beach"
        },
        "category_all": {
            "ko": "전체",
            "en": "ALL"
        },
        "category_mv": {
            "ko": "뮤직비디오",
            "en": "MV"
        },
        "category_ad": {
            "ko": "광고",
            "en": "AD"
        }
    },
    {
        "budgiet_option01": {
            "ko": "~ 1 천만원",
            "en": "~ 10 million"
        },
        "budgiet_option02": {
            "ko": "1 ~ 3 천만원",
            "en": "10 ~ 30 million"
        },
        "budgiet_option03": {
            "ko": "3 ~ 5 천만원",
            "en": "30 ~ 50 million"
        },
        "budgiet_option04": {
            "ko": "50 천만원 ~ 1 억원",
            "en": "50 ~ 100 million"
        },
        "budgiet_option05": {
            "ko": "1억원 ~",
            "en": "100 million ~"
        },
        "budgiet_option06": {
            "ko": "기타",
            "en": "etc"
        }
    },
    {
        "timeline_option01": {
            "ko": "~ 2 주",
            "en": "~ 2 week"
        },
        "timeline_option02": {
            "ko": "2 ~ 4 주",
            "en": "2 ~ 4 week"
        },
        "timeline_option03": {
            "ko": "1 달 ~",
            "en": "1 month"
        }
    }
]
```
```jsonc
[
    {
        "data-name": { // html Tag의 data-name='???'과 매치되는 요소의 텍스트
            "ko": "", // 국문
            "en": "" // 영문
        }
    },
    {
        "budgiet_option??": { // 예산 옵션
            "ko": "", // 국문
            "en": "" // 영문
        }
    },
    {
        "timeline_option??": { // 기간 옵션
            "ko": "", // 국문
            "en": "" // 영문
        }
    }
]
```

### work.json

```json
[
    {
        "year": "2021",
        "name": "aespa01",
        "url": "4TWR90KJl84",
        "category" : "mv",
        "title": {
            "ko": "뮤직비디오 - 01테스트 01테스트 01테스트",
            "en": "music video - gas pedal"
        },
        "detail": {
            "imgName": [
                "aespa01_01.jpg",
                "aespa01_02.jpg",
                "aespa01_03.jpg"
            ],
            "vfx": "PLASTIC BEACH",
            "sv": "OHZEON",
            "asv": "JOJEEM",
            "pm": "SONG CHANYOUNG / JEONG JIEUN",
            "pd": "JANG KYUTAE / AHN SOHYUN",
            "art3d": "LEE KWANGWON / KIM DOYEON / LEE JEONGHWA / JEON JIWON / KIM HYEJI",
            "art2d": "JANG GIHOON / LEE HYUNJUN / SHIN HYEONSUNG",
            "fx": "WE JUNGIN"
        }
    }
]
```
```jsonc
[
    {
        "year": "", // 프로젝트 상세 드롭다운 메뉴에 표시 될 년도
        "name": "", // 프로젝트를 감싸는 html태그에 해당 프로젝트의 유니크한 값 부여 혹은 다른 프로젝트와 구분하기 위한
        "url": "", // **하단에 추가 설명 - embedUrl**
        "category" : "", // mv & ad 두 종류 - 카테고리 분류하기 위함
        "title": { // 프로젝트 리스트 + 상세 드롭다운 메뉴에 표시 될 프로젝트 제목
            "ko": "", // 국문
            "en": "" // 영문
        },
        "detail": { // 상세 드롭다운 메뉴 정보
            "imgName": [ // **하단에 추가 설명 - imgName**
                ""
            ],
            "vfx": "", // vfx ~ fx 각 항목에 들어갈 정보
            "sv": "",
            "asv": "",
            "pm": "",
            "pd": "",
            "art3d": "",
            "art2d": "",
            "fx": ""
        }
    }
]
```

### - embedUrl (mouse-over-tooltip YouTube Embed URL)

-   유튜브 url(youtube.com/watch?v=H69tJmsgd9I) 중에 'watch?v=' 이후에 'H69tJmsgd9I' 해당 값만 사용
-   혹은 공유하기 클릭 후 나오는 modal에서 'youtu.be/' 이후에 'H69tJmsgd9I' (위와 동일)

### - imgName (slider-image data)

-   실제 이미지 파일과, jsonData의 정보가 일치
    -   ex) 실제 이미지 : projectName-year-01.jpg 라면, jsonData : "projectName-year-01.jpg"
-   한 프로젝트에 들어가는 이미지들은 모두 사이즈 통일
-   해당 json 정보에 넣은 프로젝트 이미지들은 무조건 ./src/images/img 안에 추가
-   웹 사이트 퍼포먼스를 위한 이미지 가이드
    -   최소 가로 2000px(4~5000px처럼 과도한게 큰 사이즈는 불필요)
    -   확장자 jpg, png 상관없지만, 상대적으로 용량이 작은 jpg 권장
    -   포토샵 이미지 저장시 퀄리티 7 권장
    -   포토샵 이미지 저장시 "기본 최적화" 옵션 선택 권장