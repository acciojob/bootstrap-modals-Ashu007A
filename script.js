//your code here

		var myModal = new bootstrap.Modal(document.getElementById('newton-modal'), {
            backdrop: 'static'
        });

        document.getElementById('open-modal').addEventListener('click', function () {
            myModal.show();
        });