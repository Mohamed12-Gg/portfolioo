// ========== Form Validation (Optional - FormSubmit handles submission) ==========
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            // Basic client-side validation (HTML5 required attributes also work)
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            
            // Check if fields are filled (HTML5 required will catch this too)
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                e.preventDefault();
                alert('Please fill in all fields!');
                return false;
            }
        });

        // ========== Smooth Scroll ==========
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                let target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // ========== Dark Mode Toggle ==========
        document.getElementById('themeToggle').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = this.querySelector('i');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });