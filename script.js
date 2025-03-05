function openTab(tabName) {
    // Hide all tab sections
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Set the active tab button
    event.currentTarget.classList.add('active');
}
