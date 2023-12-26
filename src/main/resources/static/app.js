document.addEventListener('DOMContentLoaded', function() {
    const addForm = document.getElementById('addStudentForm');
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const studentData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            middleName: document.getElementById('middleName').value,
            birthDate: document.getElementById('birthDate').value,
            groupName: document.getElementById('groupName').value
        };

        fetch('http://localhost:8080/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            loadStudents(); // Перезагружаем список студентов
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    function loadStudents() {
        fetch('http://localhost:8080/students')
            .then(response => response.json())
            .then(students => {
                const studentsList = document.getElementById('studentsList');
                studentsList.innerHTML = ''; // Очищаем список
                students.forEach(student => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${student.firstName} ${student.lastName} (${student.groupName})`;
                    studentsList.appendChild(listItem);
                });
            });
    }

    loadStudents(); // Загружаем список студентов при загрузке страницы
});