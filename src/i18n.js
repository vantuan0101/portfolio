import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    'Link Profile': 'Link Profile',
                    'Change Language': 'Change Language',
                    'English': 'English',
                    'China': 'China',
                    'Japan': 'Japan',
                    'Korea': 'Korea',
                    'One may say': 'One may say',
                    ' the eternal mystery': ' the eternal mystery',
                    'of the world is its': 'of the world is its',
                    ' comprehensibility.': ' comprehensibility.',
                    'The eye sees only what the mind is': 'The eye sees only what the mind is',
                    ' prepared to comprehend.': ' prepared to comprehend.',
                    'Don’t cry over the past, it’s gone.': 'Don’t cry over the past, it’s gone.',
                    'Don’t stress about the future, it hasn’t arrived.':
                        'Don’t stress about the future, it hasn’t arrived.',
                    'Live in the present and make it beautiful.': 'Live in the present and make it beautiful.',

                    'Back': 'Back',
                    'Link Profile': 'Link Profile',
                    'Close': 'Close',
                    'Showcase': 'Showcase',
                    'Font-end': 'Font-end',
                    'Back-end': 'Back-end',
                    'Design': 'Design',
                    'Year': 'Year',
                    'Visit Website': 'Visit Website',
                    'Hello! I’m': 'Hello! I’m',
                    "I work as the creative front-end developer. I'm ready to collaborate with new opportunities and challenges as a freelancer for web design and development":
                        "I work as the creative front-end developer. I'm ready to collaborate with new opportunities and challenges as a freelancer for web design and development",
                    'Have an idea?': 'Have an idea?',

                    "Let's make something together": "Let's make something together",

                    'Designed by': 'Designed by',
                    'Developed by': 'Developed by',
                    'All rights reserved 2022': 'All rights reserved 2022',
                },
            },
            cn: {
                translations: {
                    'English': '英语',
                    'China': '中国',
                    'Japan': '日本',
                   'Korea': '韩国',
                    'Link Profile': '链接配置文件',
                    'Change Language': '改变语言',
                    'One may say': '有人可能会说',
                    ' the eternal mystery': ' 永恒之谜',
                    'of the world is its': '世界是它的',
                    ' comprehensibility.': ' 可理解性。',
                    'The eye sees only what the mind is': '眼睛只看到头脑是什么',
                    ' prepared to comprehend.': ' 准备理解。',
                    'Don’t cry over the past, it’s gone.': '不要为过去哭泣，它已经过去了。',
                    'Don’t stress about the future, it hasn’t arrived.': '不要担心未来，它还没有到来。',
                    'Live in the present and make it beautiful.': '活在当下，让它变得美丽。',

                    'Back': '后退',
                    'Link Profile': '链接配置文件',
                    'Close': '关',
                    'Showcase': '展示柜',
                    'Font-end': '前端',
                    'Back-end': '后端',
                    'Design': '设计',
                    'Year': '年',
                    'Visit Website': '访问网站',
                    'Hello! I’m': '你好！ 我是',
                    "I work as the creative front-end developer. I'm ready to collaborate with new opportunities and challenges as a freelancer for web design and development":
                        "我是创意前端开发人员。 作为网页设计和开发的自由职业者，我已准备好应对新的机遇和挑战",
                    'Have an idea?': '有想法吗？',
                    
                    'Let’s make something together!': '让我们一起做点什么吧！',
                    'Designed by': '设计者',
                    'Developed by': '由开发',
                    'All rights reserved 2022': '版权所有 2022',
                },
            },
            jp: {
                translations: {
                    'English': '英語',
                    'China': '中国',
                    'Japan': '日本',
                    'Korea': '韓国',
                    'Link Profile': 'リンクプロファイル',
                    'Change Language': '言語を変更',
                    'One may say': '人は言うかもしれません',
                    ' the eternal mystery': ' 永遠の謎',
                    'of the world is its': '世界の',
                    ' comprehensibility.': ' わかりやすさ。',
                    'The eye sees only what the mind is': '目は心が何であるかだけを見る',
                    ' prepared to comprehend.': ' 理解する準備をしました。',
                    'Don’t cry over the past, it’s gone.': '過去を泣かないでください、それはなくなっています。',
                    'Don’t stress about the future, it hasn’t arrived.':
                        '未来について強調しないでください、それは到着していません。',
                    'Live in the present and make it beautiful.': '現在に生き、それを美しくしてください。',

                    'Back': '戻る',
                    'Link Profile': 'リンクプロファイル',
                    'Close': '近い',
                    'Showcase': 'ショーケース',
                    'Font-end': 'フォント終了',
                    'Back-end': 'バックエンド',
                    'Design': 'デザイン',
                    'Year': '年',
                    'Visit Website': 'ウェブサイトを訪問',
                    'Hello! I’m': 'こんにちは！ 私は',
                    "I work as the creative front-end developer. I'm ready to collaborate with new opportunities and challenges as a freelancer for web design and development":
                        "私はクリエイティブなフロントエンド開発者として働いています。 私はウェブデザインと開発のフリーランサーとして、新しい機会と課題に協力する準備ができています。",
                    'Have an idea?': 'アイディアがある？',
                    

                    'Let’s make something together!': '一緒に何か作ってみよう',
                    'Designed by': 'によって設計された',
                    'Developed by': 'によって開発された',
                    'All rights reserved 2022': '全著作権所有2022',
                },
            },
            kr: {
                translations: {
                    'English': '영어',
                    'China': '중국',
                    'Japan': '일본',
                    'Korea': '한국',
                    'Link Profile': '프로필 링크',
                    'Change Language': '언어 변경',
                    'One may say': '하나는 말할 수 있습니다',
                    ' the eternal mystery': ' 영원한 신비',
                    'of the world is its': '세상의 것은 그것의',
                    ' comprehensibility.': ' 이해도.',
                    'The eye sees only what the mind is': '눈은 마음만 본다',
                    ' prepared to comprehend.': ' 이해하기 위해 준비했습니다.',
                    'Don’t cry over the past, it’s gone.': '과거에 대해 울지 마세요, 지나간 일입니다.',
                    'Don’t stress about the future, it hasn’t arrived.':
                        '미래에 대해 스트레스를받지 마십시오. 오지 않았습니다.',
                    'Live in the present and make it beautiful.': '현재에 살고 아름답게 만드십시오.',

                    'Back': '뒤',
                    'Link Profile': '링크 프로필',
                    'Close': '닫다',
                    'Showcase': '쇼케이스',
                    'Font-end': '글꼴 끝',
                    'Back-end': '백엔드',
                    'Design': '설계',
                    'Year': '년도',
                    'Visit Website': '웹사이트 방문',
                    'Hello! I’m': '안녕하세요! 나는',
                    "I work as the creative front-end developer. I'm ready to collaborate with new opportunities and challenges as a freelancer for web design and development":
                        "저는 크리에이티브 프론트엔드 개발자로 일하고 있습니다. 저는 웹 디자인 및 개발을 위한 프리랜서로서 새로운 기회와 도전과 함께 협업할 준비가 되어 있습니다.",
                    'Have an idea?': '아이디어가 있습니까?',

                    'Let’s make something together!': '함께 무언가를 만들어 봅시다!',
                    'Designed by': '에 의해 설계된',
                    'Developed by': '에 의해 개발',
                    'All rights reserved 2022': '판권 소유 2022',
                },
            },
        },
        fallbackLng: 'en',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
