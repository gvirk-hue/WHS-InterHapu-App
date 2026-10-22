function showStudent() {

            var student = document.getElementById("student").value;
            var profile = document.getElementById("profile");


            if (student == "gurleen") {

                profile.innerHTML = `
                    <h2>Gurleen</h2>

                    <img src="gurleen.jpeg" alt="Photo of Gurleen">

                    <p><b>Year Level:</b> Year 11</p>

                    <p><b>Interests:</b> Tennis, science and technology</p>

                    <p><b>About:</b> Great student, no trouble.</p>
                `;

            }


            else if (student == "cassidy") {

                profile.innerHTML = `
                    <h2>Cassidy</h2>

                    <img src="cassidy.jpeg" alt="Photo of Cassidy">

                    <p><b>Year Level:</b> Year 11</p>

                    <p><b>Interests:</b> Football and music</p>

                    <p><b>About:</b> Horrible Student, constantly fighting. Please find a reason to suspend her.</p>
                `;

            }


            else if (student == "sophie") {

                profile.innerHTML = `
                    <h2>Sophie</h2>

                    <img src="Sophie.jpeg" alt="Photo of Sophie">

                    <p><b>Year Level:</b> Year 12</p>

                    <p><b>Interests:</b> Art and reading</p>

                    <p><b>About:</b> Sophie enjoys creative activities and reading.</p>
                `;

            }


            else {

                profile.innerHTML = `
                    <p>Select a student to see their profile.</p>
                `;

            }

        }
