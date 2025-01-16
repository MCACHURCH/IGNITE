// Example: Dynamically load events from an array
const events = [
    {
     title: "Underground Church",
     date: "January 19th, 6-9PM",
     img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pliasheva_Radyvylivskyi_Rivnenska-Mykhailivska_church-underground_tunnel.jpg",
     description: "We will be playing underground church at MCA.",
   },
  {
    title: "Snow Trails Tubing",
    date: "February 15th, Time: 1:30-7",
    img: "https://www.snowtrails.com/upload/tubing/24-1-21_vertical-descent-tubing-park_snow-trails-ohio-01856-hd.jpg",
    description: "Snow tubing at Snow Trails in Mansfield.",
    link: "snowtrails.html",
  },
   {
     title: "Volleyball Night",
     date: "April 26th, 5-8PM",
     img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Volleyball.svg",
     description:
       "Volleyball Night at MCA",
   },
];
function menuHandler() {
  document.querySelector("#open-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
  });

  document.querySelector("#close-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

  // Close the nav menu if any link inside the wrapper is clicked
  document
    .querySelector("header nav .wrapper")
    .addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        document
          .querySelector("header nav .wrapper")
          .classList.remove("nav-open");
      }
    });
}

function renderEvents() {
  const eventList = document.getElementById("events");
  if (!eventList) {
    console.error('Element with ID "events" not found.');
    return;
  }
  events.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.className = "event-item";
    eventItem.href = event.link;
    eventItem.innerHTML = `
      <img src="${event.img}" alt="${event.title}">
      <h4>${event.title}</h4>
      <p class="event-date">${event.date}</p>
      <p class="event-desc">${event.description}</p>
    `;
    eventList.appendChild(eventItem);
  });
}
// Existing events and menuHandler code

document.addEventListener("DOMContentLoaded", function () {
  renderEvents();
  menuHandler();

  // Calendar iframe handling
  const calendarFrame = document.getElementById("calendar-frame");

  // URLs for different calendar views
  const mobileCalendarSrc =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&mode=AGENDA&showPrint=0&showTz=0&showDate=0&showTitle=0&src=anJoaWdobWNhQGdtYWlsLmNvbQ&color=%23039BE5";
  const desktopCalendarSrc =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&mode=MONTH&showTitle=0&src=anJoaWdobWNhQGdtYWlsLmNvbQ&color=%23039BE5";

  // Set the calendar iframe src based on screen width
  if (window.innerWidth <= 768) {
    calendarFrame.src = mobileCalendarSrc; // for mobile devices
  } else {
    calendarFrame.src = desktopCalendarSrc; // for desktop devices
  }
});
