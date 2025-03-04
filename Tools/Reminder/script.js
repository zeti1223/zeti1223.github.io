const form = document.getElementById('reminder-form');
const input = document.getElementById('reminder-input');
const reminderList = document.getElementById('reminder-list');

let reminders = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const reminder = input.value;
  if (reminder) {
    reminders.push(reminder);
    input.value = '';
    displayReminders();
  }
});

function displayReminders() {
  reminderList.innerHTML = '';
  for (let i = 0; i < reminders.length; i++) {
    const li = document.createElement('li');
    li.textContent = reminders[i];
    reminderList.appendChild(li);
  }
}
