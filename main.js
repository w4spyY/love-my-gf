const reasons = [
    "Я тебя люблю за твою маленькую, но такую удивительно сильную личность, которая делает тебя особенной среди всего мира.",
    "Я тебя люблю за то, как твои рыжие волосы красиво сверкают на солнце.",
    "Я тебя люблю за твою улыбку, за то, как она заставляет меня верить в светлое будущее.",
    "Я тебя люблю за то, как твои зеленые глаза играют с оттенками желтого и золотого, когда ты смеешься, и как они становятся огромными и искренними, когда ты смотришь на меня с любовью.",
    "Я тебя люблю за твою заботливость, за то, как ты обращаешь внимание на маленькие детали.",
    "Я очень сильно скучаю...👉👈",
    "Я тебя люблю за то, как ты становишься похожей на светящееся солнышко, когда улыбаешься.",
    "Я тебя люблю за то, как твой маленький рост так идеально сочетается с твоим огромным сердцем.",
    "Я тебя люблю за твое умение быть настоящей, что делает тебя еще более красивой в моих глазах.",
    "Я тебя люблю за твою любовь к жизни, за то, как ты можешь быть одновременно такой страстной и мягкой.",
    "Я тебя люблю за твою способность показывать свою любовь через маленькие жесты.",
    "Я тебя люблю за твой невероятный смех, ДА мне он нравится.",
    "Я тебя люблю за то, как ты умеешь смотреть на меня, когда ты счастлива — так, как будто весь мир вокруг нас теряет значение.",
    "Я тебя люблю за то, как твои зеленые глаза блестят, когда ты рассказываешь о своих мечтах",
    "Я тебя люблю за твой невероятный вкус в одежде, за то, как ты всегда выглядишь так неповторимо и уникально.",
    "Я тебя люблю за твою стойкость, за то, как ты, не боишься столкнуться с трудностями.",
    "Я тебя люблю за твое терпение и внимание, за то, как ты слушаешь меня до конца и поддерживаешь, даже когда я сам не уверен в себе.",
    "Я тебя люблю за твою любовь к животным (особенно попугаям), за то, как ты заботишься о них и делаешь мир лучшим.",
    "Я тебя люблю за твою энергию и задор, за то, как ты наполняешь любые моменты особенным светом и радостью.",
    "Я тебя люблю за то, как ты смотришь на меня, когда мы просто сидим друг на против друга (жду пока это будет в жизни).",
    "",
];

const startDate = new Date("2025-02-16");

const currentDate = new Date();

const timeDifference = currentDate - startDate;
const dayOfYear = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

if (dayOfYear < 0) {
    document.getElementById('reasons-container').innerHTML = "Пожалуйста, подождите до 15 февраля 2025 года!";
} else {
    const reasonsContainer = document.getElementById('reasons-container');

    for (let i = 0; i <= dayOfYear; i++) {
        const reasonIndex = i % reasons.length;

        const newReason = document.createElement('p');
        newReason.textContent = `${i + 1}. ${reasons[reasonIndex]}`;

        reasonsContainer.appendChild(newReason);
    }
}