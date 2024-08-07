function checkSessionTimeout() {
    fetch('/check-session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            if (data.message === 'Your session has expired. Please login again.') {
                alert(data.message);
                window.location.href = '/logout';
            }
        }).catch(err => {
            console.error('Error checking session:', err);
        });
}

// Call this function periodically to check for session timeout
setInterval(checkSessionTimeout, 1000); // Check every second