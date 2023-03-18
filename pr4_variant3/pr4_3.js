    const today = new Date();

    const currentYear = today.getFullYear();

    const newYear = new Date(currentYear, 0, 1);

    const date = newYear.getDate();
    const month = newYear.toLocaleString("ru", { month: "long" });
    const year = newYear.getFullYear();
    const weekday = newYear.toLocaleString("ru", { weekday: "long" });

    const message = `${date} ${month} ${year}, ${weekday}`;

    alert(message);