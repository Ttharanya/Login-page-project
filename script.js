function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    // Toggle the input type between password and text
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁‍🗨';// Change to closed eye icon

    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '🔒';// Change to closed eye icon
        
    }
}
