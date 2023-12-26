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
        .then(response => {
            if(response.ok) {
                loadStudents()
            }
                throw new Error('Network response was not ok.');
        })
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
                studentsList.innerHTML = '';
                students.forEach(student => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${student.firstName} ${student.lastName} (${student.groupName})`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Удалить';
                    deleteButton.onclick = function() {
                        deleteStudent(student.id);
                    };

                    listItem.appendChild(deleteButton);
                    studentsList.appendChild(listItem);
                });
            });
    }

    function deleteStudent(studentId) {
        fetch(`http://localhost:8080/students/${studentId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if(response.ok) {
                loadStudents(); // Обновляем список студентов
            } else {
                throw new Error('Ошибка при удалении студента');
            }
        })
        .catch(error => console.error('Error:', error));
    }


    loadStudents(); // Загружаем список студентов при загрузке страницы
});