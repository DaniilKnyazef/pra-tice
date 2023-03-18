    const str = "Красивая осень наступила, листья деревьев стали желтого, красного и оранжевого цвета";
    const letter = "о";

    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }

    const message = `Буква "${letter}" встречается в строке "${str}" ${count} раз.`;
    alert(message);