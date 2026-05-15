const pages = document.querySelectorAll(".page");
const menuButtons = document.querySelectorAll("[data-page]");
const homeBtn = document.getElementById("homeBtn");

function openPage(pageId) {
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

menuButtons.forEach(button => {
  button.addEventListener("click", () => openPage(button.dataset.page));
});

homeBtn.addEventListener("click", () => openPage("homePage"));

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const date = now.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    weekday: "long"
  });

  const parts = date.split(", ");
  document.getElementById("clock").textContent = time;
  document.getElementById("dateText").innerHTML = `${parts[1]}<br>${parts[0]}`;
}

// setInterval(updateClock, 1000);
// updateClock();

const scheduleData = {
  "Д-22-01": [
    ["1.1<br>08:00–08:45", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["1.2<br>08:55–09:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["2<br>09:50–11:30", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["3<br>12:00–13:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["4<br>13:50–15:30", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"]
  ],
  "КС-25-01": [
    ["1<br>08:00–09:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["2<br>09:50–11:30", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["3<br>12:00–13:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"]
  ],
  "ИС-25-01": [
    ["1<br>08:00–09:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["2<br>09:50–11:30", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["3<br>12:00–13:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"]
  ],
  "ИС-25-02": [
    ["1<br>08:00–09:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["2<br>09:50–11:30", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"],
    ["3<br>12:00–13:40", "Преддипломная практика<br><small>Кондрашова Наталья Юрьевна</small>", "п/п"]
  ]
};

const groupSelect = document.getElementById("groupSelect");
const scheduleBody = document.getElementById("scheduleBody");

function renderSchedule() {
  const group = groupSelect.value;
  scheduleBody.innerHTML = scheduleData[group].map(row => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
    </tr>
  `).join("");
}

groupSelect.addEventListener("change", renderSchedule);
renderSchedule();

const teachers = [
  {
    name: "Любченко Елена Александровна",
    subject: "Русский язык и литература",
    room: "214",
    time: "среда, 14:00–15:00"
  },
  {
    name: "Агапова Алла Владимировна",
    subject: "Математика",
    room: "305",
    time: "понедельник, 13:30–14:30"
  },
  {
    name: "Ахтямов Ришат Равилевич",
    subject: "Информатика",
    room: "103",
    time: "четверг, 15:00–16:00"
  },
  {
    name: "Баранов Николай Иванович",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Бекишев Михаил Григорьевич",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Варвик Эллен Вальтеровна",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Венкова Лариса Владимировна",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Видинеев Дмитрий Юрьевич",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Глазова Ирина Владимировна",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Горбунова Валентина Александровна",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Горбунова Людмила Петровна",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Горлова Наталья Викторовна",
    subject: "История",
    room: "210",
    time: "вторник, 14:00–15:00"
  },
  {
    name: "Днепровская Галина Михайловна",
    subject: "Классный руководитель",
    room: "301",
    time: "пятница, 12:30–13:30"
  }
];

const teacherSelect = document.getElementById("teacherSelect");
const teacherCard = document.getElementById("teacherCard");

function renderTeacher() {
  const teacher = teachers[teacherSelect.value];
  teacherCard.innerHTML = `
    <h2>${teacher.name}</h2>
    <p><b>Дисциплина:</b> ${teacher.subject}</p>
    <p><b>Кабинет:</b> ${teacher.room}</p>
    <p><b>Время консультаций:</b> ${teacher.time}</p>
  `;
}

teacherSelect.addEventListener("change", renderTeacher);
renderTeacher();
