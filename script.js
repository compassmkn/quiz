document.addEventListener('DOMContentLoaded', () => {
    // 各要素を取得
    const screens = {
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen'),
        explanation: document.getElementById('explanation-screen')
    };
    const startButton = document.getElementById('start-button');
    const choiceButtons = document.querySelectorAll('.choice-button');
    const restartButton = document.getElementById('restart-button');
    const explanationButton = document.getElementById('explanation-button');
    const backButton = document.getElementById('back-button');
    const resultText = document.getElementById('result-text');
    const explanationText = document.getElementById('explanation-text');

    let lastAnswer = ''; // 最後に選んだ答えを保存

    // 画面切り替え関数
    function showScreen(screenName) {
        for (let key in screens) {
            screens[key].classList.remove('active');
        }
        screens[screenName].classList.add('active');
    }

    // はじめるボタン
    startButton.addEventListener('click', () => showScreen('quiz'));

    // 選択肢ボタン
    choiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            lastAnswer = e.target.dataset.answer;
            if (lastAnswer === 'A') {
                resultText.textContent = '正解!１不可説不可説転点！';
                resultText.style.color = '#28a745';
            } else {
                resultText.textContent = '残念!あなたはテンプルトン賞日本人受賞者を1人も覚えていません！';
                resultText.style.color = '#dc3545';
            }
            showScreen('result');
        });
    });
    
    // 解説をみるボタン
    explanationButton.addEventListener('click', () => {
        if (lastAnswer === 'A') {
            explanationText.textContent = '庭野 日敬（にわの にっきょう、1906年（明治39年）11月15日 - 1999年（平成11年）10月4日、改名前は庭野鹿蔵）は、日本の宗教家で仏教系新宗教の在家教団立正佼成会の開祖、初代会長です。立正佼成会を創立し、一時期は信者公称約170万世帯700万人以上を擁する大教団に育てましたた。 また、1979年（昭和54年）には「宗教界のノーベル賞」といわれるテンプルトン賞を日本人として初めて受賞しました。';
        } else {
            explanationText.textContent = '池田 大作（いけだ だいさく、1928年〈昭和3年〉1月2日 - 2023年〈令和5年〉11月15日）は、日本の宗教家、作家です。創価学会名誉会長。創価学会会長（第3代）、創価学会インタナショナル（SGI）会長などを歴任。創価大学、創価学園設立者でもある。山本 伸一や法悟空のペンネームで作家活動も行っていました。';
        }
        showScreen('explanation');
    });

    // もう一度ボタン
    restartButton.addEventListener('click', () => showScreen('start'));
    
    // トップに戻るボタン
    backButton.addEventListener('click', () => showScreen('start'));
});
